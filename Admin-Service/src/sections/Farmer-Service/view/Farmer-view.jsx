import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Tab, Tabs, useTheme, tabsClasses } from '@mui/material';

import SvgColor from 'src/components/svg-color';

import FarmerHero from '../farmer-hero';
import FarmerSeeds from '../farmer-seeds-view';
import FarmerMachines from '../farmer-machines-view';
import FarmerMarketPlace from '../farmer-market-place';

const icon = (name) => (
  <SvgColor src={`/assets/images/FarmerLabour/${name}.svg`}/>
);

// ----------------------------------------------------------------------

const TABS = [
  {
    value: 'farmerseeds',
    label: 'Farmer Guide',
    icon:icon("Farmerseeds")
  },
  {
    value: 'farmermarket',
    label: 'Farmer Marketplace',
    icon:icon("FarmerMarket")
  },
  {
    value: 'farmermachines',
    label: 'Agricultural Equipments',
    icon:icon("Tools")
  },
  // {
  //   value: 'candidatelist',
  //   label: 'Nominated Candidate',
  //   icon: <Box component="img" src='/assets/icons/menuicons/Candidate 1.svg' />,
  // },
];

export default function FarmerServiceView() {
  const theme = useTheme();

  const [currentTab, setCurrentTab] = useState('farmerseeds');

  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);

  return (
    <>
      <FarmerHero currentTab={currentTab} />

      <Container
        sx={{
          pl: 2,
          pb: 10,
          pt: { xs: 4, md: 5 },
          position: 'relative',
        }}
      >
        <Box
          gap={2}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(1, 1fr)',
          }}
        >
          <Tabs
            value={currentTab}
            onChange={handleChangeTab}
            sx={{
              width: 1,
              bottom: 0,
              zIndex: 9,
              pl: { xs: 0, md: 3 },
              pb: 1,
              borderRadius: 1,
              // position: 'absolute',
              bgcolor: 'background.paper',
              [`& .${tabsClasses.flexContainer}`]: {
                // pr: { md: 3 },
                justifyContent: {
                  sm: 'center',
                  md: 'flex-start',
                },
              },
              '& .MuiTabs-scrollButtons': { // Styles for scroll buttons
                color: theme.palette.primary.main, // Change color of scroll buttons
              },
            }}
          >
            {TABS.map((tab) =>
              (tab.value !== 'candidate' && tab.value !== 'editcandidate') ||
                tab.value === 'candidate' ||
                tab.value === 'editcandidate' ? (
                <Tab key={tab.value} value={tab.value} icon={tab.icon} sx={{
                  color: theme.palette.primary.main, // Change the text color to red (you can use any valid CSS color here)
                }} label={tab.label} />
              ) : null
            )}
          </Tabs>

          {/* </Card> */}

          {currentTab === 'farmerseeds' && <FarmerSeeds />}

          {currentTab === 'farmermarket' && <FarmerMarketPlace />}

          {currentTab === 'farmermachines' && <FarmerMachines />}

          {/* {currentTab === 'candidatelist' && <VoterCandidateList />} */}

          {/* <VoterUserList /> */}
        </Box>
      </Container>
    </>
  );
}
