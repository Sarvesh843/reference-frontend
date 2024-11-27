import { Box } from '@mui/system';
import Container from '@mui/material/Container';


// import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';

import VoterSlipNewEditForm from '../VoterSlipNewEditFrom';


export default function votingSlip() {
  // const theme = useTheme();
    return (
      <Container >
      <Box
      sx={{
        ...bgGradient({
           color: 'transparent',
          imgUrl: '/assets/images/voterreferral/Voter-slip.png',
        }),
        boxShadow: '0px 0px 7px 2px rgba(0,0,0,0.15)',
        height: { md: 250 },
        py: { xs: 10, md: 0 },
        overflow: 'hidden',
        position: 'relative',
        borderRadius: {xs:0, md:2},
      }}
    />
      <VoterSlipNewEditForm/>
    </Container>
    );
  }
  