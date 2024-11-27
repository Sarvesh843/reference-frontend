import Box from '@mui/material/Box';

import UserProfileUpdateForm from './user-profile-update-form';
// ----------------------------------------------------------------------

export default function ProfileEdit() {

  return (
      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(1, 1fr)',
          md: 'repeat(1, 1fr)',
        }}
      >
        <UserProfileUpdateForm  />
      </Box>
  );
}