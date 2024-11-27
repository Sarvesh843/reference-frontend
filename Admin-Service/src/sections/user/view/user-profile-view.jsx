import { useState, useCallback } from 'react';

import Tab from '@mui/material/Tab';
import { Stack } from '@mui/system';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import { Box, FormControlLabel, Switch } from '@mui/material';

import { paths } from 'src/routes/paths';

import { endpoints, puter } from 'src/utils/axios-ums';

import { _userAbout } from 'src/_mock';
import { useAuthContext } from 'src/auth/hooks';
import { useGetVotersDetails } from 'src/api/voter';
import { useGetCandidateDetails } from 'src/api/candidate';

import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';
import { useSnackbar } from 'src/components/snackbar';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import VoterEdit from '../voter-edit';
import ProfileHome from '../profile-home';
import ProfileCover from '../profile-cover';
import CandidateEdit from '../candidate-edit';
import ProfileEdit from '../profile-followers';
import ProfileRefferals from '../profile-refferals';
import UserProfilePercentage from '../user-profile-percentage';

// ----------------------------------------------------------------------

const TABS = [
  {
    value: 'profile',
    label: 'Profile',
    icon: <Box component="img" src="/assets/icons/menuicons/Profile.svg" />,
  },
  {
    value: 'referrals',
    label: 'referrals',
    icon: <Box component="img" src="/assets/icons/menuicons/Profile.svg" />,
  },
  {
    value: 'editprofile',
    label: 'Edit Profile',
    icon: <Box component="img" src="/assets/icons/menuicons/Edit Profile.svg" />,
  },
  {
    value: 'editvoter',
    label: 'Edit voter',
    icon: <Box component="img" src="/assets/icons/menuicons/Edit Voter.svg" />,
  },
  {
    value: 'editcandidate',
    label: 'Edit candidate',
    icon: <Iconify icon="solar:heart-bold" width={24} />,
  },
];
// ----------------------------------------------------------------------

export default function UserProfileView() {
  const { user } = useAuthContext();
const { enqueueSnackbar } = useSnackbar();
  const [check,setcheck]=useState(JSON.parse(localStorage.getItem("togglePayment")))
  const settings = useSettingsContext();
  const roleMappings = {
    1: 'admin',
    2: 'candidate',
    3: 'Candidate Manager',
    4: 'Ward Leader',
    5: 'Booth Leader',
    6: 'Polling Station Leader',
    7: 'Polling Station Volunteer',
    8: 'Driver',
    9: 'Voter',
    11: 'Developer',
  };

  const { voters } = useGetVotersDetails();
  const {
    candidates,
    // candidatesLoading,
    // candidatesError,
    // candidatesValidating,
    // candidatesEmpty
  } = useGetCandidateDetails();
  const [currentTab, setCurrentTab] = useState('profile');

  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);

  async function handlePublishToggleChange(e){
    try{
    const url=endpoints.user.updateTooglePayment;
    const data={
      "showPaymentPage":e.target.checked
    }
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.authToken}`,
    };
    const response = await puter(url,data,headers)
    setcheck(response?.data?.showPaymentPage);
    localStorage.setItem("togglePayment",response?.data?.showPaymentPage)

  }
  catch(error){
    console.error(error);
    enqueueSnackbar('Something went wrong.', { variant: 'error' });
  }
  }
  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Profile"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'User', href: paths.dashboard.user.root },
          { name: user?.userName },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      {/* Profile Percentage Circle */}
      <Stack
    direction={{ xs: "column", sm: "row", md: "row" }}
  sx={{
    display: "flex",
    justifyContent: "space-between",
  }}
>
  <UserProfilePercentage scale="1" />
  {user?.userRoleId===1 &&
  <FormControlLabel
    onChange={(e) => handlePublishToggleChange(e)}
    control={<Switch checked={check} />}
    label="Register Payment Activation"
    sx={{ pl: 3 }}
  />
  }
</Stack>
      <Card
        sx={{
          mb: 3,
          height: 290,
        }}
      >
        <ProfileCover
          role={roleMappings[user?.userRoleId] || ''}
          name={user?.UserProfile?.firstName}
          avatarUrl={user?.UserProfile?.userProfileImageDetails?.preview}
          coverUrl={_userAbout.coverUrl}
          profileName={
            user?.UserProfile === null || user?.UserProfile?.firstName === null
              ? user?.phone
              : user?.UserProfile?.firstName
          }
        />
        <Tabs
          value={currentTab}
          onChange={handleChangeTab}
          sx={{
            width: 1,
            bottom: 0,
            zIndex: 9,
            position: 'absolute',
            bgcolor: 'background.paper',
            [`& .${tabsClasses.flexContainer}`]: {
              pr: { md: 3 },
              justifyContent: {
                sm: 'center',
                md: 'flex-end',
              },
            },
          }}
        >
          {TABS.map((tab) =>
            (tab.value !== 'candidate' && tab.value !== 'editcandidate') ||
            (tab.value === 'candidate' && user?.userRoleId === 2) ||
            (tab.value === 'editcandidate' && user?.userRoleId === 2) ? (
              <Tab key={tab.value} value={tab.value} icon={tab.icon} label={tab.label} />
            ) : null
          )}
        </Tabs>
      </Card>

      {currentTab === 'profile' && <ProfileHome candidates={candidates} voter={voters} />}

      {currentTab === 'referrals' && <ProfileRefferals />}

      {currentTab === 'editprofile' && <ProfileEdit />}

      {currentTab === 'editvoter' && <VoterEdit />}

      {currentTab === 'editcandidate' && <CandidateEdit candidates={candidates} />}
    </Container>
  );
}
