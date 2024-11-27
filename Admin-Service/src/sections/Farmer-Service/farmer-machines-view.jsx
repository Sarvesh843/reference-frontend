// import { useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import { Box, Grid, Card, CardMedia, Typography, CardContent, CardActionArea } from '@mui/material';

export default function FarmerMachines({ settoggle }) {

  const cardsData = [
    { id: 1, title: 'Tractors', description: 'Versatile machines used for various agricultural tasks such as plowing, planting, and harvesting.', navigate: `https://agriwelfare.gov.in/`, path: '/assets/images/FarmerLabour/Tractors.png' },
    { id: 2, title: 'Combine Harvesters', description: 'Efficiently harvest grains and other crops by combining reaping, threshing, and winnowing functions.', navigate: `https://agriwelfare.gov.in/`, path: '/assets/images/FarmerLabour/Combine harvestors.png' },
    { id: 3, title: 'Irrigation Systems', description: 'Ensure consistent water supply to crops for optimal growth and yield, reducing dependence on rainfall.', navigate: `https://agriwelfare.gov.in/`, path: '/assets/images/FarmerLabour/Irrigation Systems.png' },
  ];

  const handleCardClick = (id) => {
    window.open(cardsData.find(card => card.id === id).navigate, '_blank');
  };

  return (
    <Box>
      {/* <Typography variant='h4' sx={{ color: "#078dee", borderBottom: "2.5px solid #078dee", width: "fit-content" }}>Farmer Market Place</Typography>
      <Button sx={{ mt: 2 }} onClick={() => settoggle(false)}><ReplyAllIcon /></Button> */}
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
              transform: { xs: 'scale(1)', md: 'scale(1.05)' }, // Scale the grid item on hover
            },
          }}
          >
            <CardActionArea onClick={() => handleCardClick(card.id)} sx={{ textDecoration: "none", textAlign: "center", height: "100%", width: "100%", }}>
              <Card sx={{ height: "100%", width: "100%", borderRadius: "20px", }}>
              <CardMedia sx={{ p: 1 }}>
                <Box component="img" src={card.path} alt={card.title} />
              </CardMedia>
                <CardContent>
                  <Typography variant="h5">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: { xs: 3, md: 2 },
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}>
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
      {/* <Typography variant='h4' sx={{color: "#078dee", borderBottom: "2.5px solid #078dee", width: "fit-content"}}>Farmer Equipment</Typography> */}
      {/* <Typography variant='h4' sx={{color: "#078dee", borderBottom: "2.5px solid #078dee", width: "fit-content"}}>Farmer Seeds</Typography> */}
      {/* <Typography variant='h4' sx={{color: "#078dee", borderBottom: "2.5px solid #078dee", width: "fit-content"}}>Farmer marketPlace</Typography> */}

    </Box>
  );
}

FarmerMachines.propTypes = {
  settoggle: PropTypes.object,
};
