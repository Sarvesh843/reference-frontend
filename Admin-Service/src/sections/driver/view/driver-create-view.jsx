import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import DriverNewEditForm from '../driver-new-edit-form';

// ----------------------------------------------------------------------

export default function DriverCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Create a new Driver"
        links={[
        
          {
            name: 'Driver ',
            href: paths.dashboard.driver.root,
          },
          { name: 'New Driver' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      <DriverNewEditForm />
    </Container>
  );
}
