import { useState, useCallback } from 'react';

import { Box, Tab, Tabs, useTheme, Container, tabsClasses } from '@mui/material';

import SvgColor from 'src/components/svg-color';

import WomanFinanceEmpowerment from '../woman_finance';
import WomanEducationEmpowerment from '../woman_education';
import WomanEmpowermentLegalAndAdvocacy from '../woman_legal';
import WomanEmpowermentBanner from '../woman_empowerment_banner';
import WomanEmpowermentReproductive from '../woman_reproductive';
import WomanEmpowermentLeadershipAndMentor from '../woman_leadership';

export default function WomanEmpourment() {

  const theme = useTheme();

  const [currentTab, setCurrentTab] = useState('education');

  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);
  
  const icon = (name) => (
    <SvgColor src={`/assets/images/womanEmpowerment/icon/${name}.svg`}/>
  );

  const TABS = [

    {
      value: 'education',
      label: 'Education & Training',
      icon:icon('Education')
    },
    {
      value: 'finance',
      label: 'Financial & Economic',
      icon:icon('Finance')
    },
    {
      value: 'reproductive',
      label: 'Healthcare & Reproductive Rights',
      icon:icon('Healthcare')
    },
    {
      value: 'legal',
      label: 'Legal Aid & Advocacy:',
      icon:icon('LegalAid')
    },
    {
      value: 'leadership',
      label: 'Leadership & Mentorship',
      icon:icon('Leadership')
    },
  ];

  return (
    <>
      <WomanEmpowermentBanner />

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
              <Tab key={tab.value} value={tab.value} icon={tab.icon} label={tab.label} 
              sx={{
                color: theme.palette.primary.main, // Change the text color to red (you can use any valid CSS color here)
              }} />
            ))}
          </Tabs>

          {currentTab === "education" && <WomanEducationEmpowerment />}
          {currentTab === "finance" && <WomanFinanceEmpowerment />}
          {currentTab === "reproductive" && <WomanEmpowermentReproductive />}
          {currentTab === "legal" && <WomanEmpowermentLegalAndAdvocacy />}
          {currentTab === "leadership" && <WomanEmpowermentLeadershipAndMentor />}

        </Box>
      </Container>
    </>

  );
}

