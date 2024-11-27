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

import { _contactStatus } from 'src/_mock';
import { UpdateContact } from 'src/api/contact';

import { useSnackbar } from 'src/components/snackbar';
import FormProvider, {
  RHFTextField,
  RHFAutocomplete,
} from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function ContactNewEditForm({ currentContact }) {
  console.log(currentContact)
 
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const contactId = currentContact?.data.contactId;

  const NewContactSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    mobileNumber: Yup.string().required('Phone number is required'),
    description: Yup.string().required('description is required'),
    remark: Yup.string().required('remark is required'),
    status: Yup.string().required('status is required'),
    subject: Yup.mixed().nullable().required('subject is required'),
  });

  const defaultValues = useMemo(
    () => ({
      name: currentContact?.data.name || '',
      email: currentContact?.data.email || '',
      status: currentContact?.data.status || '',
      remark: currentContact?.data.remark || '',
      subject: currentContact?.data.subject || '',
      description: currentContact?.data.description || '',
      mobileNumber: currentContact?.data.mobileNumber || '',
    }),
    [currentContact]
  );

  const methods = useForm({
    resolver: yupResolver(NewContactSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    if (currentContact) {
      reset(defaultValues);
    }
  }, [currentContact, defaultValues, reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await UpdateContact(contactId, data);

      if(response) {
        enqueueSnackbar('Contact updated successfully', { variant: 'success' });
        navigate(`/dashboard/contact/${contactId}`);
      } else {
        enqueueSnackbar('Failed to update Contact', { variant: 'error' });
      }
    } catch (error) {
      // Handle errors here if necessary
      console.error('Error updating Contact :', error);
      enqueueSnackbar('An error occurred while updating contact ', { variant: 'error' });
    }
  });


  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
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
              <RHFTextField name="name" label="Name" disabled />
              <RHFTextField name="email" label="Email" disabled />
              <RHFTextField name="mobileNumber" label="Phone No." disabled />
              <RHFTextField name="subject" label="Subject" disabled />
              <Stack spacing={1.5}>
                <RHFTextField
                  name="description"
                  fullWidth
                  label="Description"
                  multiline
                  rows={4}
                  disabled
                />
              </Stack>
              
              <RHFAutocomplete
                name="status"
                type="status"
                label="Status"
                placeholder="Choose a status"
                fullWidth
                options={_contactStatus.map((option) => option)}
                getOptionLabel={(option) => option}
              />


              <RHFTextField name="remark" label="Remark" />

            </Box>

            <Stack alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                Save Changes
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}

ContactNewEditForm.propTypes = {
  currentContact: PropTypes.object,
};
