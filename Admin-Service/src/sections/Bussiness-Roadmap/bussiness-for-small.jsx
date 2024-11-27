import { m } from 'framer-motion';
import PropTypes from 'prop-types';
// import { alpha, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import { Box, Grid, Card, CardMedia, Typography, CardContent } from '@mui/material';
// import { bgGradient } from 'src/theme/css';

import { varFade } from 'src/components/animate';
// import { borderRadius } from '@mui/system';
// import { Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function BussinessForSmall({ currentTab }) {
  // const theme = useTheme();
  const cardsData = [
   
    { id: 1, title: 'Entrepreneur India ', description: 'Offers advice, insights, and resources for small business owners and entrepreneurs in India', navigate: 'https://www.entrepreneurindia.com', icon: 5, path: "/assets/images/business/Entreprenuer.png"},

    { id: 2, title: 'MSME Ministry Portal', description: 'Official portal of the Ministry of Micro, Small and Medium Enterprises (MSME) of the Government of India, providing information and support for small businesses', navigate: 'https://msme.gov.in/', icon: 5, path: "/assets/images/business/MSME Ministry Portral.png"},
     
    { id: 3, title: 'Raleigh', description: 'Ready to start your new business in Raleigh?  Let us help!.', navigate: 'https://raleighnc.gov/doing-business/services/small-business-startup-roadmaps', icon: 5, path: "/assets/images/business/Raleigh.png"},
    
    { id: 4, title: 'Wise', description: 'A roadmap to launching your own small business', navigate: 'https://wisecenter.org/small-business-roadmap/', icon: 5, path: "/assets/images/business/WISE.png"  },
    { id: 5, title: 'ResearchGate', description: 'Roadmap for Business Models Definition in Manufacturing Companies.', navigate: 'https://www.researchgate.net/publication/256455661_Roadmap_for_Business_Models_Definition_in_Manufacturing_Companies', icon: 5, path: "/assets/images/business/Researchgate.png"  },
    { id: 6, title: 'Business Startup Kit', description: '70 Small Business Ideas for Anyone Who Wants to Run Their Own Business', navigate: 'https://blog.hubspot.com/sales/small-business-ideas', icon: 5, path: "/assets/images/business/Hubspot.png" },
    { id: 5, title: 'Cascade', description: '7 Business Roadmap Examples To Hit Your Goals', navigate: 'https://www.cascade.app/blog/business-roadmap-examples', icon: 5, path: "/assets/images/business/Cascade.png" },
    { id: 6, title: 'Frontiar Consulting', description: 'How to Develop a Strategic Business Roadmap', navigate: 'https://www.consultfrontier.com/business-strategy/business-roadmap/', icon: 5, path:"/assets/images/business/Frontier Consulting.png" },

    
  ];
  return (
    <Box
      
    >
      <Grid container sx={{ mt: 2, gridGap: 16, justifyContent: "space-evenly" }}>
        {cardsData.map((card) => (
          <Grid item key={card.id} xs={10} sm={8} md={4} lg={3} sx={{
            borderRadius: "20px",
            boxShadow: '0px 0px 7px 2px rgba(0,0,0,0.15)',
            padding: "0 !important",
            margin: "0 !important",
            marginTop: "10px !important"
          }}
          >
            <Link to={card.navigate} target='_blank' style={{ textDecoration: "none", textAlign: "center", height: "100%", width: "100%" }}>
              <Card sx={{ height: "100%", width: "100%" }}>
                <CardMedia sx={{ p: 2 }}>
                  <Box component="img" src={card.path} alt={card.title} />
                </CardMedia>
                <CardContent>
                  {/* <Typography variant="h5">
                    {card.title}
                  </Typography> */}
                  <Typography 
                  variant="body2"
                  color="textSecondary"
                  sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}>
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
      {/* <Container component={MotionContainer}>
        <Box
          sx={{
            bottom: { md: 80 },
            position: { md: 'absolute' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <div>
            <Typography
              text={currentTab === 'candidatelist' ? "Nominated" : "Your"}
              sx={{ color: 'primary.main',fontSize: '2.8rem',fontWeight:800,textShadow:"5px 5px 18px 8px rgba(0,0,0)" }} variants={varFade().inRight}
            >
              {currentTab === 'candidatelist' ? "Nominated" : "Your"}
            <br />
            <Stack spacing={2} display="inline-flex" direction="row" sx={{ color: 'common.white' }}>
              <Typography sx={{ color: 'primary.main',fontSize: '2.8rem',fontWeight:800, mr:"auto" }} text={currentTab === 'electiondetails' ? "Election" : ""} >{currentTab === 'electiondetails' ? "Election" : ""}</Typography>
              <Typography sx={{ color: 'primary.main',fontSize: '2.8rem',fontWeight:800, mr:"auto" }} text={currentTab === 'wardetails' ? "Ward" : ""} >{currentTab === 'wardetails' ? "Ward" : ""}</Typography>
              <Typography sx={{ color: 'primary.main',fontSize: '2.8rem',fontWeight:800, mr:"auto" }} text={currentTab === 'boothdetails' ? "Booth" : ""} >{currentTab === 'boothdetails' ? "Booth" : ""}</Typography>
              <Typography sx={{ color: 'primary.main',fontSize: '2.8rem',fontWeight:800, mr:"auto" }} text={currentTab === 'candidatelist' ? "Candidate" : ""} >{currentTab === 'candidatelist' ? "Candidate" : ""}</Typography>
            </Stack>
            </Typography>
          </div>
        </Box>
      </Container> */}
            {/* <TextAnimate text={currentTab === 'electiondetails' ? "Election" : ""} />
            <TextAnimate text={currentTab === 'wardetails' ? "Ward" : ""} />
            <TextAnimate text={currentTab === 'boothdetails' ? "Booth" : ""} />
            <TextAnimate text={currentTab === 'candidatelist' ? "Candidate" : ""} /> */}
    </Box>
  );
}

BussinessForSmall.propTypes = {
  currentTab: PropTypes.string,
};

// ----------------------------------------------------------------------

function TextAnimate({ text, variants, sx, ...other }) {
  return (
    <Box
      component={m.div}
      sx={{
        typography: 'h2',
        overflow: 'hidden',
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      
      {text.split('').map((letter, index) => (
        <m.span key={index} variants={variants || varFade().inUp}>
          {letter}
        </m.span>
      ))}
    </Box>
  );
}

TextAnimate.propTypes = {
  sx: PropTypes.object,
  text: PropTypes.string,
  variants: PropTypes.object,
  currentTab: PropTypes.string,
};


