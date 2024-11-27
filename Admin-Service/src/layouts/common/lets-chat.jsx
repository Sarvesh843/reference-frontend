import { useNavigate } from 'react-router';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export default function LetsChat() {

  const navigate = useNavigate();

  return (
    // Chat button

    <Stack
      sx={{
        px: 2,
        py: 5,
        textAlign: 'center',
      }}
    >
      <Stack alignItems="center">

        <Button variant="contained" onClick={(e) => {
          e.preventDefault();
          navigate(paths.dashboard.chat);
        }}>
          Let&apos;s Chat
        </Button>
      </Stack>
    </Stack>

  );
}
