import React from 'react';
import { Link } from 'react-router-dom';

import { Box } from '@mui/system';
import { Card, Grid,CardMedia, Typography, CardContent } from '@mui/material';

export default function DigitalLibrary() {
  const studyMaterialProviders = [
    {
      title: "Khan Academy",
      description: "Offers a wide range of courses and educational resources covering various subjects.",
      navigate: "https://www.khanacademy.org/",
      path: "/assets/images/studentcareer/student2/Khan Academy.png" // Khan Academy logo URL
    },
    {
      title: "Duolingo",
      description: "Focuses on language learning through interactive lessons and exercises.",
      navigate: "https://www.duolingo.com/",
      path: "/assets/images/studentcareer/student2/Duolingo.png" // Duolingo logo URL
    },
    {
      title: "Coursera",
      description: "Provides online courses from universities and institutions worldwide.",
      navigate: "https://www.coursera.org/",
      path: "/assets/images/studentcareer/student2/Coursera.png" // Coursera logo URL
    },
    {
      title: "edX",
      description: "Offers online courses from universities and organizations in various disciplines.",
      navigate: "https://www.edx.org/",
      path: "/assets/images/studentcareer/student2/edX.png" // edX logo URL
    },
    {
      title: "Udemy",
      description: "Provides a platform for instructors to offer online courses on diverse topics.",
      navigate: "https://www.udemy.com/",
      path: "/assets/images/studentcareer/student2/Udemy.png" // Udemy logo URL
    },
   
    {
      title: "Codecademy",
      description: "Focuses on coding and programming courses, tutorials, and projects.",
      navigate: "https://www.codecademy.com/",
      path: "/assets/images/studentcareer/student2/Codecademy.png" // Codecademy logo URL
    },
    {
      title: "Quizlet",
      description: "Provides study tools, flashcards, and quizzes for various subjects.",
      navigate: "https://quizlet.com/",
      path: "/assets/images/studentcareer/student2/Quizlet.png" // Quizlet logo URL
    },
    {
      title: "Memrise",
      description: "Offers language learning courses and memory improvement techniques.",
      navigate: "https://www.memrise.com/",
      path: "/assets/images/studentcareer/student2/Memrise.png" // Memrise logo URL
    },
   
  ];
  
  
      
      

  return (
    <Grid container sx={{ mt: 2, gridGap: 24, justifyContent: "space-evenly" }}>
    {studyMaterialProviders.map((card) => (

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
