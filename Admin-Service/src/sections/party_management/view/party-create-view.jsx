import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import PartyNewEditForm from '../party-new-edit-form';

// ----------------------------------------------------------------------

export default function PartyCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Create a new Party"
        links={[
          {
            name: 'Party Management',
            href: paths.dashboard.party.root,
          },
          { name: 'New Party' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      <PartyNewEditForm />
    </Container>
  );
}
