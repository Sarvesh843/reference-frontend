// import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import { Box, Grid, Card, CardMedia, Typography, CardContent } from '@mui/material';

export default function BussinessForMedium({ settoggle }) {


  const cardsData = [
    { id: 1, title: 'Ambilio', description: 'A Strategic Roadmap for Medium-Scale Enterprises in Generative AI Adoption', navigate: `https://ambilio.com/a-strategic-roadmap-for-medium-scale-enterprises-in-generative-ai-adoption/`, path: '/assets/images/business/Ambilio.png' },
    { id: 2, title: 'Deloitte Private', description: `Small and Medium Bussiness rodmap for recovery .`, navigate: `https://www2.deloitte.com/content/dam/Deloitte/ca/Documents/about-deloitte/ca-en-covid-19-smb-recovery-toolkit-aoda.pdf`, path: '/assets/images/business/Delloite.png' },
    { id: 3, title: 'Coro Strandberg', description: 'SMALL- AND MEDIUM-SIZED BUSINESS ENVIRONMENTAL ROAD MAP.', navigate: `https://corostrandberg.com/wp-content/uploads/2009/12/small-medium-sized-business-environmental-roadmap.pdf`, path: '/assets/images/business/Coro Strandberg.png' },
    { id: 4, title: 'Medium', description: 'A ROADMAP TO CREATING SUCCESSFUL BUSINESS IDEAS.', navigate: `https://medium.com/@jayeshsaini0007/a-roadmap-to-creating-successful-business-ideas-9ecdf8890d06 `, path: '/assets/images/business/Medium.png' },
    { id: 5, title: 'Cyber Readiness Institute', description: 'Roadmap for Preparing Small and Medium-sized Businesses to be Cyber Ready.', navigate: `https://cyberreadinessinstitute.org/resource/2023-cri-roadmap/`, path: '/assets/images/business/Cyber Readiness Institute.png' },
    { id: 6, title: 'DDS SERVICES', description: 'DO YOU WANT TO TAKE YOUR BUSINESS TO THE NEXT LEVEL & HAVE WORK-LIFE BALANCE?', navigate: `https://www.dds-financial.com/5-stage-roadmap-to-success?gclid=CjwKCAjwouexBhAuEiwAtW_Zx2uRnVEf6CLeb43hCcf9SrOXJsGHXsEBPXkzdRJ7Hg_tGrVUlt1wwBoC6fMQAvD_BwE`, path: '/assets/images/business/DDS Dervices.png' }
  ];
  return (
    <Box>
      {/* <Typography variant='h4' sx={{ color: "#078dee", borderBottom: "2.5px solid #078dee", width: "fit-content" }}>Farmer Market Place</Typography>
      <Button sx={{ mt: 2 }} onClick={() => settoggle(false)}><ReplyAllIcon /></Button> */}
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
                <CardMedia sx={{ p: 1 }}>
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
      {/* <Typography variant='h4' sx={{color: "#078dee", borderBottom: "2.5px solid #078dee", width: "fit-content"}}>Farmer Equipment</Typography> */}
      {/* <Typography variant='h4' sx={{color: "#078dee", borderBottom: "2.5px solid #078dee", width: "fit-content"}}>Farmer Seeds</Typography> */}
      {/* <Typography variant='h4' sx={{color: "#078dee", borderBottom: "2.5px solid #078dee", width: "fit-content"}}>Farmer marketPlace</Typography> */}

    </Box>
  );
}

BussinessForMedium.propTypes = {
  settoggle: PropTypes.object,
};
