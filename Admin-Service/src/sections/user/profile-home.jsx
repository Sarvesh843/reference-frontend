import * as React from 'react';
import {  useState } from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Box, Modal, Button, Typography } from '@mui/material';
import DialogContentText from '@mui/material/DialogContentText';

import { setLocalStorage } from 'src/hooks/utils';

import { useGetParties } from 'src/api/party';
import { useAuthContext } from 'src/auth/hooks';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

import JwtRegisterView from './jwt-register-view';
// ----------------------------------------------------------------------

export default function ProfileHome({ voter, candidates }) {
  
  const { user,deleteAccount,dispatch } = useAuthContext();
  const { parties: partyList } = useGetParties();

  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const PartyListArr = partyList?.data || [];

  const PartyData = PartyListArr.map((list) => ({
    value: list.partyId,
    label: list.partyName,
  }));

  const handleDeleteOpen = () => {
    setOpenDelete(true);
  };

  const handleDeleteClose = () => {
    setOpenDelete(false);
  };
  
  const handleDeleteuser = async() => {
    console.log("helo1")
    const response=await deleteAccount(user.userId)
    console.log("helo-1")
    if(response){
      setLocalStorage(null);
    dispatch({
      type: 'LOGOUT',
    });
    localStorage.setItem('upiId', '');
    localStorage.setItem('votePredictWardId', 0);
    localStorage.setItem('votePredictBoothId', 0);
    localStorage.setItem('votePredictPollId', 0);
    localStorage.setItem('votePredictList', JSON.stringify([]));

    localStorage.removeItem('accessToken');
    window.location.reload();
    }
  };
  

  const renderAbout = (
      <Card sx={{ width: '100%'}}>
        <CardHeader title="About" />
        <Stack spacing={2} sx={{ p: 3 }}>
          {/* <Stack direction="row" alignItems="start">
            <Typography >{candidates?.candidates?.data?.ElectionDetail?.electionType}</Typography>
          </Stack> */}

          {/* <Stack direction="row" alignItems="start">
            <Typography >{candidates?.candidates?.data?.PartyDetail?.partyName}</Typography>
          </Stack> */}

          {/* <Stack direction="column" alignItems="start"> */}
            {/* <Typography >{candidates?.candidates?.data?.legalCase}</Typography> */}
            <Stack direction="row" sx={{ typography: 'body2', xs:{display:"none"} }}>
              <Iconify icon="ic:baseline-account-circle" width={24} sx={{ mr: 3 }} />
              {user?.UserProfile?.firstName } {user?.UserProfile?.middleName}{' '}
              {user?.UserProfile?.lastName}{' '}
            </Stack>

            <Stack direction="row" sx={{ typography: 'body2' }}>
              <Iconify icon="fluent:mail-24-filled" width={24} sx={{ mr: 3 }} />
              <Stack direction="row"   alignItems="center" spacing={1}>
                <Typography sx={{wordBreak:"break-word"}}> {user?.email}</Typography>
                <Typography>
                  {' '}
                  {user?.isEmailVerified ? (
                    <Label color="success">Verified</Label>
                  ) : (
                    <Label color="error">Not Verified</Label>
                  )}{' '}
                </Typography>
              </Stack>
            </Stack>

            <Stack direction="row" sx={{ typography: 'body2' }}>
              <Iconify icon="ic:sharp-smartphone" width={24} sx={{ mr: 3 }} />
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography> {user?.phone}</Typography>
                <Typography>
                  {user?.isMobileVerified ? (
                    <Label color="success">Verified</Label>
                  ) : (
                    <Label color="error">Not Verified</Label>
                  )}
                </Typography>
              </Stack>
            </Stack>

            <Stack
              direction="row"
              sx={{ typography: 'body2', width: '100%', justifyContent: 'center' }}
            >
              {user?.isMobileVerified && user?.isEmailVerified ? (
                ''
              ) : (
                <>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    BackdropProps={{
                      style: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        borderRadius:'18px',
                        boxShadow: 24,
                        p: 4,
                        
                      }}
                    >
                      <JwtRegisterView user={user} />
                    </Box>
                  </Modal>
                  <Button
                    color="success"
                    sx={{ fontSize: '14px', mt: '5px' }}
                    onClick={handleOpen}
                    disableTouchRipple
                  >
                    Verify Now
                  </Button>
                  
                </>
              )}
            </Stack>
          {/* </Stack> */}
          <Button 
          variant="soft" 
          color="error"
          onClick={handleDeleteOpen}
          >
            Delete Account
          </Button>
          
        <Dialog
        open={openDelete}
        onClose={handleDeleteClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Account Delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure to Delete Your Account
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteClose}>Disagree</Button>
          <Button onClick={handleDeleteuser} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

        </Stack>
      </Card>
  );

  const renderCandidate = (
      <Card sx={{ width: '100%' }}>
        <CardHeader title="Candidate" />
        <Stack spacing={2} sx={{ p: 3 }}>
          <Stack direction="row" alignItems="start">
            <Typography sx={{ mr: 1, minWidth: {xs:100,sm:180, md:180} }}>ELECTION: </Typography>
            <Typography>{candidates?.data?.ElectionDetail?.electionType}</Typography>
          </Stack>

          <Stack direction="row" alignItems="start">
            <Typography sx={{ mr: 1, minWidth: {xs:100,sm:180, md:180} }}>PARTY: </Typography>
            <Typography>{candidates?.data?.PartyDetail?.partyName}</Typography>
          </Stack>

          <Stack direction="row" alignItems="start">
            <Typography sx={{ mr: 1, minWidth: {xs:100,sm:180, md:180} }}>LEGAL CASE: </Typography>
            <Typography>{candidates?.data?.legalCase}</Typography>
          </Stack>
        </Stack>
      </Card>
  );

  const renderVoter = (
      <Card sx={{ width: '100%' }}>
        <CardHeader title="Voter" />
        <Stack spacing={2} sx={{ p: 3 }}>
          <Stack direction="row" alignItems="start">
            <Typography sx={{ mr: 10, minWidth: {xs:100,sm:180, md:180} }}>Polling Station Name: </Typography>
            <Typography>{voter?.data?.PollingStationDetail?.pollingStationName}</Typography>
          </Stack>

          <Stack direction="row" alignItems="start">
            <Typography sx={{ mr: 10, minWidth: {xs:100,sm:180, md:180} }}>UPI ID: </Typography>
            <Typography>{voter?.data?.upiId}</Typography>
          </Stack>
        </Stack>
      </Card>
  );
  const renderProfile = (
      <Card sx={{ width: '100%' }}>
        <CardHeader title="Profile" />
        <Stack spacing={2} sx={{ p: 3 }}>
          <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
            <Typography sx={{ mr: 10, minWidth: {xs:100,sm:180, md:180} }}>FullName: </Typography>
            <Typography>
              {user?.UserProfile?.firstName } {user?.UserProfile?.middleName}{' '}
              {user?.UserProfile?.lastName}{' '}
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
            <Typography sx={{ mr: 10, minWidth: {xs:100,sm:180, md:180} }}>DOB:</Typography>
            <Typography> {user?.UserProfile?.dateOfBirth} </Typography>
          </Stack>

          <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
            <Typography sx={{ mr: 10,minWidth: {xs:100,sm:180, md:180} }}>Gender:</Typography>
            <Typography> {user?.UserProfile?.gender} </Typography>
          </Stack>

          <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
            <Typography sx={{ mr: 10, minWidth: {xs:105,sm:180, md:180} }}>Father Name:</Typography>
            <Typography> {user?.UserProfile?.fatherName} </Typography>
          </Stack>

          <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
            <Typography sx={{ mr: 10, minWidth: {xs:100,sm:180, md:180} }}>Mother Name:</Typography>
            <Typography> {user?.UserProfile?.motherName} </Typography>
          </Stack>

          <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
            <Typography sx={{ mr: 10, minWidth: {xs:100,sm:180, md:180}}}>Qualification:</Typography>
            <Typography> {user?.UserProfile?.highestQualification} </Typography>
          </Stack>

          <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
            <Typography sx={{ mr: 10, minWidth: {xs:100,sm:180, md:180} }}>Your Political Party:</Typography>
            {/* <Typography> {user?.UserProfile && partyList &&partyList?.data[politicalparty-1]?.partyName} </Typography> */}
            <Typography> {PartyData[Number(user?.UserProfile?.politicalPartyAffiliation)-1]?.label} </Typography>
          </Stack>

          <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
            <Typography sx={{ mr: 10, minWidth: {xs:100,sm:180, md:180} }}>Current Job:</Typography>
            <Typography> {user?.UserProfile?.currentJobTitle} </Typography>
          </Stack>

          <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
            <Typography sx={{ mr: 10, minWidth: {xs:100,sm:180, md:180} }}>Whatsapp No.:</Typography>
            <Typography> {user?.UserProfile?.whatsappNumber} </Typography>
          </Stack>

          <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
            <Typography sx={{ mr: 10, minWidth: {xs:100,sm:180, md:180} }}>Nationality:</Typography>
            <Typography> {user?.UserProfile?.nationality}</Typography>
          </Stack>

          <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
            <Typography sx={{ mr: 10, minWidth: {xs:100,sm:180, md:180} }}>Identity Type :</Typography>
            <Typography>{user?.UserIdentityDetails && user?.UserIdentityDetails[0]?.identityType}</Typography>
          </Stack>

          <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
            <Typography sx={{ mr: 10, minWidth: {xs:100,sm:180, md:180} }}>Identity Number:</Typography>
            <Typography>{ user?.UserIdentityDetails && user?.UserIdentityDetails[0]?.identityNumber}</Typography>
          </Stack>

          <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
            <Typography sx={{ mr: 10, minWidth: {xs:100,sm:180, md:180} }}>Address:</Typography>
            <Stack direction="column">
              <Typography>
                {user?.UserAddressesses &&  user?.UserAddressesses[0]?.streetAddress} ,{' '}
                { user?.UserAddressesses &&  user?.UserAddressesses[0]?.userCity} ,{' '}
                { user?.UserAddressesses && user?.UserAddressesses[0]?.userState}
              </Typography>
              <Typography>
                {user?.UserAddressesses && user?.UserAddressesses[0]?.postalCode},{' '}
                {user?.UserAddressesses && user?.UserAddressesses[0]?.country},{' '}
                {user?.UserAddressesses && user?.UserAddressesses[0]?.addressType}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Card>
  );

  return (
    <Grid
      container
      spacing={3}
      p={2}
      gap={6}
      sx={{
      display:"grid",
      gridTemplateColumns:{
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
      },
      '@media (max-width: 499px)': {
        display: 'block',
      },
      }}
     
    >
      {user && (
        <Stack spacing={3} gridColumn="span 1" sx={{ gap: '50px' }}>
          {renderAbout}
          {user?.userRoleId === 2 ? renderCandidate : ''}
          {renderVoter}
        </Stack>
      )}
      {user?.UserProfile != null && (
        <Stack spacing={3} gridColumn="span 1" sx={{mt:{xs:"50px",sm:0}}}>
          {renderProfile}
        </Stack>
      )}
    </Grid>
  );
}
ProfileHome.propTypes = {
  voter: PropTypes.object,
  candidates: PropTypes.object,
};