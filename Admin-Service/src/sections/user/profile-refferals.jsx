import * as React from 'react';
import { useState } from 'react';
// import PropTypes from 'prop-types';
import { enqueueSnackbar } from 'notistack';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { LoadingButton } from '@mui/lab';
// import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import CardHeader from '@mui/material/CardHeader';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
import { Box, Button, Typography } from '@mui/material';
// import DialogContentText from '@mui/material/DialogContentText';

// import { setLocalStorage } from 'src/hooks/utils';

import { fShortenNumber } from 'src/utils/format-number';

import { bgGradient } from 'src/theme/css';
// import { useGetParties } from 'src/api/party';
import { useAuthContext } from 'src/auth/hooks';
import { GetVoterReferral } from 'src/api/user';
import { BookingIllustration } from 'src/assets/illustrations';
// ----------------------------------------------------------------------

export default function ProfileRefferals() {
    const theme = useTheme();
    // const [url, setUrl] = useState('')

    const { 
        user,
        //  deleteAccount,
        //   dispatch
         } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);




    const handleShare = async () => {
        try {
            const response = await GetVoterReferral(user?.accessToken)
            const token = response?.data?.data?.referralToken
            sessionStorage.setItem('referralURL', `https://app.attplems.com/auth/jwt/register?referralToken=${token}`)
            // setUrl(`https://app.attplems.com/auth/jwt/register?referralToken=${token}`)
            // console.log("voterReferral----->", response)
            if (navigator.share) {
                await navigator.share({
                    title: 'Share Example',
                    text: 'Check out this link!',
                    url: `https://app.attplems.com/auth/jwt/register?referralToken=${token}`,
                });
                console.log('------------->', navigator.share)
            } else {
                throw new Error('Web Share API not supported');
            }
        } catch (error) {
            console.error('Error sharing:', error.message);
            // Fallback for browsers that do not support Web Share API
            alert('Your browser does not support sharing.');
        }
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(sessionStorage.getItem("referralURL"));
        enqueueSnackbar('Invite link copied')
    };


    const totalRefferalPoints = (
        <Card
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 2,
                pl: 3,
                maxWidth: 350
            }}
        >
            <Box>
                <Box sx={{ mb: 1, typography: 'h3' }}>{user?.refferaldata?.tokenCredits!==0?fShortenNumber(user?.refferaldata?.tokenCredits):"0"}</Box>
                <Box sx={{ color: 'text.secondary', typography: 'subtitle2' }}>Total Refferal Points</Box>
                <LoadingButton
                    color="inherit"
                    loading={isLoading}
                    loadingPosition="start"
                    //   onClick={() => handleDownload()}
                    sx={{ mt: 2.2, px: 2, backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: 'rgba(0,0,0,0.1)', color: 'black' } }}
                >
                    Redeem Points
                </LoadingButton>
            </Box>

            <Box
                sx={{
                    width: 120,
                    height: 120,
                    lineHeight: 0,
                    borderRadius: '50%',
                    bgcolor: 'background.neutral',
                }}
            >
                <BookingIllustration />
            </Box>
        </Card>
    );

    const createRefferalLink = (
        <Box sx={{ maxWidth: 350 }}>
            <Box
                component="img"
                alt="invite"
                src='/assets/illustrations/characters/character_11.png'
                sx={{
                    left: 40,
                    zIndex: 9,
                    width: 130,
                    position: 'relative',
                    filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.24))',
                    mt: 1,
                    // p:2
                }}
            />

            <Box
                sx={{
                    mt: -15,
                    color: 'common.white',
                    borderRadius: 2,
                    p: theme.spacing(16, 7, 6, 6),
                    ...bgGradient({
                        direction: '135deg',
                        startColor: theme.palette.primary.main,
                        endColor: theme.palette.primary.dark,
                    }),
                    boxShadow: '0px 0px 7px 2px rgba(0,0,0,0.15)',
                }}
            >
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Box sx={{ whiteSpace: 'pre-line', typography: 'h4', width: '120px' }}>Invite friends
                        and earn</Box>
                    <Box sx={{ typography: 'h2', color: '#ffab00' }}>₹21.</Box>
                </Stack>

                {/* <Box sx={{ mt: 2, mb: 3, typography: 'body2' }}>{description}</Box> */}

                <InputBase
                    fullWidth
                    placeholder="Invite Link"
                    value={sessionStorage.getItem('referralURL')}
                    endAdornment={
                        <Button color="warning" variant="contained" size="small" sx={{ mr: 0.5, ml: 2 }} onClick={sessionStorage.getItem('referralURL') ? handleCopy : handleShare} >
                            {sessionStorage.getItem('referralURL') ? 'Copy' : 'Invite'}
                        </Button>
                    }
                    sx={{
                        pl: 1.5,
                        mt: 3,
                        height: 40,
                        borderRadius: 1,
                        bgcolor: 'common.white',
                        textOverflow: 'ellipsis',
                        // flex: 1, 
                        // minWidth: 0,
                    }}
                />
            </Box>
        </Box>
    );

    const renderProfile = (
        <Card sx={{ width: '100%', gridColumn: "span 2", boxShadow: "0px 0px 7px 2px rgba(0,0,0,0.08)", p: 2, pb: 5, height: { xs: 600, sm: 600, md: 630 } }}>
            <CardHeader variant="h1" title={<Typography variant="h3">History</Typography>} />
            <Box sx={{
                border: "1px solid rgba(0,0,0,0.08)",
                height: "90%",
                borderRadius: "5px",
                boxSizing: "border-box",
                overflowY: "scroll",
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
                msOverflowStyle: 'none',
                scrollbarWidth: 'none'
            }}>
               {}


            </Box>
        </Card>
    );

    return (
        <Grid
            container
            spacing={3}
            p={2}
            gap={6}
            sx={{
                display: "grid",
                gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(1, 1fr)',
                    md: 'repeat(3, 1fr)',
                },
                '@media (max-width: 499px)': {
                    display: 'block',
                },
            }}

        >

            <Stack spacing={3} gridColumn="span 1" sx={{ gap: '50px' }}>
                {totalRefferalPoints}
                {createRefferalLink}
            </Stack>
            {renderProfile}

        </Grid>
    );
}
ProfileRefferals.propTypes = {

};