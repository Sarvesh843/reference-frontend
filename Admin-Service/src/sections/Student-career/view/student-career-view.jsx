// import { Link } from 'react-router-dom';
import { useState, useCallback } from 'react';

import { Box } from '@mui/system';
import {  Tab, Tabs,useTheme, Container, tabsClasses } from '@mui/material';

import SvgColor from 'src/components/svg-color';

import HealthCareer from './HealthCareer';
import StudentGuide from './studentGuide';
import DigitalLibrary from './digitalLibrary';
import TechnicalCareer from './TechnicalCareer';
import StudentCareerBanner from './StudentBanner';
import PublicServiceCareer from './PublicServiceCareer';


export default function StudentCareer() {
  const theme = useTheme();
  const [currentTab, setCurrentTab] = useState('studentGuide');

  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);

  const icon = (name) => (
    <SvgColor src={`/assets/icons/menuicons/${name}.svg`}/>
  );


  const TABS = [

    {
      value: 'studentGuide',
      label: 'Student Guide',
      icon:icon('Profile')
    },
     {
      value: 'digitalLibrary',
      label: 'Digital Library',
      icon:icon('Profile')
    },
    {
      value: 'technicalCareers',
      label: 'Technical Careers',
      icon:icon('Profile')
    },
    {
      value: 'publicservicecareers',
      label: 'Public Service Careers',
      icon:icon('Ward')
    },
    {
      value: 'healthcarecareers',
      label: 'Medical Careers',
      icon:icon('Booth')
    },
    // {
    //   value: 'creativecareers',
    //   label: 'Creative Careers',
    //   icon:  icon:icon('Booth'),
    // },
  ];

  return (
    <>
      <StudentCareerBanner />

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
              pl: 3,
              pb: 1,
              borderRadius: 1,
              // position: 'absolute',
              bgcolor: 'background.paper',
              [`& .${tabsClasses.flexContainer}`]: {
                pr: { md: 3 },
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
            {TABS.map((tab) => (
              <Tab key={tab.value} value={tab.value} icon={tab.icon} sx={{
                color: theme.palette.primary.main, // Change the text color to red (you can use any valid CSS color here)
              }} label={tab.label} />
            ))}
          </Tabs>

          {currentTab === "technicalCareers" && <TechnicalCareer/>}

          {currentTab === "publicservicecareers" && <PublicServiceCareer/>}

          {currentTab === "healthcarecareers" && <HealthCareer/>}

          {currentTab === "studentGuide" && <StudentGuide/>}

          {currentTab === "digitalLibrary" && <DigitalLibrary/>}        

        </Box>
      </Container>
    </>
  );
}
