// import PropTypes from 'prop-types';
// import { whitespace } from 'stylis';
import generatePDF from 'react-to-pdf';
import { useRef, useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import ReplyIcon from '@mui/icons-material/Reply';
import LoadingButton from '@mui/lab/LoadingButton';
import { Button, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import {useTheme } from '@mui/material/styles';

import { fAge } from 'src/utils/format-time';

import { bgGradient } from 'src/theme/css';
import { useAuthContext } from 'src/auth/hooks';
import { useGetVotersDetails } from 'src/api/voter';
import { UpgradeStorageIllustration } from 'src/assets/illustrations';

import Image from 'src/components/image';

// import { whitespace } from 'stylis';


// import { margin } from '@mui/system';


export default function VoterSlipNewEditForm() {
  const { user } = useAuthContext();
  const theme = useTheme();
  const { voters } = useGetVotersDetails();

  const voterDetails = voters && voters.data ? voters.data : {};

  const targetRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  async function handleDownload() {
    setIsLoading(true);
    await generatePDF(targetRef, { filename: 'voter-slip.pdf' });
    setIsLoading(false);
  }

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Share Example',
          text: 'Check out this link!',
          url: window.location.href,
        });
        console.log('Shared successfully');
      } else {
        throw new Error('Web Share API not supported');
      }
    } catch (error) {
      console.error('Error sharing:', error.message);
      // Fallback for browsers that do not support Web Share API
      alert('Your browser does not support sharing.');
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center"  mt={5}>
      <Grid item xs={12} md={7}>
        <Card sx={{ p: 1.5, boxShadow: '0px 0px 7px 2px rgba(0,0,0,0.15)', marginBottom: { xs: 2, md: 0 } }}>
          <Box sx={{ pl: 3 }} ref={targetRef}>
            <Box>
              <Image sx={{ width: 130, height: 130, borderRadius: 1.5, mb: 5 }} src="/assets/images/voteruser/bjp.jpg" />
            </Box>
            <Box rowGap={6} columnGap={4} display="grid" gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}>
              <Typography sx={{fontWeight:'700'}}>
                Name :<Typography>{user?.UserProfile?.firstName || 'not provided'} {user?.UserProfile?.lastName}</Typography>
              </Typography>
              <Typography sx={{fontWeight:'700'}}>
                Age :<Typography>{fAge(user?.UserProfile?.dateOfBirth)}</Typography>
              </Typography>
              <Typography sx={{fontWeight:'700'}}>
                SO/CO :<Typography>{user?.UserProfile?.fatherName}</Typography>
              </Typography>
              <Typography  sx={{fontWeight:'700'}}>
                Gender :<Typography>{user?.UserProfile?.gender}</Typography>
              </Typography>
              <Typography sx={{fontWeight:'700'}}>
                EPIC no./Voter no. :<Typography>{voterDetails?.epicNo}</Typography>
              </Typography>
              <Typography  sx={{fontWeight:'700'}}>
                Polling Station :<Typography>Sahara</Typography>
              </Typography>
              <Typography  sx={{fontWeight:'700'}}>
                Parliament Constituency no.:<Typography>543</Typography>
              </Typography>
              <Typography sx={{fontWeight:'700'}}>
                AADHAR no. :<Typography>{user?.UserIdentityDetails && user?.UserIdentityDetails[0]?.identityNumber}</Typography>
              </Typography>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={5}>
        <Stack alignItems="center" sx={{
          ...bgGradient({
            direction: '180deg',
            startColor: theme.palette.primary.main,
            endColor: theme.palette.primary.dark,
          }),
          p: 5,
          borderRadius: 2,
          backgroundColor: 'common.white',
          height: { md: '460px' },
        }}>
          <UpgradeStorageIllustration />
          <Stack display="flex" alignItems="center" width="100%">
            <Button sx={{ mt: 5, px: 2, color: 'white', backgroundColor: 'black', '&:hover': { backgroundColor: 'white', color: 'black' } }} onClick={() => handleShare()}>
              <ReplyIcon sx={{ transform: 'rotateY(180deg)', mr: 1 }} /> SHARE
            </Button>
            <LoadingButton
              color="inherit"
              loading={isLoading}
              loadingPosition="start"
              onClick={() => handleDownload()}
              sx={{ mt: 2.2, px: 2, backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: 'white', color: 'black' } }}
            >
              <DownloadIcon /> DOWNLOAD
            </LoadingButton>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}

VoterSlipNewEditForm.propTypes = {};
