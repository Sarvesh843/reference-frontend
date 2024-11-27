import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import ClaimNewEditForm from '../claim-new-edit-form';

// ----------------------------------------------------------------------

export default function ClaimCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Create a new Claim"
        links={[
          {
            name: 'Claim Management',
            href: paths.dashboard.claim.root,
          },
          { name: 'New Claim' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      <ClaimNewEditForm />
    </Container>
  );
}
