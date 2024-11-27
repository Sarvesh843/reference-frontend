import Container from '@mui/material/Container';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import AmbulanceTripNewEditForm from '../ambulance-trip-new-edit-form';

// ----------------------------------------------------------------------

export default function WardvolCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Ambulance Book"
        links={[
        
          // {
          //   name: 'Wardvol ',
          //   href: paths.dashboard.wardvol.root,
          // },
          { name: 'New Book' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />  
      <AmbulanceTripNewEditForm />
    </Container>
  );
}
