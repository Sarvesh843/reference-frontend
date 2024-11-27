import React from 'react';
import { Link } from 'react-router-dom';

import { Box } from '@mui/system';
import { Card, Grid,CardMedia, Typography, CardContent} from '@mui/material';

export default function WomanEmpowermentReproductive() {
  const healthcareReproductiveData = [
    {
      id: 1,
      title: "Women's Health Initiative",
      description: "Providing comprehensive healthcare services, including reproductive health, family planning, and maternal care, for women's well-being and empowerment.",
      navigate: "https://www.whi.org/",
      path: "/assets/images/womanEmpowerment/Women's Health Initiative.png",
    },
    {
      id: 2,
      title: "Reproductive Rights Advocates",
      description: "Advocating for women's reproductive rights, access to contraception, safe abortions, and reproductive healthcare services.",
      navigate: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9930478/",
      path: "/assets/images/womanEmpowerment/Reproductive Rights Advocates.png",
    },
    {
      id: 3,
      title: "Maternal Health Foundation",
      description: "Improving maternal health outcomes through education, healthcare access, and support for safe childbirth practices.",
      navigate: "https://www.maternalhealthfoundation.org/",
      path: "/assets/images/womanEmpowerment/Maternal Health Foundation.png",
    },
    {
      id: 4,
      title: "Sexual Health Education Network",
      description: "Providing sexual health education, resources, and support to empower women to make informed decisions about their bodies and health.",
      navigate: "https://www.communityaccessnetwork.org/the-importance-of-sexual-health-awareness-and-empowerment/",
      path: "/assets/images/womanEmpowerment/Sexual Health Education Network.png",
    },
    {
      id: 5,
      title: "Family Planning Clinic",
      description: "Offering family planning services, contraception options, and reproductive healthcare consultations to support women's reproductive choices and health.",
      navigate: "https://lafiyanigeria.org/blog/benefits-of-family-planning?gad_source=1&gclid=CjwKCAjwi_exBhA8EiwA_kU1Mkv7zDJ9WbTOZtNAWMvbh5AmpXY0h_7crci-kZYGzLfL7zqhZrxDyRoCEd8QAvD_BwE",
      path: "/assets/images/womanEmpowerment/Family Planning Clinic.png",
    },
    {
      id: 6,
      title: "Women's Wellness Center",
      description: "Promoting holistic wellness for women through healthcare services, mental health support, and wellness programs.",
      navigate: "https://spherule.org/menstrual-health-and-hygiene/?utm_campaign=Spherule-InboundSearch-Initiatives-MenstrualHealthAndHygiene&utm_source=google&utm_medium=cpc&utm_content=674295355161&utm_term=women%27s%20health&adgroupid=153953227896&gad_source=1&gclid=CjwKCAjwi_exBhA8EiwA_kU1MrHoPhOxsKs5HIr80nURk4REVVjzZvWDhjgIbKF6ItoJlWhl-MOFmBoCCwcQAvD_BwE",
      path: "/assets/images/womanEmpowerment/Women's Wellness Center.png",
    }
    
  ];
  
  return (
    <Grid container sx={{ mt: 2, gridGap: 24, justifyContent: "space-evenly" }}>
    {healthcareReproductiveData.map((card) => (

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
