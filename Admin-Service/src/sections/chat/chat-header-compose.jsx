import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
import { useForm  } from 'react-hook-form';
import Box from '@mui/material/Box';
import { yupResolver } from '@hookform/resolvers/yup';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';

import Iconify from 'src/components/iconify';
import { createConversation } from 'src/api/chatt';
import SearchNotFound from 'src/components/search-not-found';
import { useAuthContext } from 'src/auth/hooks';
import { enqueueSnackbar } from 'notistack';

// ----------------------------------------------------------------------

export default function ChatHeaderCompose({ contacts, onAddRecipients }) {

  
  // const ConversationSchema = Yup.object().shape({
  //   type: Yup.string().required('Election is required'),
  //   userIds: Yup.array().required('User Id is required'),
  // });
  // const defaultValues = {
  //   type: 'private',
  //   userIds: []
  // };
  // const methods = useForm({
  //   resolver: yupResolver(ConversationSchema),
  //   defaultValues,
  // });
   
  // const { handleSubmit, watch ,setValue} = methods;

  
  // const onHandleClick=handleSubmit(async (data) => {
  //   console.log('conversationData',data)
  //   console.log('conversationData1',contacts)
  //   try {
  //     const response = await createConversation(data);
  //     console.log(response)

  //     if (data) {
  //       enqueueSnackbar('You can start a conversation', { variant: 'success' });
  //     }
  //   } catch (error) {
  //     // Handle errors here if necessary
  //     console.error('Error submitting profile Signature:', error);
  //     enqueueSnackbar('An error occurred while creating Conversation', { variant: 'error' });
  //   }
  // })
  // const values = watch();
  // console.log('values',values);
  const [searchRecipients, setSearchRecipients] = useState('');

  const handleAddRecipients = useCallback(
    (selected) => {

      setSearchRecipients('');
      onAddRecipients(selected);
    },
    [onAddRecipients]
  );


  // const handelcreat=async()=>{
  //   if(data.userIds.length>=2){
      
  //   }

  // }
  
  return (
    <>
      <Typography variant="subtitle2" sx={{ color: 'text.primary', mr: 2 }}>
        To:
      </Typography>
  
      <Autocomplete
        sx={{ minWidth: 320 }}
        multiple
        limitTags={3}
        popupIcon={null}
        defaultValue={[]} // Change to null for single selection
        disableCloseOnSelect
        noOptionsText={<SearchNotFound query={searchRecipients} />}
        onChange={(event, newValue) => handleAddRecipients(newValue)}
        onInputChange={(event, newValue) => setSearchRecipients(newValue)}
        options={contacts}
        getOptionLabel={(recipient) => recipient?.UserProfile?.firstName || recipient?.phone}
        isOptionEqualToValue={(option, value) => option.userId === value.userId}
        renderInput={(params) => <TextField {...params} placeholder="+ Recipients" />}
        renderOption={(props, recipient, { selected }) => (
          <li {...props} key={recipient.userId}>
            <Box
              key={recipient.userId}
              sx={{
                mr: 1,
                width: 32,
                height: 32,
                overflow: 'hidden',
                borderRadius: '50%',
                position: 'relative',
              }}
            >
              {/* {recipient?.userId}
              {selected?.length} */}
              <Avatar alt={recipient?.UserProfile?.firstName} src={recipient?.UserProfile?.userProfileImageDetails?.preview} sx={{ width: 1, height: 1 }} />
              <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                  top: 0,
                  left: 0,
                  width: 1,
                  height: 1,
                  opacity: 0,
                  position: 'absolute',
                  bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
                  transition: (theme) =>
                    theme.transitions.create(['opacity'], {
                      easing: theme.transitions.easing.easeInOut,
                      duration: theme.transitions.duration.shorter,
                    }),
                  ...(selected && {
                    opacity: 1,
                    color: 'primary.main',
                  }),
                }}
              >
                <Iconify icon="eva:checkmark-fill" />
              </Stack>
            </Box>
            
            {recipient?.UserProfile?.firstName || recipient?.phone}
          </li>
        )}
        renderTags={(selected, getTagProps) =>
         
          selected.map((recipient, index) => (
            <Chip
              {...getTagProps({ index })}
              key={recipient.userId}
              label={recipient?.UserProfile?.firstName || recipient?.phone}
              avatar={<Avatar alt={recipient?.userName} src={recipient?.UserProfile?.userProfileImageDetails?.preview}/>}
              
              size="small"
              variant="soft"
            />
          ))
        }
      />
      
    </>
  );
  
}

ChatHeaderCompose.propTypes = {
  contacts: PropTypes.array,
  onAddRecipients: PropTypes.func,
};

// console.log(onAddRecipients)
  // const imageDetails = contacts[0]?.UserProfile?.   userProfileImageDetails?.preview
  
 
  // return (
  //   <>
  //     <Typography variant="subtitle2" sx={{ color: 'text.primary', mr: 2 }}>
  //       To:
  //     </Typography>

  //     <Autocomplete
  //       sx={{ minWidth: 320 }}
  //       multiple
  //       limitTags={3}
  //       popupIcon={null}
  //       defaultValue={[]}
  //       disableCloseOnSelect
  //       noOptionsText={<SearchNotFound query={searchRecipients} />}
  //       onChange={(event, newValue) => handleAddRecipients(newValue)}
  //       onInputChange={(event, newValue) => setSearchRecipients(newValue)}
  //       options={contacts}
  //       getOptionLabel={(recipient) => recipient?.UserProfile?.firstName}
        
  //       isOptionEqualToValue={(option, value) => option.id === value.userId}
  //       renderInput={(params) => <TextField {...params} placeholder="+ Recipients" />}
  //       renderOption={(props, recipient, { selected }) => (
  //         <li {...props} key={recipient.id}>
  //           <Box
  //             key={recipient.userId}
  //             sx={{
  //               mr: 1,
  //               width: 32,
  //               height: 32,
  //               overflow: 'hidden',
  //               borderRadius: '50%',
  //               position: 'relative',
  //             }}
  //           >
  //             {recipient.userId}
  //             {selected.length}
  //             <Avatar alt={recipient.userName} src={recipient?.UserProfile?.userProfileImageDetails?.preview} sx={{ width: 1, height: 1 }} />
  //             <Stack
  //               alignItems="center"
  //               justifyContent="center"
  //               sx={{
  //                 top: 0,
  //                 left: 0,
  //                 width: 1,
  //                 height: 1,
  //                 opacity: 0,
  //                 position: 'absolute',
  //                 bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
  //                 transition: (theme) =>
  //                   theme.transitions.create(['opacity'], {
  //                     easing: theme.transitions.easing.easeInOut,
  //                     duration: theme.transitions.duration.shorter,
  //                   }),
  //                 ...(selected && {
  //                   opacity: 1,
  //                   color: 'primary.main',
  //                 }),
  //               }}
  //             >
  //               <Iconify icon="eva:checkmark-fill" />
  //             </Stack>
  //           </Box>
            
  //           {recipient?.UserProfile?.firstName}
  //         </li>
  //       )}
  //       renderTags={(selected, getTagProps) =>
         
  //         selected.map((recipient, index) => (
  //           <Chip
  //             {...getTagProps({ index })}
  //             key={recipient.id}
  //             // label={recipient?.UserProfile?.firstName}
  //             label={recipient.userId}
  //             avatar={<Avatar alt={recipient.userName} src={recipient?.UserProfile?.userProfileImageDetails?.preview}/>}
              
  //             size="small"
  //             variant="soft"
  //           />
  //         ))
  //       }
  //     />
  //   </>
  // );