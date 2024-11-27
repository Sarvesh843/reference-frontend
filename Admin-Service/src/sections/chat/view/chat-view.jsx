import { useState, useEffect, useCallback } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { useRouter, useSearchParams } from 'src/routes/hooks';
import { useLocation } from 'react-router-dom';
import { UseMockedUser } from 'src/hooks/use-mocked-user';

import { useGetContacts, useGetConversations } from 'src/api/chat';

import { useSettingsContext } from 'src/components/settings';
import { useGetUsers } from 'src/api/user';
import { useAuthContext } from 'src/auth/hooks';
import { useGetParticipants, useGetConversation, useGetChat } from 'src/api/chatt';
import ChatNav from '../chat-nav';
import ChatRoom from '../chat-room';
import ChatMessageList from '../chat-message-list';
import ChatMessageInput from '../chat-message-input';
import ChatHeaderDetail from '../chat-header-detail';
import ChatHeaderCompose from '../chat-header-compose';


// useGetConversation
// ----------------------------------------------------------------------

export default function ChatView() {
  const accessToken = sessionStorage.getItem('accessToken');
  const router = useRouter();

  const { user } = useAuthContext();
  
  const { users: roleList } = useGetUsers(user.accessToken);

  

  const roleListArr = roleList?.data || [];
  const data = roleListArr.filter((role) => role.userId !== user.userId);

  const settings = useSettingsContext();

  const searchParams = useSearchParams();

  const [connectedUsers, setConnectedUsers] = useState([]);

  const selectedConversationId = searchParams.get('id') || '';

  const [recipients, setRecipients] = useState([]);

  const { participants: participantList } = useGetParticipants(selectedConversationId);

  const { schat: currentChat } = useGetChat(selectedConversationId);
  // console.log(currentChat)
  // console.log(currentChat && currentChat?.data && currentChat?.data[0]?.conversationDetail?.type)
  // const currChatType=currentChat && currentChat?.data && currentChat?.data[0] && currentChat?.data[0]?.conversationDetail?.type

  const conversationCreatedBy = participantList && participantList.data && participantList.data.createdBy ? participantList.data.createdBy : null;
  
  const participantListArr =  participantList && participantList.data && participantList.data.ConversationUserConversations
      ? participantList.data.ConversationUserConversations
      : [];
  const currChatType =
    participantList && participantList.data && participantList.data.type
      ? participantList.data.type
      : '';
  console.log(currChatType);
  console.log(participantListArr.length);
  const { conversation, conversationError, conversationLoading } = useGetConversation(user.userId);

  const conversationData = conversation && conversation.data ? conversation.data : [];
  // console.log(conversationData)

  // const senderIds = conversationData?.map(i =>
  //   i.conversationDetail.messageDetails.map(message => message.senderId)
  // );

  // const uniqueSenderIds = [...new Set(senderIds)];//uniqueSenderIds.filter(senderId => senderId !== user.id);
  //  console.log(user.userId)

  const participants = participantListArr
    ? participantListArr.filter((participant) => participant.userId !== user.userId)
    : [];

  const handleSetConnectedUser = (connUsers) => {
    setConnectedUsers((prevUser) => [...prevUser, ...connUsers]);
  };
  useEffect(() => {
    if (conversationError || !selectedConversationId) {
      router.push(paths.dashboard.chat);
    }
  }, [conversationError, router, selectedConversationId]);

  const handleAddRecipients = useCallback((selected) => {
    setRecipients(selected);
  }, []);

  const details = !!selectedConversationId;

  const renderHead = (
    <Stack
      direction="row"
      alignItems="center"
      flexShrink={0}
      sx={{ pr: 1, pl: 2.5, py: 1, minHeight: 72 }}
    >
      {selectedConversationId ? (
        <>
          {details && (
            <ChatHeaderDetail
              participants={participants}
              userId={user.userId}
              conversation={conversationData}
            />
          )}
        </>
      ) : (
        <ChatHeaderCompose contacts={data} onAddRecipients={handleAddRecipients} user={user} />
      )}
    </Stack>
  );

  const renderNav = (
    <ChatNav
      contacts={conversationData}
      data={data}
      connectedUsers={connectedUsers}
      // conversations={conversationData}
      loading={conversationLoading}
      selectedConversationId={selectedConversationId}
      userId={user.userId}
    />
  );

  const renderMessages = (
    <Stack
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    >
      {selectedConversationId && <ChatMessageList
        handleSetConnectedUser={handleSetConnectedUser}
        messages={conversationData?.messages}
        // participants={participants}
        userId={user.userId}
      />
      || 
      <div style={{ height: '100%' }} />
      }

      <ChatMessageInput
        recipients={recipients}
        onAddRecipients={handleAddRecipients}
        userId={user.userId}
        currChatType={currChatType}
        //
        selectedConversationId={selectedConversationId}
        disabled={!recipients?.length && !selectedConversationId}
      />
    </Stack>
  );

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography
        variant="h4"
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        Chat
      </Typography>

      <Stack component={Card} direction="row" sx={{ height: '72vh' }}>
        {renderNav}

        <Stack
          sx={{
            width: 1,
            height: 1,
            overflow: 'hidden',
          }}
        >
          {renderHead}

          <Stack
            direction="row"
            sx={{
              width: 1,
              height: 1,
              overflow: 'hidden',
              borderTop: (theme) => `solid 1px ${theme.palette.divider}`,
            }}
          >
            {renderMessages}

            {details && (
              <ChatRoom
                conversation={conversationData}
                conversationCreatedBy={conversationCreatedBy}
                participants={participantListArr}
                userId={user.userId}
              />
            )}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

// Fonsole.log(participants);
// conversationData.map((e)=>e.conversationDetail.messageDetails.filter(message => message.senderId !== user.id))
// console.log(conversation.conversationDetail)

// const participants = conversation
// ? conversation.participants.filter((participant) => participant.id !== `${user.id}`)
// : [];
//  console.log(participants)
// console.log(conversation[0].conversationDetail)

// const participants = conversation && conversation.conversationDetail
// ? conversation.conversationDetail.messageDetails
//     .filter((message) => message.senderId !== user.userId)
//     // .map((message) => message.senderId)
// : [];
// const participants = conversation && conversation.conversationDetail
// ? conversation.conversationDetail.messageDetails
//     .filter(message => message.senderId !== user.id)
//     // .map(message => message.senderId)
//     // .filter(senderId => senderId !== user.id)
// : [];
//   const participants = conversation.map(e =>
//     e.conversationDetail.messageDetails
//     .filter(message => message.senderId !== user.id)
//     // .map(message => message.senderId)
// );
