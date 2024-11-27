// import { useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import { Box, Grid, Card, CardMedia, Typography, CardContent, CardActionArea } from '@mui/material';

export default function FarmerMarketPlace({ settoggle }) {


  const cardsData = [
    { id: 1, title: 'Seed Marketplace', description: 'Learn how to select seeds, prepare for planting, nurture seedlings.', navigate: `https://agritech.tnau.ac.in/`, path: '/assets/images/FarmerLabour/Seed marketplace.png' },
    { id: 2, title: 'Fertilizer Marketplace', description: `Learn to choose, apply effective fertilizer for flourishing crops and dazzling blooms.`, navigate: `https://enam.gov.in/web/`, path: '/assets/images/FarmerLabour/Fertilizer marketplace.png' },
    { id: 3, title: 'Pesticides Marketplace', description: 'Identify pests, choose solutions, apply safely, safeguard garden and health.', navigate: `https://www.croplife.org `, path: '/assets/images/FarmerLabour/Pesticide marketplace.png' },
    { id: 4, title: 'Livestock Marketplace', description: 'Become a vendor, showcase produce, connect with local customers, build business.', navigate: `https://www.ifpri.org/ `, path: '/assets/images/FarmerLabour/livestock marketplace.png' },
    { id: 5, title: 'Agricultural Equipment Marketplace', description: 'Equip farmers with skills to manage, market, grow businesses, write plans.', navigate: `https://nfu.org/`, path: '/assets/images/FarmerLabour/Agriculture Equipment marketplace.png' },
    { id: 6, title: 'Organic Produce Marketplace', description: 'Discover benefits of organic farming, learn to grow, market, sell produce.', navigate: `https://www.ota.com/`, path: '/assets/images/FarmerLabour/organic Product marketplace.png' }
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
              transform: {xs:'scale(1)',md:'scale(1.05)'}, // Scale the grid item on hover
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
              </CardActionArea>
          </Grid>
        ))}
      </Grid>

    </Box>
  );
}

FarmerMarketPlace.propTypes = {
  settoggle: PropTypes.object,
};
