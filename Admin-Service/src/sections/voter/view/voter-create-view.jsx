import { Grid } from '@mui/material';
import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useAuthContext } from 'src/auth/hooks';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import VoterReferralBanner from 'src/sections/VoterReferal/Voter-referral-hero';
// import VoterReferalNewEditForm from 'src/sections/VoterReferal/voter-referal-edit-form';
import BankingInviteFriends from 'src/sections/VoterReferal/view/banking-invite-friends';

import VoterNewEditForm from '../voter-new-edit-form';



// ----------------------------------------------------------------------

export default function VoterCreateView() {
  const settings = useSettingsContext();
  const { user } = useAuthContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'} >
      {user.userRoleId !== 9 &&
        <>
          <CustomBreadcrumbs
            heading="Add New Voter"
            links={[
              // {
              //   name: 'Dashboard',
              //   href: paths.dashboard.root,
              // },
              {
                name: 'voter',
                href: paths.dashboard.voter.root,
              },
              { name: 'New voter' },
            ]}
            sx={{
              mb: { xs: 3, md: 5 },
            }}
          />

          <VoterNewEditForm />
        </>
      }

      {user.userRoleId === 9 &&
        <>
          <VoterReferralBanner />
          <Grid xs={12} md={8} 
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            '@media (max-width:900px)': {
              flexDirection: 'column'
            },
          }}
          >
            <VoterNewEditForm />
            {/* <VoterReferalNewEditForm /> */}
            <BankingInviteFriends />
          </Grid>
        </>
      }
    </Container>
  );
}
