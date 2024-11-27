import React from 'react';
import { Link } from 'react-router-dom';

import { Box } from '@mui/system';
import { Card, Grid, CardMedia, Typography, CardContent } from '@mui/material';

export default function WomanEducation() {
  const cardsData = [
    {
      id: 1,
      title: "Girls Who Code",
      description: "Coding education for girls, closing the tech gender gap.",
      path: "/assets/images/womanEmpowerment/1.png",
      navigate: "https://girlswhocode.com/",
    },
    {
      id: 2,
      title: "WE Can Code",
      description: "Empowering women in tech through bootcamps and training.",
      path: "/assets/images/womanEmpowerment/2.png",
      navigate: "https://wecancodeit.org/",
    },
    {
      id: 3,
      title: "Global Fund for Women",
      description: "Training and capacity building for women activists worldwide.",
      path: "/assets/images/womanEmpowerment/GlobalfundForWoman.png",
      navigate: "https://www.globalfundforwomen.org/",
    },
    {
      id: 4,
      title: "AnitaB.org",
      description: "Tech Journey programs advancing women in tech roles.",
      path: "/assets/images/womanEmpowerment/Tech Journey programs.png",
      navigate: "https://anitab.org/",
    },
    {
      id: 5,
      title: "EmpowHER India",
      description: "Vocational training empowering women in India for economic independence.",
      path: "/assets/images/womanEmpowerment/Empower India.png",
      navigate: "https://www.investindia.gov.in/team-india-blogs/skill-development-prerequisite-women-empowerment",
    },     
    {
      id: 6,
      title: "Women Who Code",
      description: "Supporting women in tech with networking, resources, and skill-building opportunities.",
      path: "/assets/images/womanEmpowerment/Women Who Code.png",
      navigate: "https://www.womenwhocode.com/",
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
