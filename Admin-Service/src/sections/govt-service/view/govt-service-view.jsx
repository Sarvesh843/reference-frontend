import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Tab, Tabs, tabsClasses } from '@mui/material';

import GovtHero from '../govt-hero';
import Complaint from '../Complaint';
import JobTransfer from '../Job-Transfer';
import ProblemNetaJi from '../Problem-Netaji';

// ----------------------------------------------------------------------

const TABS = [
  {
    value: 'complaint',
    label: 'Complaint',
    icon: <Box component="img" src='/assets/icons/menuicons/Profile.svg' />,
  },
  // {
  //   value: 'jobtransfer',
  //   label: 'Job Transfer',
  //   icon: <Box component="img" src='/assets/icons/menuicons/Ward.svg' />,
  // },
  // {
  //   value: 'problemnetaji',
  //   label: 'Problem Neta ji',
  //   icon: <Box component="img" src='/assets/icons/menuicons/Booth.svg' />,
  // },
  // {
  //   value: 'candidatelist',
  //   label: 'Nominated Candidate',
  //   icon: <Box component="img" src='/assets/icons/menuicons/Candidate 1.svg' />,
  // },
];

export default function GovtServiceView() {
  const [currentTab, setCurrentTab] = useState('complaint');

  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);

  return (
    <>
      <GovtHero currentTab={currentTab}/>

      <Container
        sx={{
          pl:2,
          pb: 10,
          pt: { xs: 10, md: 10 },
          position: 'relative',
        }}
      >
        <Box
          gap={10}
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
              pl:{xs:0, md:3},
              pb:1,
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
            }}
          >
            {TABS.map((tab) =>
              (tab.value !== 'candidate' && tab.value !== 'editcandidate') ||
              tab.value === 'candidate' ||
              tab.value === 'editcandidate' ? (
                <Tab key={tab.value} value={tab.value} icon={tab.icon} label={tab.label} />
              ) : null
            )}
          </Tabs>

          

          {currentTab === 'complaint' && <Complaint />}

          {/* {currentTab === 'jobtransfer' && <JobTransfer />} */}

          {/* {currentTab === 'problemnetaji' && <ProblemNetaJi />} */}

       
        </Box>
      </Container>
    </>
  );
}
