import * as Yup from 'yup';
import { m } from 'framer-motion';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { keyframes } from '@emotion/react';
import { RouterLink } from 'src/routes/components';
// import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo, useEffect, useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useNavigate } from 'react-router-dom';
import { FormControl, InputLabel, Select, MenuItem, Box ,Button,Link} from '@mui/material';
// import { deleteFileFromAWSS3, uploadclaimFileInAWSS3 } from 'src/utils/aws-s3-file-handler';
import { useAuthContext } from 'src/auth/hooks';

import { TIME } from 'src/_mock';
import Container from '@mui/material/Container';

// import { useGetElections } from 'src/api/election';
// import { useGetPartyAlliances } from 'src/api/appointment';
import {
  createAppointment,
  updateAppointment,
  useGetAppointmentsCandidate,
} from 'src/api/appointment';
import { useGetUsers } from 'src/api/user';
import { useSnackbar } from 'src/components/snackbar';
import FormProvider, { RHFTextField, RHFAutocomplete } from 'src/components/hook-form';
import { useSettingsContext } from 'src/components/settings';
import AppointmentHero from '../Appointment-hero';

// ----------------------------------------------------------------------


// Define keyframes for the floating effect
const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

// Custom styles for the cards
const cardStyles = {
  p: 1.5,
  boxShadow: '0px 0px 7px 2px rgba(0,0,0,0.15)',
  marginBottom: { xs: 2, md: 0 },
  height: { xs: '240px', md: '260px' },
  width: { xs: '220px', sm: '340px' },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};



export default function AppointmentCard({ currentappointment }) {
  
    const settings = useSettingsContext();

 


  return (
    <>
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <AppointmentHero/>
     
      <Box sx={{ display: 'flex', gap: '20px', justifyContent: 'center' ,flexWrap:'wrap'}}>
      {/* <Link href="list/?status=open" variant="body2" style={{ textDecoration: 'none' }}>
        <Card sx={{ ...cardStyles, backgroundColor: '#87CEFA',color:"#fff" }}>
          <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
              Open 
            </Typography>
            <Typography variant="body1">
              Total open appointments 
            </Typography>
            <Button variant="outlined" color="praimary" sx={{ mt: 2 }}>
              View appointments 
            </Button>
          </Box>
        </Card>
      </Link> */}
      {/* <Link href="list/?status=open" variant="body2" style={{ textDecoration: 'none' }}> */}
        <Card  component={RouterLink} 
  to="/dashboard/Appointment/list/?status=open" sx={{ ...cardStyles, backgroundColor: '#002244',color:"#fff" }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Open
            </Typography>
            <Typography variant="body1">
            Total open appointments.
            </Typography>
            {/* <Button variant="outlined" color="primary" sx={{ mt: 2 }}> */}
            View appointments 
            {/* </Button> */}
          </Box>
        </Card>
      {/* </Link>
      <Link href="list/?status=in-progres" variant="body2" style={{ textDecoration: 'none' }}> */}
        <Card    component={RouterLink} 
  to="/dashboard/Appointment/list/?status=in-progres" sx={{ ...cardStyles, backgroundColor: '#FEBE10',color:"#fff" }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Pending
            </Typography>
            <Typography variant="body1">
              You have pending appointments to complete.
            </Typography>
            {/* <Button variant="outlined"  sx={{ mt: 2 ,color:'black',border:'1px solid black'}}>
              View Tasks
            </Button> */}
          </Box>
        </Card>
      
      <Link  component={RouterLink} 
  to="/dashboard/Appointment/list/?status=close" variant="body2" style={{ textDecoration: 'none' }}>
        <Card sx={{ ...cardStyles, backgroundColor: '#002244',color:"#fff" }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
            Closed
            </Typography>
            <Typography variant="body1">
            All your appointments are completed View  History.
            </Typography>
            {/* <Button variant="outlined" color="primary" sx={{ mt: 2 }}> */}
            {/* View  History */}
            {/* </Button> */}
          </Box>
        </Card>
      </Link>
      {/* <Link href="list/?status=close" variant="body2"  style={{ textDecoration: 'none' }}>
        <Card sx={{ ...cardStyles, backgroundColor: '#87CEFA',color:"#fff" }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Closed
            </Typography>
            <Typography variant="body1">
              All your appointments are completed and closed.
            </Typography>
            <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
              View History
            </Button>
          </Box>
        </Card>
      </Link> */}
    </Box>
    




    </Container>
     {/* <Container> 
     <AppointmentHero/>
    <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Link href="list/?status=open" variant="body2" style={{ textDecoration: 'none' }}>
            <Card sx={{ ...cardStyles, backgroundColor: '#87CEFA', color: '#fff' }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  Open
                </Typography>
                <Typography variant="body1">
                  Total open appointments
                </Typography>
                <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
                  View Appointments
                </Button>
              </Box>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link href="list/?status=in-progress" variant="body2" style={{ textDecoration: 'none' }}>
            <Card sx={{ ...cardStyles, backgroundColor: '#fff', color: 'black' }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  In Progress
                </Typography>
                <Typography variant="body1">
                  You have pending appointments to complete.
                </Typography>
                <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
                  View Tasks
                </Button>
              </Box>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link href="list/?status=closed" variant="body2" style={{ textDecoration: 'none' }}>
            <Card sx={{ ...cardStyles, backgroundColor: '#87CEFA', color: '#fff' }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  Closed
                </Typography>
                <Typography variant="body1">
                  All your appointments are completed and closed.
                </Typography>
                <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
                  View History
                </Button>
              </Box>
            </Card>
          </Link>
        </Grid>
      </Grid>
      </Container>  */}
      
    </>
  );
}

AppointmentCard.propTypes = {
  currentappointment: PropTypes.object,
};















