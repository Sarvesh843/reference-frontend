// import { useState } from 'react';

import { Box, Grid, Card, CardMedia, Typography, CardContent, CardActionArea } from '@mui/material';

// import FarmerMarketPlace from './farmer-market-place';

export default function BusinessForLarge() {
  // const [toggle, settoggle] = useState(false);

  const cardsData = [
    
    // { id: 4, title: 'Tempo', description: 'Nine business roadmap examples for scaling your organization', navigate: 'https://roadmunk.com/guides/business-roadmap-examples/', icon: 5, path: "/assets/images/business/Logos/tempo-full-logo 1.svg"},
    { id: 5, title: 'Tempo', description: 'the SAFe roadmap for effective change management', navigate: 'https://www.tempo.io/blog/safe-roadmap', icon: 5, path: "/assets/images/business/Tempo.png" },
    { id: 6, title: 'Okcredit', description: 'Business Kaise Kare? Isme OkCredit Kaise Madad Kar Sakta Hai?.', navigate: 'https://okcredit.in/blog/business-kaise-karein-aur-isme-okcredit-kaise-sahayak-hai/', icon: 5, path: "/assets/images/business/okcredit.png" },]
  

  const handleCardClick = (id) => {
    if (id === 4) {
      // settoggle(true);
    } else {
      window.open(cardsData.find((card) => card.id === id).navigate, '_blank');
    }
  };

  return (
    <Box>
      {/* <Typography variant='h4' sx={{ color: "#078dee", borderBottom: "2.5px solid #078dee", width: "fit-content" }}>Farmer Career Roadmap</Typography> */}
      <Grid container sx={{ mt: 2, gridGap: 20, justifyContent: 'space-evenly' }}>
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
              boxShadow: '0px 0px 7px 2px rgba(0,0,0,0.15)',
              padding: "0 !important",
              margin: "0 !important",
              marginTop: "10px !important"
            }}>
              <CardActionArea onClick={() => handleCardClick(card.id)} sx={{ textDecoration: "none", textAlign: "center", height: "100%", width: "100%", }}>
                <Card sx={{ height: "100%", width: "100%", borderRadius: "20px", }}>
                  <CardMedia sx={{ p: 1 }}>
                    <Box component="img" src={card.path} alt={card.title}/>
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
      </Box >
  );
}
