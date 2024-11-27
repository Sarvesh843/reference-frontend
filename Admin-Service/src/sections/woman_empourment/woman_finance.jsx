import React from 'react';
import { Link } from 'react-router-dom';

import { Box } from '@mui/system';
import { Card, Grid,CardMedia, Typography, CardContent } from '@mui/material';

export default function WomanFinanceEmpowerment() {
  const financialEmpowermentData = [
    {
      id: 1,
      title: "Access to Finance Organization",
      description: "Enabling women to access financial services like savings accounts and microfinance, supporting economic independence.",
      navigate: "https://www.accesstofinance.org/",
      path:"/assets/images/womanEmpowerment/Access to Finance Organization.png"
    },
    {
      id: 2,
      title: "Financial Literacy Foundation",
      description: "Educating women on money management skills and financial decision-making for improved financial well-being.",
      navigate: "https://www.financialliteracyfoundation.org/",
      path:"/assets/images/womanEmpowerment/Financial Literacy Foundation.png"
    },
    {
      id: 3,
      title: "Empowerment Enterprises",
      description: "Providing women entrepreneurs with training, mentorship, and funding opportunities to start and grow businesses.",
      navigate: "https://www.startupindia.gov.in/content/sih/en/women_entrepreneurs.html",
      path:"/assets/images/womanEmpowerment/Empowerment Enterprises.png"
    },
    {
      id: 4,
      title: "Equal Opportunity Advocates",
      description: "Advocating for equal pay, fair hiring practices, and creating inclusive workplaces for women's economic advancement.",
      navigate: "https://www.unilever.com/sustainability/equity-diversity-and-inclusion/gender-equality-and-womens-empowerment/",
      path:"/assets/images/womanEmpowerment/Equal Opportunity Advocates.png"
    },
    {
      id: 5,
      title: "Skills Development Solutions",
      description: "Equipping women with job skills, vocational training, and career development support for better employment opportunities.",
      navigate: "https://www.skillsdevelopmentsolutions.com/",
      path:"/assets/images/womanEmpowerment/Skills Development Solutions.png"
    },
    {
      id: 6,
      title: "Women's Investment Network",
      description: "Connecting women with investment opportunities, financial planning resources, and networking events for wealth creation.",
      navigate: "https://thewomensinvestmentnetwork.com/",
      path: "/assets/images/womanEmpowerment/Women's Investment Network.png",
    }
    
  ];
  
  return (
    <Grid container sx={{ mt: 2, gridGap: 24, justifyContent: "space-evenly" }}>
    {financialEmpowermentData.map((card) => (

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
