import PropTypes from 'prop-types';

import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useGetTrip } from 'src/api/wardvol'; // Changed to useGetTrip

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import WardvolNewEditForm from '../wardvol-new-edit-form'; // Changed to TripNewEditForm

// ----------------------------------------------------------------------

export default function WardvolEditView({ id }) { // Changed function name to TripEditView
  const settings = useSettingsContext();

  const { trip: currentTrip } = useGetTrip(id); // Changed to useGetTrip
 console.log(currentTrip);
  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit Trip Details" // Changed heading
        links={[
          // { name: 'Dashboard', href: paths.dashboard.root },
          {
            name: 'Trip', // Changed to Trip
            href: paths.dashboard.wardvol.root, // Changed to paths.dashboard.trip.root
          },
          { name: currentTrip?.data.tripId }, // Changed to currentTrip
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <WardvolNewEditForm currentTrip={currentTrip} /> 
    </Container>
  );
}

WardvolEditView.propTypes = {
  id: PropTypes.string,
}; 
