import React from 'react';
// import { Link } from 'react-router-dom';

import { Box, Grid, Card, CardMedia, Typography, CardContent, CardActionArea } from '@mui/material';

import GovSchemeHero from '../govScheme-hero';

export default function GovtSchemeView() {
  const cardsData = [
    {
      id: 1,
      title: 'Swachh Bharat Abhiyan',
      description: `Swachh Bharat Mission, Swachh Bharat Abhiyan, or Clean India Mission is a country-wide campaign initiated by the Government of India `,
      navigate: `https://www.mygov.in/`,
      path: '/assets/images/GovernmentScheme/Swach  Bharat.png',
    },
    {
      id: 2,
      title: 'Digital India',
      description: 'It aims to ensure that government services are available to citizens electronically and people get benefits from the latest information and communication technology',
      navigate: `https://www.digitalindia.gov.in/`,
      path: '/assets/images/GovernmentScheme/Digital India.png',
    },
    {
      id: 3,
      title: 'Namami Gange Programme',
      description:
        'National Ganga Plan was launched in 1985. Integrates the efforts to clean and protect River Ganga in a comprehensive manner.',
      navigate: `https://www.pmindia.gov.in/en/government_tr_rec/namami-gange/`,
      path: '/assets/images/GovernmentScheme/Namami gange.png',
    },
    {
      id: 4,
      title: 'PM Adarsh Gram Yojana',
      description:
        'Integrated development of Schedule Caste majority villages.',
      navigate: `https://pmagy.gov.in/`,
      path: '/assets/images/GovernmentScheme/Pm Adarsh Gram yojana.png',
    },
    {
      id: 5,
      title: 'Ayushman Bharat Yojana',
      description:
        'Ayushman Bharat National Health Protection Scheme (AB-NHPS) aims to provide free access to healthcare for 50 crore people in the country.',
      navigate: `https://abdm.gov.in/`,
      path: '/assets/images/GovernmentScheme/Ayushman Bharat.png',
    },
    {
      id: 6,
      title: 'World Class Institutions Scheme',
      description:
        'To enable 10 private and public institutions to attain world class academic and research facilities. Aim is to create Institutes of Eminence.',
      navigate: `https://www.education.gov.in/`,
      path: '/assets/images/GovernmentScheme/World Class Institution.png',
    },
    {
      id: 7,
      title: 'PM Ujjwala Yojana',
      description:
        'Launched to provide free LPG connections to women from below poverty line families.[45] While the scheme mainly addresses distribution of cylinders, their usage has been in question.',
      navigate: `https://www.pmuy.gov.in/`,
      path: '/assets/images/GovernmentScheme/PM Ujjwala Yojana.png',
    },
    {
      id: 8,
      title: 'Smart Cities Mission',
      description:
        'Redevelopment, retrofitting, greenfield development of 100 cities.[58][59] Large diversity in success of implementation.',
      navigate: `https://smartcities.gov.in/`,
      path: '/assets/images/GovernmentScheme/Smart Cities Mission.png',
    },
    {
      id: 9,
      title: 'Atal Pension Yojana',
      description:
        'A pension program that allows people to make voluntary contributions within a certain range with a matching government contribution to receive pension in the future. By September 2021, non-metros subscribers numbered 3,77,00,000.',
      navigate: `https://www.india.gov.in/spotlight/atal-pension-yojana`,
      path: '/assets/images/GovernmentScheme/Atal Pension Yojana.png',
    },
    {
      id: 10,
      title: 'Start Up India',
      description:
        'This portal provides information on agricultural technologies, machinery, best practices, and expert advice to farmers in India.',
      navigate: `https://www.startupindia.gov.in/`,
      path: '/assets/images/GovernmentScheme/Startup India.png',
    },
  ];

  const handleCardClick = (id) => {
    window.open(cardsData.find(card => card.id === id).navigate, '_blank');
  };

  return (
    <>
      <GovSchemeHero />
      <Box>
        {/* <Typography
        variant="h4"
        sx={{ color: '#078dee', borderBottom: '2.5px solid #078dee', width: 'fit-content' }}
      >
        Farmer Seeds
      </Typography> */}
        <Grid container sx={{ mt: 10, gridGap: 16, justifyContent: 'space-evenly' }}>
          {cardsData.map((card) => (
            <Grid
              item
              key={card.id}
              xs={10}
              sm={8}
              md={4}
              lg={3}
              sx={{
                borderRadius: '20px',
                // boxShadow: '1px 1px 3px 1px rgba(0, 0, 0, 0.3)',
                boxShadow: '0px 0px 7px 2px rgba(0,0,0,0.15)',
                padding: '0 !important',
                margin: '0 !important',
              }}
            >
              <CardActionArea onClick={() => handleCardClick(card.id)} sx={{ textDecoration: "none", textAlign: "center", height: "100%", width: "100%", }}>

                <Card sx={{ height: '100%', width: '100%', borderRadius: '20px', }}>
                  <CardMedia sx={{ p: 1, }}>
                    <Box component="img" src={card.path} alt={card.title}  />
                  </CardMedia>
                  <CardContent>
                    {/* <Typography
                      variant="h5"
                      sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
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
                      }}
                    >
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>

              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
