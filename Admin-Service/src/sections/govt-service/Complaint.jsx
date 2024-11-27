// // import { useState } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// // import ReplyAllIcon from '@mui/icons-material/ReplyAll';
// import { Box, Grid, Card, CardMedia, Typography, CardContent } from '@mui/material';
// import FormProvider from 'src/components/hook-form/form-provider';
// import { RHFTextField } from 'src/components/hook-form';
// import { LoadingButton } from '@mui/lab';
// import { Stack } from '@mui/system';

// export default function Complaint({ settoggle }) {

// // const cardsData = [
// //   { id: 1, title: 'Tractors', description: 'Versatile machines used for various agricultural tasks such as plowing, planting, and harvesting.', navigate: ``, path: '/assets/images/FarmerLabour/Agriculture_Equipment.jpg' },
// //   { id: 2, title: 'Combine Harvesters', description: 'Efficiently harvest grains and other crops by combining reaping, threshing, and winnowing functions.', navigate: ``, path: '/assets/images/FarmerLabour/CombineHarvestor.png' },
// //   { id: 3, title: 'Irrigation Systems', description: 'Ensure consistent water supply to crops for optimal growth and yield, reducing dependence on rainfall.', navigate: ``, path: '/assets/images/FarmerLabour/Irrigationsystem.jpg' },
// // ];
//   return (
//     // <Box>
//     //   {/* <Typography variant='h4' sx={{ color: "#078dee", borderBottom: "2.5px solid #078dee", width: "fit-content" }}>Farmer Market Place</Typography>
//     //   <Button sx={{ mt: 2 }} onClick={() => settoggle(false)}><ReplyAllIcon /></Button> */}
//     //   <Grid container sx={{ mt: 2, gridGap: 16, justifyContent: "space-evenly" }}>
//     //     {cardsData.map((card) => (
//     //       <Grid item key={card.id} xs={10} sm={8} md={4} lg={3} sx={{
//     //         borderRadius: "20px",
//     //         boxShadow: '0px 0px 7px 2px rgba(0,0,0,0.15)',
//     //         padding: "0 !important",
//     //         margin: "0 !important"
//     //       }}
//     //       >
//     //         <Link to={card.navigate} target='_blank' style={{ textDecoration: "none", textAlign: "center", height: "100%", width: "100%" }}>
//     //           <Card sx={{ height: "100%", width: "100%" }}>
//     //             <CardMedia sx={{ p: 1 }}>
//     //               <Box component="img" src={card.path} alt={card.title} height={150} />
//     //             </CardMedia>
//     //             <CardContent>
//     //               <Typography variant="h5">
//     //                 {card.title}
//     //               </Typography>
//     //               <Typography variant="body2" color="textSecondary">
//     //                 {card.description}
//     //               </Typography>
//     //             </CardContent>
//     //           </Card>
//     //         </Link>
//     //       </Grid>
//     //     ))}
//     //   </Grid>
//     //   {/* <Typography variant='h4' sx={{color: "#078dee", borderBottom: "2.5px solid #078dee", width: "fit-content"}}>Farmer Equipment</Typography> */}
//     //   {/* <Typography variant='h4' sx={{color: "#078dee", borderBottom: "2.5px solid #078dee", width: "fit-content"}}>Farmer Seeds</Typography> */}
//     //   {/* <Typography variant='h4' sx={{color: "#078dee", borderBottom: "2.5px solid #078dee", width: "fit-content"}}>Farmer marketPlace</Typography> */}

//     // </Box>

//     <FormProvider >
//       <Grid >
//         <Grid xs={12} md={6}>
//           <Card sx={{ pt: 3,  px: 3, width: 600 }}>
//             <Box sx={{ mb: 5 ,}}>
//               <Stack spacing={2}>
//                 <Typography variant="h5">Please give your suggestion to improve our App</Typography>
//                 <RHFTextField
//                   // name="feedbackMessage"
//                   label="Enter your suggestion here"
//                   multiline
//                   rows={5}
//                   variant="outlined"
//                 />
//                 <LoadingButton
//                   type="submit"
//                   variant="contained"
//                   sx={{
//                     mt: 2,
//                     fontWeight: 1,
//                     background: '#078dee',
//                     width: '100%',
//                     fontSize: 15,
//                     borderRadius: 50,
//                   }}
//                 >
//                   Submit
//                 </LoadingButton>
//               </Stack>
//             </Box>
//           </Card>
//         </Grid>
//       </Grid>
//     </FormProvider>
//   );
// }

