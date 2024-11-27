import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import LoadingButton from '@mui/lab/LoadingButton';

import { useAuthContext } from 'src/auth/hooks';
import { UpdateVoterProfile } from 'src/api/voter';
import { useGetPools } from 'src/api/poolManagement';

import { useSnackbar } from 'src/components/snackbar';
import FormProvider, { RHFTextField, RHFAutocomplete } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function VoterNewEditForm({ voterEdit }) {
  const navigate = useNavigate();

  const voterId = voterEdit?.data?.voterProfileId;

  const { user: CurrentUser } = useAuthContext();

  const { enqueueSnackbar } = useSnackbar();
  const { pools: pollList } = useGetPools();

  const pollListArr = pollList?.data || [];

  const PollData = pollListArr.map((list) => ({
    value: list.pollingStationId,
    label: list.pollingStationName,
  }));

  const PollListDataForOptions = PollData.map((option) => option.value);

  const VoterSchema = Yup.object().shape({
    userId: Yup.number().required('User name is required'),
    pollingStationId: Yup.number().required('Polling Station name is required'),
    upiId: Yup.string().required('UPI ID is required'),
  });

  const defaultValues = useMemo(
    () => ({
      userName: CurrentUser?.UserProfile?.firstName,
      userId: voterEdit?.data?.userId || null,
      pollingStationId: voterEdit?.data?.pollingStationId || null,
      upiId: voterEdit?.data?.upiId || '',
    }),
    [voterEdit, CurrentUser]
  );

  const methods = useForm({
    resolver: yupResolver(VoterSchema),
    defaultValues,
  });

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    if (voterEdit) {
      reset(defaultValues);
    }
  }, [voterEdit, defaultValues, reset]);

  const onSubmitProfileUpdate = handleSubmit(async (data) => {
    try {
      console.log("hhhhhh",data);
      const response = await UpdateVoterProfile(voterId, data);

      if (response) {
        enqueueSnackbar('Voter Profile updated successfully', { variant: 'success' });
        navigate(`/dashboard/user/profile`);
      } else {
        enqueueSnackbar('Failed to update voter profile', { variant: 'error' });
      }
    } catch (error) {
      console.error('Error updating  voter profile:', error);
      enqueueSnackbar('An error occurred while updating voter profile', { variant: 'error' });
    }
  });

  return (
    <FormProvider methods={methods} onSubmit={onSubmitProfileUpdate}>
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
              <RHFTextField name="userName" label="User Name" disabled />
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
                Save Changes
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}

VoterNewEditForm.propTypes = {
  voterEdit: PropTypes.object,
};
