import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import VehicleNewEditForm from '../vehicle-new-edit-form';

// ----------------------------------------------------------------------

export default function VehicleCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Create a new Vehicle"
        links={[
        
          {
            name: 'Vehicle ',
            href: paths.dashboard.vehicle.root,
          },
          { name: 'New Vehicle' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      <VehicleNewEditForm />
    </Container>
  );
}
