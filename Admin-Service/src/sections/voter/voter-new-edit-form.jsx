import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useTheme } from '@emotion/react';
import { useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import LoadingButton from '@mui/lab/LoadingButton';

import { bgGradient } from 'src/theme/css';
import { useGetUsers } from 'src/api/user';
import { useAuthContext } from 'src/auth/hooks';
import { useGetPools } from 'src/api/poolManagement';
import { useGetVoters, createVoterProfile, UpdateVoterProfile } from 'src/api/voter';

import { useSnackbar } from 'src/components/snackbar';
import FormProvider, { RHFTextField, RHFAutocomplete } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function VoterNewEditForm({ currentVoter }) {
  const navigate = useNavigate();

  const theme = useTheme();


  const { user } = useAuthContext();

  const voterId = currentVoter?.data.voterProfileId;

  const { enqueueSnackbar } = useSnackbar();

  const { voters: voterList } = useGetVoters();
  const VoterListArr = voterList?.data || [];
  const VoterProfileList = VoterListArr?.map((voter) => voter.userId) || [];

  const { users: usersList } = useGetUsers(user.accessToken);

  const allUserArr = usersList?.data || [];

  const usersListArr =
    usersList && usersList.data
      ? usersList.data.filter((users) => !VoterProfileList.includes(users.userId))
      : [];

  // console.log("voter======>",usersListArr);

  const UserData = usersListArr.map((list) => ({
    value: list.userId,
    label: list.UserProfile?.firstName || list.phone,
  }));

  const AllUserData = allUserArr.map((list) => ({
    value: list.userId,
    label: list.UserProfile?.firstName || list.phone,
  }));

  const AllUserDataForOptions = AllUserData.map((option) => option.value);

  const UserListDataForOptions = UserData.map((option) => option.value);

  const { pools: pollList } = useGetPools();

  const pollListArr = pollList?.data || [];

  const PollData = pollListArr.map((list) => ({
    value: list.pollingStationId,
    label: list.pollingStationName,
  }));

  const PollListDataForOptions = PollData.map((option) => option.value);

  // Schema
  const VoterSchema = Yup.object().shape({
    userId: Yup.number().required('User name is required'),
    pollingStationId: Yup.number().required('Polling Station name is required'),
    upiId: Yup.string().required('UPI ID is required'),
  });

  const defaultValues = useMemo(
    () => ({
      userId: currentVoter?.data.userId || null,
      pollingStationId: currentVoter?.data.pollingStationId || null,
      upiId: currentVoter?.data.upiId || localStorage.getItem('upiId'),
    }),
    [currentVoter]
  );

  const methods = useForm({
    resolver: yupResolver(VoterSchema),
    defaultValues,
  });

  // for Profile from
  const { handleSubmit, reset, watch } = methods;
  const values = watch();

  useEffect(() => {
    if (currentVoter) {
      reset(defaultValues);
    }
  }, [currentVoter, defaultValues, reset]);

  useEffect(() => {

    localStorage.setItem('upiId', values.upiId);

  }, [values.upiId]);

  //  Profile Creation function

  const onSubmitProfile = handleSubmit(async (data) => {
    try {
      const response = await createVoterProfile(data);

      if (response) {
        localStorage.setItem('upiId', '');
        enqueueSnackbar('Voter Profile created successfully', { variant: 'success' });
        navigate('/dashboard/voter');
      } else {
        enqueueSnackbar('Failed to create voter profile', { variant: 'error' });
      }
    } catch (error) {
      // Handle errors here if necessary
      console.error('Error submitting voter profile:', error);
      enqueueSnackbar('An error occurred while creating voter profile', { variant: 'error' });
    }
  });

  // Profile Update function

  const onSubmitProfileUpdate = handleSubmit(async (data) => {
    try {
      const response = await UpdateVoterProfile(voterId, data);

      if (response) {
        localStorage.setItem('upiId', '');
        enqueueSnackbar('Voter Profile updated successfully', { variant: 'success' });
        navigate(`/dashboard/voter/${voterId}`);
      } else {
        enqueueSnackbar('Failed to update voter profile', { variant: 'error' });
      }
    } catch (error) {
      // Handle errors here if necessary
      console.error('Error updating  voter profile:', error);
      enqueueSnackbar('An error occurred while updating voter profile', { variant: 'error' });
    }
  });

  return (
    <>
      {user.userRoleId !== 9 && (
        <FormProvider
          methods={methods}
          onSubmit={currentVoter ? onSubmitProfileUpdate : onSubmitProfile}
        >
          <Grid container spacing={3}>
            <Grid xs={12} md={8}>
              <Card sx={{ p: 3 }}>
                <Box
                  rowGap={3}
                  columnGap={2}
                  display="grid"
                  gridTemplateColumns={{
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                  }}
                >
                  {currentVoter ? (
                    <RHFAutocomplete
                      name="userId"
                      label="User Name"
                      options={AllUserDataForOptions}
                      getOptionLabel={(value) => {
                        const User = AllUserData.find((option) => option.value === value);
                        return User ? User.label : '';
                      }}
                      disabled
                    />
                  ) : (
                    <RHFAutocomplete
                      name="userId"
                      label="User Name"
                      options={UserListDataForOptions}
                      getOptionLabel={(value) => {
                        const User = UserData.find((option) => option.value === value);
                        return User ? User.label : '';
                      }}
                    />
                  )}

                  <RHFAutocomplete
                    name="pollingStationId"
                    label="Polling Station Name"
                    options={PollListDataForOptions}
                    getOptionLabel={(value) => {
                      const Poll = PollData.find((option) => option.value === value);
                      return Poll ? Poll.label : '';
                    }}
                  />
                </Box>

                <RHFTextField sx={{ mt: 2 }} name="upiId" label="UPI ID" />

                <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                  <LoadingButton type="submit" variant="contained">
                    {!currentVoter ? 'Create Voter' : 'Save Changes'}
                  </LoadingButton>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </FormProvider>
      )}
      {user.userRoleId === 9 && (
        <FormProvider
          methods={methods}
          onSubmit={currentVoter ? onSubmitProfileUpdate : onSubmitProfile}
        >
          <Grid xs={12} md={8}>
            <Card sx={{
              p: { xs: 3, md: 5, },
              minWidth: { md: '600px' },
              mt:{xs:5, md:10},
              boxShadow: '0px 0px 7px 2px rgba(0,0,0,0.15)',
              '@media (max-width:900px)': {
                // width:380,              
              }
            }}>
              <RHFTextField
                name="userId"
                label="Add Voter Mobile Number"
                forcePopupIcon={false}
                sx={{
                  mt: 2,
                }}
                getOptionLabel={(value) => {
                  const User = UserData.find((option) => option.value === value);
                  return User ? User.label : '';
                }}
              />

              <RHFAutocomplete
                name="pollingStationId"
                label="Polling Station Name"
                options={PollListDataForOptions}
                sx={{
                  mt: 2,
                }}
                getOptionLabel={(value) => {
                  const Poll = PollData.find((option) => option.value === value);
                  return Poll ? Poll.label : '';
                }}
              />

              <RHFTextField
                name="upiId"
                label="Your UPI ID"
                sx={{
                  mt: 2,
                }}
              />

              <LoadingButton
                type="submit"
                variant="contained"
                sx={{
                  mt: 2,
                  fontWeight: 1,
                  ...bgGradient({
                    direction: '135deg',
                    startColor: theme.palette.primary.main,
                    endColor: theme.palette.primary.dark,
                  }),
                  width: '100%',
                  fontSize: 20,
                  borderRadius: 50,
                }}
              >
                {!currentVoter ? 'Create Voter' : 'Save Changes'}
              </LoadingButton>
            </Card>
          </Grid>
        </FormProvider>
      )}
    </>
  );
}

VoterNewEditForm.propTypes = {
  currentVoter: PropTypes.object,
};
