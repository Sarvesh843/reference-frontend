import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import LoadingButton from '@mui/lab/LoadingButton';

import { useAuthContext } from 'src/auth/hooks';
import { updateUserRole, useGetRolesList } from 'src/api/userRole';

import { useSnackbar } from 'src/components/snackbar';
import FormProvider, { RHFTextField, RHFAutocomplete } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function UserProfileEdit({ currentUserRole }) {
  const navigate = useNavigate();

  const { user } = useAuthContext();

  const { enqueueSnackbar } = useSnackbar();

  const UserRoleTypeSchema = Yup.object().shape({
    userRoleType: Yup.string().required('userRole Type is required'),
  });

  const { users: UserRoleList } = useGetRolesList(user.accessToken);

  const currentUserRoleId = user.userRoleId;

  const UserRoleListArr =
    UserRoleList?.data.filter((role) => role.userRoleId > currentUserRoleId) || [];

  const UserRoleData = UserRoleListArr.map((list) => ({
    value: list.userRoleId,
    label: list.userRoleType,
  }));

  const UserRoleDataForOptions = UserRoleData.map((option) => option.value);

  const defaultUserRoleTypeValues = useMemo(
    () => ({
      userRole: currentUserRole?.userRoleType,
      userRoleType: currentUserRole?.userRoleType,
    }),
    [currentUserRole]
  );
  const methodsuserRoleType = useForm({
    resolver: yupResolver(UserRoleTypeSchema),
    defaultUserRoleTypeValues,
  });

  const { handleSubmit: handleSubmitRole, reset: resetProfile } = methodsuserRoleType;

  useEffect(() => {
    if (currentUserRole) {
      resetProfile(defaultUserRoleTypeValues);
    }
  }, [currentUserRole, defaultUserRoleTypeValues, resetProfile]);

  const onSubmitUpdateRoleType = handleSubmitRole(async (data) => {
    try {
      const response = await updateUserRole(data, user.accessToken, currentUserRole?.userRoleId);
      if (response) {
        enqueueSnackbar('User RoleType Updated successfully', { variant: 'success' });
        navigate(`/dashboard/userProfileManagement/list`);
      }
    } catch (error) {
      enqueueSnackbar('An error occurred while creating User Role Type', { variant: 'error' });
    }
  });

  return (
    <div>
      <FormProvider methods={methodsuserRoleType} onSubmit={onSubmitUpdateRoleType}>
        <Grid container spacing={3}>
          <Grid xs={12} md={8}>
            <Card sx={{ p: 3 }}>
              <Box
                rowGap={3}
                columnGap={2}
                display="grid"
                gridTemplateColumns={{
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(1, 1fr)',
                }}
              >
                {currentUserRole && (
                  <RHFTextField name="userRole" label="Current Role Type" disabled />
                )}
                {currentUserRole && (
                  <RHFAutocomplete
                    name="userRoleType"
                    label="Update Role Type"
                    options={UserRoleDataForOptions}
                    getOptionLabel={(value) => {
                      const roletype = UserRoleData.find((option) => option.value === value);
                      return roletype ? roletype.label : '';
                    }}
                  />
                )}

                <Stack alignItems="flex-end" sx={{ mt: 1 }}>
                  <LoadingButton
                    sx={{ width: '100%', height: '60px' }}
                    type="submit"
                    variant="contained"
                  >
                    Save Role Type Changes
                  </LoadingButton>
                </Stack>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </FormProvider>
    </div>
  );
}

UserProfileEdit.propTypes = {
  currentUserRole: PropTypes.object,
};
