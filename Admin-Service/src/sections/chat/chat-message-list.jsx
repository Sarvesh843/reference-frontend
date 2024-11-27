import useSWR from 'swr';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import Box from '@mui/material/Box';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Scrollbar from 'src/components/scrollbar';
import Lightbox, { useLightBox } from 'src/components/lightbox';
import { newMsgSound, useGetParticipants } from 'src/api/chatt';
// import useSocket from 'src/hooks/use-socket';
import ChatMessageItem from './chat-message-item';
import { useMessagesScroll } from './hooks';


const SOCKET_URL = 'http://43.204.2.152';

export default function ChatMessageList({ handleSetConnectedUser, messages, userId }) {
  const location = useLocation();
  const [lastMessageRead, setLastMessageRead] = useState(0);
  const conversationId = new URLSearchParams(location.search).get('id');

  const { participants } = useGetParticipants(conversationId);

  console.log({ participants });

  const [chatData, setChatData] = useState([]); // Initialize with prop messages
  const socketRef = useRef(null); // Ref for socket connection

  // Using useMessagesScroll hook for scrolling functionality
  const { messagesEndRef } = useMessagesScroll(chatData);

  // Extracting image messages for lightbox slides
  const slides = chatData
    ?.filter((message) => message.contentType === 'image')
    ?.map((message) => ({ src: message.body }));

  const lightbox = useLightBox(slides);

  const onMessageReceived = (newMessage) => {
    setChatData((prevMessages) => {
      console.log(prevMessages);
      // Check if the new message's conversationId matches the conversationId of the current messages
      if (conversationId !== newMessage.conversationId) {
        console.log('Received message from a different conversation.');
        return prevMessages;
      }

      // Create a set of existing messageIds
      const messageIdSet = new Set(prevMessages.map((message) => message.messageId));

      // Check if the new messageId is already in the set
      if (!messageIdSet.has(newMessage.messageId)) {
        // If not, add the new message to the chatData
        console.log(newMessage);
        return [...prevMessages, newMessage];
      }

      console.log(prevMessages);
      // If the messageId already exists, return the previous messages without changes
      return prevMessages;
    });
  };
  if (!socketRef.current) {
    socketRef.current = io(SOCKET_URL);
  }

  const socket = socketRef.current;
  useEffect(() => {
    if (conversationId) {
      socket.emit('userJoined', userId);
      socket.emit('joinGroup', conversationId);
      socket.emit('getConversation', conversationId);

      socket.on('getConversationSuccess', (data) => {
        console.log('Conversation fetched successfully:', data);
        setChatData(data);
      
        // console.log(chatData[chatData.length-1])
      });

      socket.on('getConversationError', (error) => {
        console.error('Error fetching conversation:', error);
      });
      socket.on('deleteMessageSuccess', (data) => {
        console.log('987654', data);
        setChatData((prevChat) => {
          console.log({ prevChat });
          return prevChat?.filter((chat) => chat.messageId !== data.messageId);
        });
        console.log(data);
      });
      socket.on('connectedUsers', async ({ users }) => {
        if (users) {
          // console.log('Setting connectedUsers state:', users);
          handleSetConnectedUser(users);
          // setConnectedUsers(users);
        }
      });
      socket.on('sendMessageSuccess', (data) => {
        onMessageReceived(data);
        socket.emit('messageReceivedSuccess', data);
        socket.emit('markMessageAsRead', {
          lastReadMessageId: data.messageId,
          conversationId: data.conversationId,
          userId,
        });
        
        if(data.senderId !== userId)
          {
            console.log(data.senderId, userId);
            newMsgSound();
          }
        console.log(data);
      });
      socket.on('markMessageAsReadSuccess', (data) => {
        console.log(data);
        setLastMessageRead(data);
      });
    }
    return () => {
      if (conversationId) {
        socket.emit('leaveConversation', { id: conversationId });
      }
      socket.off('getConversationSuccess');
      socket.off('getConversationError');
      socket.off('sendMessageSuccess');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conversationId, userId, socket]);

  return (
    <>
      <Scrollbar ref={messagesEndRef} sx={{ px: 3, py: 5, height: 1 }}>
        <Box>
          {console.log("he",chatData)}
          {chatData?.map((message, i) => (
            <ChatMessageItem
              key={i}
              message={message}
              participants={participants}
              onOpenLightbox={() => lightbox.onOpen(message.body)}
              userId={userId}
            />
          ))}
        </Box>
      </Scrollbar>

      <Lightbox
        index={lightbox.selected}
        slides={slides}
        open={lightbox.open}
        close={lightbox.onClose}
      />
    </>
  );
}

ChatMessageList.propTypes = {
  userId: PropTypes.number.isRequired,
  messages: PropTypes.array,
  handleSetConnectedUser: PropTypes.func,
};
