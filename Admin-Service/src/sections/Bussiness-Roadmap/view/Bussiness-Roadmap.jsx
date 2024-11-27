// import { Link } from 'react-router-dom';
import {useState,useCallback} from 'react'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Tab, Tabs, useTheme, tabsClasses } from '@mui/material';

import SvgColor from 'src/components/svg-color';

import BusinessForLarge from '../bussiness-for-larg';
import BussinessForSmall from '../bussiness-for-small';
import BusinessCareerHero from '../businessCareer-hero'
import BussinessForMedium from '../bussiness-for-meduim';
import BussinessLoan from '../buisnessloan'
import Attplfeatures from '../attpl-feature'
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import FireTruckIcon from '@mui/icons-material/FireTruck';
// import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

export default function BussinessRoadmap() {
  const theme = useTheme();
  const [currentTab, setCurrentTab] = useState('small-scale-businesses');

 
  const icon = (name) => (
    <SvgColor src={`/assets/images/business/${name}.svg`}/>
  );

  const TABS = [
    {
      value: 'attplfeature',
      label: 'Attpl Service',
      icon:icon('small-Business')
    },
    {
      value: 'loan',
      label: 'Loan',
      icon:icon('Loan')
    },
   
    {
      value: 'small-scale-businesses',
      label: 'Small Scale Businesses',
      icon:icon('small-Business')
      
    },
    {
      value: 'medium-scale-businesses',
      label: 'Medium Scale Businesses',
      icon:icon('Medium-Business')
    },
    {
      value: 'large-scale-businesses',
      label: 'Large Scale Businesses',
      icon:icon('Big-Business')
    },
   
    // {
    //   value: 'candidatelist',
    //   label: 'Nominated Candidate',
    //   icon: <Box component="img" src='/assets/icons/menuicons/Candidate 1.svg' />,
    // },
  ];
  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);

  return (
    <>
    <BusinessCareerHero currentTab={currentTab}/>
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
              '& .MuiTabs-scrollButtons': { // Styles for scroll buttons
                color: theme.palette.primary.main, // Change color of scroll buttons
              },
            }}
          >
            {TABS.map((tab) =>
              (tab.value !== 'candidate' && tab.value !== 'editcandidate') ||
              tab.value === 'candidate' ||
              tab.value === 'editcandidate' ? (
                <Tab key={tab.value} value={tab.value} sx={{
                  color: theme.palette.primary.main, // Change the text color to red (you can use any valid CSS color here)
                }} icon={tab.icon} label={tab.label} />
              ) : null
            )}

          </Tabs>
          {currentTab === 'small-scale-businesses' && <BussinessForSmall/>}

{currentTab === 'medium-scale-businesses' && <BussinessForMedium/>}

{currentTab === 'large-scale-businesses' && <BusinessForLarge />}
{currentTab === 'loan' &&<BussinessLoan/>}
{currentTab === 'attplfeature' &&<Attplfeatures/>}
       
</Box>
      </Container>
    </>
  );
}


// {cardsData.map((card) => (
//   <Grid item key={card.id} xs={10} sm={8} md={4} lg={3} sx={{
//     borderRadius: "20px",
//     boxShadow: '0px 0px 7px 2px rgba(0,0,0,0.15)',
//     padding: "0 !important",
//     margin: "0 !important"
//   }}>
//     <Link to={card.navigate} target='_blank' style={{ textDecoration: "none", textAlign: "center",  }}>
//       <Card sx={{ height: 320, display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center"}} >
//         <CardContent >
//           <Box component="img" src={card.path} alt={card.title} />
          
//           {/* <Typography variant="h5" >
//             {card.title}
//           </Typography> */}

//           <Typography variant="body2" color="textSecondary" sx={{mt: 5}} >
//           {card.description}
//           </Typography>
//         </CardContent>
//       </Card>
//     </Link>
//   </Grid>
// ))}