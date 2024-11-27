// import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Typography } from '@mui/material';

// import { _appFeatured } from 'src/_mock';
import { useAuthContext } from 'src/auth/hooks';
import { ATTPL_LS_HOST_API } from "src/config-global";
import { SeoIllustration } from 'src/assets/illustrations';

import { useSettingsContext } from 'src/components/settings';

import Footer from 'src/sections/overview/appVoter/app-voter';

import AppWelcome from '../app-welcome';
import AppOverviewNews from '../app-voter-news';

// import { Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function OverviewAppView() {
  const { user } = useAuthContext();

  const handleWatchButtonClick = () => {
    window.open('https://www.youtube.com/@attplgroup', '_blank');
  };
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography
        sx={{
          p: 2,
          borderRadius: "5px",
          boxShadow: "0px 0px 7px 2px rgba(0,0,0,0.1)",
          mb: 1
        }}>
        This app is not affiliated with, endorsed by, or associated with any government entity.
        The information provided in this app is for general informational purposes only and is not intended to serve as a source of official government information.
        <Button
        sx={{ml:1}}
          href={`${ATTPL_LS_HOST_API}/disclaimer`}>
          For more info, click here
        </Button>
      </Typography>

      <Grid container spacing={4} sx={{ mt: 1 }} >
        <Grid xs={12} md={12} height={450} >
          <AppWelcome
            title={`Welcome back 👋 \n ${user?.UserProfile === null || user?.UserProfile?.firstName === null ? user?.phone : user?.UserProfile?.firstName}`}
            headertitle="ATTPL EMS FEATURES"
            description="See Our All Features Explained in our short Video"
            img={<SeoIllustration />}
            action={
              <Button sx={{ width: "50%", height: "45px" }} variant="contained" color="primary" onClick={handleWatchButtonClick}>
                Watch
              </Button>
            }
          />
          <AppOverviewNews />

          <Footer />
        </Grid>

      </Grid>


    </Container>
  );
}
