import { useRef, useEffect } from 'react';
import io from 'socket.io-client';

const SOCKET_URL = 'http://43.204.2.152';

const useSocket = (userId,conversationId) => {
  const socketRef = useRef(null);

  useEffect(() => {
    const socket = io(SOCKET_URL);
    // Join the room for the current conversation
    socket.emit('joinConversation', conversationId, userId);

    socket.on('connect', () => {
      console.log('Connected to Socket.IO server');
    });

    socket.on('newMessage', (messageData) => {
      console.log('Received new message:', messageData);
      // Update the UI with the new message
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from Socket.IO server');
    });

    socketRef.current = socket;

    return () => {
      socket.disconnect();
    };
  }, [userId,conversationId]);

  const sendMessage = (messageData) => {
    const socket = io(SOCKET_URL);
    socket.emit('newMessage', { ...messageData, conversationId });
  };

  return { sendMessage };
};

export default useSocket;
