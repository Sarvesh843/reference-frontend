import * as Yup from 'yup';
import { m } from 'framer-motion';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo, useEffect, useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router-dom';
import { FormControl, InputLabel, Select, MenuItem, Box, Button, TextField } from '@mui/material';
import { useAuthContext } from 'src/auth/hooks';
import {
  createAppointment,
  updateAppointment,
  useGetAppointmentsCandidate,
} from 'src/api/appointment';
import { useSnackbar } from 'src/components/snackbar';
import FormProvider, { RHFTextField, RHFAutocomplete } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function AppointmentNewEditForm({ currentappointment }) {
  console.log(currentappointment?.data?.candidateId);
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedId, setSelectedId] = useState('');
  const [show, setShow] = useState();
  const [valuee, setValuee] = useState('');
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  
  const { user } = useAuthContext();
  const { candidates } = useGetAppointmentsCandidate();

  // console.log(candidates);

  const appointmentId = currentappointment?.data.appointmentId;
  const candidateProfiles = candidates?.data?.[0]?.CandidateProfiles;

  // console.log(candidateProfiles?.[0]?.User?.UserProfile?.firstName);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    console.log(value);

    const selectedOption = candidateProfiles.find(
      (option) => option?.User?.UserProfile?.firstName === value
    );
    console.log(selectedOption.User.userId);
    setSelectedId(selectedOption ? selectedOption.User.userId : '');
  
  };

  const AppoinmentSchema = Yup.object().shape({
    voterId: Yup.number().required('User is required'),
    problemDescription: Yup.string().required('Problem Description is required'),
    // candidateId:Yup.number().required(' candidateId is required'),
  });

      
         const defaultValues = useMemo(
          () => ({
            voterId: currentappointment?.data.voterId || user?.userId,
            candidateId: currentappointment?.data.candidateId || selectedId,
            problemDescription: currentappointment?.data.problemDescription || '',
            appointmentType: currentappointment?.data.appointmentType || show,
            appointmentTime: currentappointment?.data.appointmentTime || '',
            appointmentDate: currentappointment?.data.appointmentDate || '',
            appointmentStatus: currentappointment?.data.appointmentStatus || 'open',
            appointmentPassMeetingLink: currentappointment?.data.appointmentPassMeetingLink || '',
            reportingContactNumber: currentappointment?.data.reportingContactNumber || '',
            reportingContactName: currentappointment?.data.reportingContactName || '',
            reportingContactAddress: currentappointment?.data.reportingContactAddress || '',
          }),
          [currentappointment, user?.userId, selectedId, show]
        );
        

  // Form Method
  const methods = useForm({
    resolver: yupResolver(AppoinmentSchema),
    defaultValues,
  });
  const {
    reset,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    if (currentappointment) {
      reset(defaultValues);
    }
  }, [currentappointment, defaultValues, reset]);

  useEffect(() => {
    if(currentappointment){
     setValue('candidateId', currentappointment?.data?.candidateId);}
    else{
      setValue('candidateId', selectedId)
    }
    setValue('appointmentType', show);
  }, [selectedId, setValue,show,currentappointment]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await createAppointment(data);

      if (response) {
        enqueueSnackbar('Appointment created successfully', { variant: 'success' });

        navigate(`/dashboard/Appointment/list/?status=open`);
      } else {
        enqueueSnackbar('Failed to create Appointment', { variant: 'error' });
      }
    } catch (error) {
      console.error('Error submitting Appointment:', error);
      enqueueSnackbar('An error occurred while creating Appointment', { variant: 'error' });
    }
  });

  // Function Call for Updating Ward Profile
  const onSubmitUpdate = handleSubmit(async (data) => {
    try {
     
      const response = await updateAppointment(appointmentId, data);
      if (response) {
        enqueueSnackbar('Appointment updated successfully', { variant: 'success' });
        navigate(`/dashboard/Appointment/${appointmentId}`);
      } else {
        enqueueSnackbar('Failed to update Appointment', { variant: 'error' });
      }
    } catch (error) {
      // Handle errors here if necessary
      console.error('Error updating Appointment:', error);
      enqueueSnackbar('An error occurred while updating Appointment', { variant: 'error' });
    }
  });
  const handleSelectionChange = (newValue) => {
    setShow(newValue);
  };

  return (
    <>


  {/* <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" p={3}> */}
     <Grid container spacing={3}>
     <Grid xs={12} md={8}>

      {!currentappointment && (
      //   <Card sx={{ p: 3 }}>
      //     <FormControl fullWidth>
      //       <InputLabel id="dropdown-label">Select Candidate </InputLabel>
      //       <Select
      //         labelId="dropdown-label"
      //         id="dropdown"
      //         value={selectedValue}
      //         onChange={handleChange}
      //         fullWidth
      //       >
      //         {candidateProfiles?.map((option) => (
      //           <MenuItem key={option.userId} value={option?.User?.UserProfile?.firstName}>
      //             {option?.User?.UserProfile?.firstName}
      //           </MenuItem>
      //         ))}
      //       </Select>
      //     </FormControl>
      //   </Card>
      // )}
      <Card sx={{ p: 3 }}>
  <FormControl fullWidth>
    <InputLabel id="dropdown-label">Select Candidate</InputLabel>
    <Select
      labelId="dropdown-label"
      id="dropdown"
      value={selectedValue}
      onChange={handleChange}
      label="Select Candidate" // Ensure this prop is set
      fullWidth
    >
      {candidateProfiles?.map((option) => (
        <MenuItem key={option.userId} value={option?.User?.UserProfile?.firstName}>
          {option?.User?.UserProfile?.firstName}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
</Card>)}
      </Grid>
      </Grid>

      {/* {!showThankYou ? ( */}
      <FormProvider methods={methods} onSubmit={currentappointment ? onSubmitUpdate : onSubmit}>
        <Grid container spacing={3}>
          <Grid xs={12} md={8}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={3} sx={{ p: 3 }}>
                {/* <RHFAutocomplete
                    name="candidateId"
                    label="Candidate"
                    placeholder="Choose Your Candidate"
                    fullWidth
                    options={candidateProfiles?.map((option) => option.User?.UserProfile?.firstName)}
                    getOptionLabel={(option) => option?.User?.UserProfile?.firstName}
                  /> */}
                {/* candidateProfiles?.[0]?.User?.UserProfile?.firstName */}
                <RHFTextField
                  label="Problem Description"
                  placeholder="problem Description"
                  name="problemDescription"
                  multiline
                  rows={4}
                  fullWidth
                />


                       
                {currentappointment ? (
                  <Stack spacing={3}>
                    <RHFAutocomplete
                    
                      name="appointmentType"
                      label="Appointment Type"
                      placeholder="Appointment Type"
                      fullWidth
                      value={show}
                      options={['Office', 'Remote'].map((option) => option)}
                      getOptionLabel={(option) => option}
                      onChange={(event, value) => handleSelectionChange(value)}
                       isOptionEqualToValue={(option, value) => option.toLowerCase() === value.toLowerCase()}
                    />
                   
                    {show === 'Office' && (
                      <>
                        <RHFTextField name="reportingContactNumber" label="Reporting Contact Number" />
                        <RHFTextField name="reportingContactName" label="Reporting Contact Name" />
                        <RHFTextField name="reportingContactAddress" label="Reporting Contact Address" />

                        <RHFTextField name="appointmentTime" label="Appointment Time" />

                        <RHFTextField name=" appointmentDate" label="Appointment  Date" />
                        <RHFAutocomplete
                          name="appointmentStatus"
                          label="Appointment Status"
                          placeholder="Appointment Status"
                          fullWidth
                          options={['open', 'closed', 'in-progress'].map((option) => option)}
                          getOptionLabel={(option) => option}
                        />
                      </>
                    )}

                    {show === 'Remote' && (
                      <>
                        <RHFTextField
                          name="appointmentPassMeetingLink"
                          label="Appointment Pass Meeting Link"
                        />
                        <RHFAutocomplete
                          name="appointmentStatus"
                          label="Appointment Status"
                          placeholder="Appointment Status"
                          fullWidth
                          options={['open', 'closed', 'in-progress'].map((option) => option)}
                          getOptionLabel={(option) => option}
                        />
                      </>
                    )}
                  </Stack>
                ) : null}

                <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                  <LoadingButton
                    type="submit"
                    variant="contained"
                    size="large"
                    loading={isSubmitting}
                  >
                    {!currentappointment ? 'Create Appointment' : 'Appointment Link'}
                  </LoadingButton>
                </Stack>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </FormProvider>
      {/* </Box> */}
    </>
  );
}

AppointmentNewEditForm.propTypes = {
  currentappointment: PropTypes.object,
};


// {!currentappointment && (
  //   <Card sx={{ p: 3 }}>
  //     <FormControl fullWidth>
  //       <InputLabel id="dropdown-label">Select Candidate </InputLabel>
  //       <Select
  //         labelId="dropdown-label"
  //         id="dropdown"
  //         value={selectedValue}
  //         onChange={handleChange}
  //         fullWidth
  //       >
  //         {candidateProfiles?.map((option) => (
  //           <MenuItem key={option.userId} value={option?.User?.UserProfile?.firstName}>
  //             {option?.User?.UserProfile?.firstName}
  //           </MenuItem>
  //         ))}
  //       </Select>
  //     </FormControl>
  //   </Card>
  // )}
//   <Card sx={{ p: 3 }}>
// <FormControl fullWidth>
// <InputLabel id="dropdown-label">Select Candidate</InputLabel>
// <Select
//   labelId="dropdown-label"
//   id="dropdown"
//   value={selectedValue}
//   onChange={handleChange}
//   label="Select Candidate" // Ensure this prop is set
//   fullWidth
// >
//   {candidateProfiles?.map((option) => (
//     <MenuItem key={option.userId} value={option?.User?.UserProfile?.firstName}>
//       {option?.User?.UserProfile?.firstName}
//     </MenuItem>
//   ))}
// </Select>
// </FormControl>