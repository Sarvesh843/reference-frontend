import io from 'socket.io-client';
import { sub } from 'date-fns';
import PropTypes from 'prop-types';
import imageCompression from 'browser-image-compression';

import { useRef, useMemo, useState, useEffect, useCallback } from 'react';
import { Stack, Box, CardActionArea } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { useLocation } from 'react-router-dom';
import { UseMockedUser } from 'src/hooks/use-mocked-user';
import EmojiPicker from 'emoji-picker-react';
import uuidv4 from 'src/utils/uuidv4';

import { deleteFileFromAWSS3, uploadclaimFileInAWSS3 } from 'src/utils/aws-s3-file-handler';

// import { sendMessage, createConversation } from 'src/api/chat';

import { getConversationMember, createConversation } from 'src/api/chatt';

import Iconify from 'src/components/iconify';

import Recorder from 'src/sections/chat/chat-voice-recorder';
import Send from './view/assets/Send.svg';
// import Send from "./view/assets/Send.svg";

// Create a new Socket.IO instance
const socket = io('http://43.204.2.152');

//  ----------------------------------------------------------------------

export default function ChatMessageInput({
  onAddRecipients,
  userId,
  recipients,
  disabled,
  currChatType,
  selectedConversationId,
}) {
  const router = useRouter();
  const [activerecord, setactioverecord] = useState(false);
  const [settings, setSettings] = useState(null);
  const { user } = UseMockedUser();
  const [image, setImage] = useState(null);
  const [dock, setDock] = useState(null);
  const fileRef = useRef(null);
  const sfileRef = useRef(null);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');
  const [groupMembers, setGroupMembers] = useState([]);

  const [audio, setAudio] = useState(null);
  const [conversationId, setConversationId] = useState(selectedConversationId);


  useEffect(() => {
    // setImage(null)
    // Update conversationId whenever selectedConversationId changes
    setConversationId(selectedConversationId);
    setImage(null);
    setDock(null);
    setShow(false);
    setactioverecord(false);
    getGroupMembers(selectedConversationId);
  }, [selectedConversationId]);
  const updateData = (newData) => {
    setAudio(newData);
    setactioverecord(false);
    console.log(audio);
  };

  const getGroupMembers = async (conversationIdForGetGroupMembers) => {
    try {
      const response = await getConversationMember(conversationIdForGetGroupMembers);

      setGroupMembers(response);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadFile = useMemo(
    () => async (file) => {
      try {
        const formData = new FormData();
        formData.append('image', file);

        const response = await uploadclaimFileInAWSS3(formData);
        const fileUrl = response?.data?.data || {};

        if (fileUrl) {
          setDock(fileUrl.preview);
        } else {
          console.error('Error in uploading file:', response);
        }
      } catch (error) {
        console.error('Error in uploading file:', error);
      }
    },
    [setDock]
  );

  const uploadImage = useMemo(
    () => async (file) => {
      try {
        const compressedFile = await imageCompression(file, {
          maxSizeMB: 0.5, // Adjust maximum size as needed
          maxWidthOrHeight: 800, // Adjust maximum width or height as needed
        });

        const formData = new FormData();
        formData.append('image', compressedFile);

        const response = await uploadclaimFileInAWSS3(formData);
        const imageUrl = response.data && response.data.data ? response.data.data : {};

        if (imageUrl) {
          setImage(imageUrl.preview);
        } else {
          console.error('Error in uploading file:', response);
        }
      } catch (error) {
        console.error('Error compressing image:', error);
      }
    },
    [setImage]
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadImage(file);
      e.target.value = '';
    }
  };

  // Delete image from AWS S3
  const handleCancleImage = useCallback(async () => {
    const dataToSend = { url: image };
    await deleteFileFromAWSS3(dataToSend)
      .then((data) => {
        setImage(null);
      })
      .catch((err) => {
        console.error('Error in deleting files:', err);
      });
  }, [setImage, image]);

  const handleDockChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadFile(file);
      e.target.value = '';
    }
  };

  // Delete file from AWS S3
  const handleCancleDoc = useCallback(async () => {
    const dataToSend = { url: image };
    await deleteFileFromAWSS3(dataToSend)
      .then((data) => {
        setDock(null);
      })
      .catch((err) => {
        console.error('Error in deleting files:', err);
      });
  }, [setDock, image]);


  // const conversationData = useMemo(() => {
  //   // Create a set to avoid duplicate userIds
  //   const uniqueUserIds = new Set([...groupMembers, userId]);

  //   return {
  //     userIds: Array.from(uniqueUserIds),
  //     type: groupMembers.length > 1 ? 'group' : 'private',
  //   };
  // }, [groupMembers, userId]);

  const conversationData = useMemo(
    () => ({
      userIds: [...recipients.map(recipient => recipient.userId), userId],
      type: recipients.length > 1 ? 'group' : 'private',
    }),
    [recipients, userId]
  );

  console.log(groupMembers);
  console.log(conversationData.userIds);

  const handelemoji = () => {
    setShow(!show);
  };
  const handleAttachh = useCallback(() => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  }, []);
  const handleAttach = useCallback(() => {
    if (sfileRef.current) {
      sfileRef.current.click();
    }
  }, []);
  const handelmicrophone = () => {
    setactioverecord(!activerecord);
  };
  const handleChangeMessage = useCallback((event) => {
    setMessage(event.target.value);

    // setData((prevData) => ({
    //   ...prevData,
    //   content: (event.target.value),
    //   conversationId: conversationid
    // }));
  }, []);

  const handleEmojiSelect = (emojiObject) => {
    setMessage((prevMessage) => prevMessage + emojiObject.emoji);
    setShow(false);
  };

  const emojiPickerStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    color: '#212b36',
    backgroundColor: '#212b36',
  };

  const handleSendMessage = async (event) => {
    let contentType;
    if (message) {
      contentType = 'text';
    } else if (image) {
      contentType = 'image';
    } else if (dock) {
      contentType = 'dock';
    } else {
      contentType = 'audio';
    }
    try {
      if (message || image || audio || dock) {

        if (selectedConversationId) {
          if (groupMembers.length > 2) {
            const messageData = {
              content: message || image || audio || dock,
              type: contentType,
              groupMembers,
              senderId: userId,
              conversationId: selectedConversationId,
            };

            if (messageData.content) {
              console.log('Sending message:', messageData);
              socket.emit('sendMessageToGroup', messageData);
              setMessage('');
            }
          } else {
            const messageData = {
              content: message || image || audio || dock,
              type: contentType,
              senderId: userId,
              conversationId,
            };

            if (messageData.content) {
              console.log('Sending message:', messageData);
              socket.emit('sendMessage', messageData);
              setMessage('');
            }
          }
        } else {
          conversationData.groupName = 'Test Group';
          conversationData.createdBy = userId;
          console.log(conversationData);

          const res = await createConversation(conversationData);
          console.log(res);

          if (res) {
            console.log(res?.data?.data?.conversationId);
            console.log(groupMembers)

            if (groupMembers.length > 2) {
              const messageData = {
                content: message || image || audio || dock,
                type: contentType,
                groupMembers,
                senderId: userId,
                conversationId: res?.data?.data?.conversationId,
              };

              if (messageData.content) {
                console.log('Sending message:', messageData);
                socket.emit('sendMessageToGroup', messageData);
                setMessage('');
              }
            } else {
              const messageData = {
                content: message || image || audio || dock,
                type: contentType,
                senderId: userId,
                conversationId: res?.data?.data?.conversationId,
              };

              if (messageData.content) {
                console.log('Sending message:', messageData);
                socket.emit('sendMessage', messageData);
                setMessage('');
              }
            }
            router.push(`${paths.dashboard.chat}?id=${res?.data?.data?.conversationId}`);
            onAddRecipients([]);
          }
        }
      }

      setMessage('');
      setImage(null);
      setAudio(null);
      setDock(null);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  let placeholder;

  if (disabled && !selectedConversationId) {
    placeholder = "First Select Recipients";
  } else if (selectedConversationId) {
    placeholder = "Type a message";
  } else {
    placeholder = "Send a message to start conversation";
  }

  return (
    <>
      {show ? (
        <Stack sx={{ width: '63%', height: '80%' }}>
          <EmojiPicker style={emojiPickerStyle} onEmojiClick={handleEmojiSelect} />
        </Stack>
      ) : (
        <></>
      )}
      {image && (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',

            '& > :not(style)': {
              m: 1,
              width: 128,
              height: 128,
            },
          }}
        >
          <Paper elevation={3}>
            <img
              src={image}
              alt="loading"
              style={{ width: '98%', height: '83px', borderRadius: '10px' }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box onClick={handleCancleImage}>
                <IconButton>
                  <Iconify icon="material-symbols:close" />
                </IconButton>
              </Box>

              <Box onClick={handleSendMessage}>
                <IconButton>
                  <Iconify icon="eva:paper-plane-fill" />
                </IconButton>
              </Box>
            </Box>
          </Paper>
        </Box>
      )}
      {dock && (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',

            '& > :not(style)': {
              m: 1,
              width: 128,
              height: 128,
            },
          }}
        >
          <Paper elevation={3}>

            <img
              src="https://collections.durham.ac.uk/assets/default-c6018ff301250c55bcc663293e1816c7daece4159cbc93fc03d9b35dbc3db30d.png"
              alt="file"
              style={{ width: '100%', height: '83px', borderRadius: '10px', objectFit: 'contain' }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box onClick={handleCancleDoc}>
                <IconButton>
                  <Iconify icon="material-symbols:close" />
                </IconButton>
              </Box>

              <Box onClick={handleSendMessage}>
                <IconButton>
                  <Iconify icon="eva:paper-plane-fill" />
                </IconButton>
              </Box>

            </Box>
          </Paper>
        </Box>
      )}

      <InputBase
        value={message}
        onKeyUp={(event) => {
          if (event.key === 'Enter') {
            handleSendMessage();
          }
        }}
        onChange={handleChangeMessage}
        placeholder={placeholder}
        disabled={disabled}
        startAdornment={
          <>
            {!disabled && <IconButton onClick={handelemoji}>
              <Iconify icon="eva:smiling-face-fill" />
            </IconButton>}
          </>
        }
        endAdornment={ !disabled && 
          activerecord ? (
            <>
              <Recorder data={audio} updateData={updateData} />
              <IconButton onClick={handelmicrophone}>
                <Iconify icon="solar:microphone-bold" />
              </IconButton>
            </>
          ) : (
            <Stack direction="row" sx={{ flexShrink: 0, display: disabled ? "none" : "flex" }}>
              <IconButton onClick={handleAttachh}>
                <Iconify icon="solar:gallery-add-bold" />
              </IconButton>
              <IconButton onClick={handleAttach}>
                <Iconify icon="eva:attach-2-fill" />
              </IconButton>
              {/* <IconButton onClick={handelmicrophone}>
                <Iconify icon="solar:microphone-bold" />
              </IconButton> */}
              {audio && (
                <IconButton onClick={handleSendMessage}>
                  <Iconify icon="eva:paper-plane-fill" />
                </IconButton>
              )}

              <IconButton onClick={handelmicrophone}>
                <Iconify icon="solar:microphone-bold" />
              </IconButton>
            </Stack>
          )
        }
        sx={{
          px: 1,
          height: 56,
          flexShrink: 0,
          borderTop: (theme) => `solid 1px ${theme.palette.divider}`,
        }}
      />
      <input
        type="file"
        ref={fileRef}
        style={{ display: 'none' }}
        onChange={handleImageChange}
        accept="image/*"
      />
      <input type="file" ref={sfileRef} style={{ display: 'none' }} onChange={handleDockChange} />
    </>
  );
}

ChatMessageInput.propTypes = {
  userId: PropTypes.number,
  disabled: PropTypes.bool,
  onAddRecipients: PropTypes.func,
  recipients: PropTypes.array,
  selectedConversationId: PropTypes.string,
  currChatType: PropTypes.string,
};
