import PropTypes from 'prop-types';

import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useGetAppointment } from 'src/api/appointment';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import AppointmentNewEditForm from '../Appointment-new-edit-form';


// ----------------------------------------------------------------------

export default function AppointmentEditView({ id }) {
  const settings = useSettingsContext();
  
  const { appointment: currentappointment } =useGetAppointment(id)
  console.log(currentappointment)
  // const { party: currentParty } = useGetParty(id);

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit Appointment  Details"
        links={[
          {
            name: 'Appointment  Management',
            href: paths.dashboard.Appointment.root,
          },
          { name: currentappointment?.data.Appointment },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <AppointmentNewEditForm currentappointment={currentappointment} />
    </Container>
  );
}

AppointmentEditView.propTypes = {
  id: PropTypes.string,
};
