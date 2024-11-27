import React from 'react';
import { Link } from 'react-router-dom';

import { Box } from '@mui/system';
import { Card, Grid, CardMedia, Typography, CardContent } from '@mui/material';

export default function HealthCareer() {
  const cardsData = [
    {
      id: 13,
      title: 'Aakash Digital - NEET',
      description:
        'Provides NEET preparation materials, live classes, recorded lectures, and practice tests.',
      navigate: 'https://digital.aakash.ac.in',
      icon: 5,
      path: '/assets/images/studentcareer/tech/Aakash Digital - NEET.png',
    },
    {
      id: 7,
      title: 'Embibe - NEET',
      description:
        'Offers NEET preparation materials, mock tests, study plans, and personalized feedback.',
      navigate: 'https://www.embibe.com/exams/neet',
      icon: 5,
      path: '/assets/images/studentcareer/tech/Embibe - NEET.png',
    },
    {
      id: 8,
      title: 'NTA NEET Official Website',
      description:
        'Provides information about the NEET exam, including syllabus, exam dates, and official notifications.',
      navigate: 'https://neet.nta.nic.in/',
      icon: 5,
      path: '/assets/images/studentcareer/tech/NTA NEET Official Website.png',
    },
  ];

  return (
    <Grid container sx={{ mt: 2, gridGap: 24, justifyContent: "space-evenly" }}>
      {cardsData.map((card) => (

        <Grid item key={card.id} xs={12} sm={8} md={4} lg={3} sx={{
          borderRadius: "20px",
          // border: "1px solid red", 
          // boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.1)',
          boxShadow: '0px 0px 7px 2px rgba(0,0,0,0.15)',
          padding: "0 !important",
          margin: "0 !important",
          transition: 'transform 0.4s ease-in', // Add transition for smooth scaling
          '&:hover': {
            transform: {xs:'scale(1)',md:'scale(1.05)'}, // Scale the grid item on hover
          },
        }}
        >
          <Link to={card.navigate} target='_blank' style={{ textDecoration: "none", textAlign: "center", height: "100%", width: "100%" }}>
            <Card sx={{ height: "100%", width: "100%" }}>
              <CardMedia sx={{ p: 1 }}>
                <Box component="img" src={card.path} alt={card.title} />
              </CardMedia>
              <CardContent sx={{pt:1}}>
                {/* <Typography variant="h5" >
                  {card.title}
                </Typography> */}
                <Typography variant="body2" color="textSecondary"   sx={{
                     display: '-webkit-box',
                     WebkitLineClamp: {xs:3,md:2},
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
  );
}
