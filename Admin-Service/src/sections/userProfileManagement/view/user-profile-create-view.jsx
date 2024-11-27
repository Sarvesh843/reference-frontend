import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import UserProfileRegisterView from '../user-profile-new-register-form';

// ----------------------------------------------------------------------

export default function RoleCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Create a New User"
        links={[
          {
            name: 'User',
            href: paths.dashboard.userProfileManagement.root,
          },
          { name: 'New User' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      <UserProfileRegisterView />
    </Container>
  );
}