// Complaint.propTypes = {
//   settoggle: PropTypes.object,
// };

import * as Yup from 'yup';
// import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useMemo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import LoadingButton from '@mui/lab/LoadingButton';

import { useAuthContext } from 'src/auth/hooks';
import { createSuggestion } from 'src/api/suggestion';

import { useSnackbar } from 'src/components/snackbar';
import FormProvider, { RHFAutocomplete, RHFTextField } from 'src/components/hook-form';
import { useGetCandidates } from 'src/api/candidate';

export default function Complaint() {
  const navigate = useNavigate();

  const { user } = useAuthContext();

  const { enqueueSnackbar } = useSnackbar();

  // Schema

  const Suggestionschema = Yup.object().shape({
    feedbackMessage: Yup.string().required('suggestion is required'),
  });

  const defaultValues = useMemo(
    () => ({
      feedbackMessage: '',
    }),
    []
  );

  const methods = useForm({
    resolver: yupResolver(Suggestionschema),
    defaultValues,
  });

  // for suggesion from

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  //  Suggesion Creation function

  const onSubmitFeedback = handleSubmit(async (data) => {
    try {
      const response = await createSuggestion(data, user.userId);

      if (response) {
        enqueueSnackbar('Suggestion submitted successfully', { variant: 'success' });

        navigate('/dashboard');
      } else {
        enqueueSnackbar('Failed to create Suggestion', { variant: 'error' });
      }
    } catch (error) {
      // Handle errors here if necessary
      console.error('Error submitting Suggestion :', error);
      enqueueSnackbar('An error occurred while creating Suggestion', { variant: 'error' });
    }
  });

  const { candidates: candidateList } = useGetCandidates();

  const currentCandidateId = user.userId;

  const UserCandidateArr =
    candidateList?.data?.filter((role) => role.userId > currentCandidateId) || [];

  const CandidateData = UserCandidateArr.map((list) => ({
    value: list?.User?.userId,
    label: list?.User?.UserProfile?.firstName,
  }));

  const CandidateDataForOptions = CandidateData.map((option) => option.value);

  const options = ["Job Transfer Request"];

  const handleSelect = (selectedOption) => {
    console.log(selectedOption);
  };


  return (
    <FormProvider methods={methods} onSubmit={onSubmitFeedback}>
      <Grid>
        <Grid xs={12} md={6}>
          <Card sx={{ pt: 3, px: 3, width: 600 }}>
            <Box sx={{ mb: 5 }}>
              <Stack spacing={2}>
              <RHFAutocomplete
                name="userRoleId"
                label="Complaint Type"
                options={options}
                getOptionLabel={(value) => value}
                onChange={(event, value) => handleSelect(value)}
              />
                <RHFAutocomplete
                  name="userRoleId"
                  label="Candidate"
                  options={CandidateDataForOptions}
                  getOptionLabel={(value) => {
                    const roletype = CandidateData.find((option) => option.value === value);
                    return roletype ? roletype.label : '';
                  }}
                />
                <RHFTextField
                  name="feedbackMessage"
                  label="Enter your complaint here"
                  multiline
                  rows={5}
                  variant="outlined"
                />
                <LoadingButton
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 2,
                    fontWeight: 1,
                    background: '#078dee',
                    width: '100%',
                    fontSize: 15,
                    borderRadius: 50,
                  }}
                >
                  Submit
                </LoadingButton>
              </Stack>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}

// FeedbackNewEditForm.propTypes = {
//   currentVoter: PropTypes.object,
// };
