import Container from '@mui/material/Container';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import WardvolNewEditForm from '../wardvol-new-edit-form';

// ----------------------------------------------------------------------

export default function WardvolCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Create a New Trip"
        links={[
        
          // {
          //   name: 'Wardvol ',
          //   href: paths.dashboard.wardvol.root,
          // },
          { name: 'New Trip' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      <WardvolNewEditForm />
    </Container>
  );
}
