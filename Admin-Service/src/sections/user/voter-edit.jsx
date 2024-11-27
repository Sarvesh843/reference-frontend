import { Box } from '@mui/material';

import { useGetVotersDetails } from 'src/api/voter';

import VoterNewEditForm from './voter-new-edit-form';

export default function VoterEdit() {
  const { voters } = useGetVotersDetails();
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
      <VoterNewEditForm voterEdit={voters} />
    </Box>
  );
}
