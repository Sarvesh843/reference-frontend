import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import ListItemText from '@mui/material/ListItemText';
import DialogContent from '@mui/material/DialogContent';
import InputAdornment from '@mui/material/InputAdornment';
import ListItemAvatar from '@mui/material/ListItemAvatar';

// import { _contacts } from 'src/_mock';

import { useGetUsers } from 'src/api/user';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import SearchNotFound from 'src/components/search-not-found';
// ----------------------------------------------------------------------

const ITEM_HEIGHT = 64;

export default function KanbanContactsDialog({ assignee = [], open, onClose,onAddAssignees }) {
  const [searchContact, setSearchContact] = useState('');
  const {
    users: { data: _contacts },
  } = useGetUsers();
  console.log(_contacts);
  const handleSearchContacts = useCallback((event) => {
    setSearchContact(event.target.value);
  }, []);

  const dataFiltered = applyFilter({
    inputData: _contacts,
    query: searchContact,
  });

  const notFound = !dataFiltered?.length && !!searchContact;

  const handleAddAssignee = (contact) => {
    console.log('userId==>', contact);
    onAddAssignees(contact);
    // onClose();
  };

  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose}>
      <DialogTitle sx={{ pb: 0 }}>
        Contacts <Typography component="span">({_contacts?.length})</Typography>
      </DialogTitle>

      <Box sx={{ px: 3, py: 2.5 }}>
        <TextField
          fullWidth
          value={searchContact}
          onChange={handleSearchContacts}
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <DialogContent sx={{ p: 0 }}>
        {notFound ? (
          <SearchNotFound query={searchContact} sx={{ mt: 3, mb: 10 }} />
        ) : (
          <Scrollbar
            sx={{
              px: 2.5,
              height: ITEM_HEIGHT * 6,
            }}
          >
            {dataFiltered?.map((contact) => {
              const checked = assignee.map((person) => person.userName).includes(contact.userName);

              return (
                <ListItem
                  key={contact.userId}
                  disableGutters
                  secondaryAction={
                    <Button
                      size="small"
                      color={checked ? 'primary' : 'inherit'}
                      startIcon={
                        <Iconify
                          width={16}
                          icon={checked ? 'eva:checkmark-fill' : 'mingcute:add-line'}
                          sx={{ mr: -0.5 }}
                        />
                      }
                      onClick={() => handleAddAssignee(contact)}
                    >
                      {checked ? 'Assigned' : 'Assign'}
                    </Button>
                  }
                  sx={{ height: ITEM_HEIGHT }}
                >
                  <ListItemAvatar>
                    <Avatar src={contact?.UserProfile?.userProfileImageUrl} />
                  </ListItemAvatar>

                  <ListItemText
                    primaryTypographyProps={{
                      typography: 'subtitle2',
                      sx: { mb: 0.25 },
                    }}
                    secondaryTypographyProps={{ typography: 'caption' }}
                    primary={contact.userName}
                    secondary={contact.email}
                  />
                </ListItem>
              );
            })}
          </Scrollbar>
        )}
      </DialogContent>
    </Dialog>
  );
}

KanbanContactsDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  assignee: PropTypes.array,
  onAddAssignees: PropTypes.func,
};

// ----------------------------------------------------------------------

function applyFilter({ inputData, query }) {
  if (query) {
    inputData = inputData.filter(
      (contact) =>
        contact.userName.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        contact.email.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }

  return inputData;
}
