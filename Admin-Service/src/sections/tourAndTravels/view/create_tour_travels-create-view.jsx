import { useState } from 'react';

import { Box, Grid, Card, Button, CardMedia, Typography, CardContent, CardActionArea } from '@mui/material';

import TourAndTravelsHero from '../tour_travels-hero';
import BusTravels from '../bus-travels';
import FlightTravels from '../flight-travels';
import TrainTravels from '../train-travels';


const cardsData = [
  {
    id: 1,
    title: 'Bus Travel Booking',
    description: `Bus travels bookings`,
    navigate: `https://www.redbus.in/`,
    path: "/assets/images/tourAndTravels/BusBooking.png"
  },
  {
    id: 2,
    title: 'Train Travel Booking',
    description: `Complaint filed regarding faulty light fixtures, inadequate illumination, and frequent power outages, requiring prompt resolution for safety and convenience."`,
    navigate: `https://www.irctc.co.in/nget/train-search`,
    path: "/assets/images/tourAndTravels/TrainBooking.png"
  },
  {
    id: 3,
    title: 'Flight Travel Booking',
    description: `Complaint filed regarding low water pressure, frequent leaks, and discolored water, necessitating immediate attention for health and sanitation concerns."`,
    navigate: `https://www.goindigo.in/`,
    path: "/assets/images/tourAndTravels/FlightBooking.png"
  },
  
];


export default function CreateTourAndTravels() {

  const [togal, setTogal] = useState(null);

  const handleCardClick = (id) => {
    window.open(cardsData.find(card => card.id === id).navigate, '_blank');
    // setTogal(id)
  };


  return (
    <>
      <TourAndTravelsHero />

      <Box sx={{ mt: 5 }}>
        {
          !togal && (
            <Grid container sx={{ gridGap: 16, justifyContent: "space-evenly" }}>
              {cardsData.map((card) => (

                <Grid item key={card.id} xs={10} sm={8} md={4} lg={3} sx={{
                  borderRadius: "20px",
                  // border: "1px solid red", 
                  // boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.1)',
                  boxShadow: '0px 0px 7px 2px rgba(0,0,0,0.15)',
                  padding: "0 !important",
                  margin: "0 !important"
                }}
                >
                  <CardActionArea onClick={() => handleCardClick(card.id)} sx={{ textDecoration: "none", textAlign: "center", height: "100%", width: "100%", }}>
                    <Card sx={{ height: "100%", width: "100%", borderRadius: "20px", }}>
                      <CardMedia sx={{ p: 1 }}>
                        <Box component="img" src={card.path} alt={card.title} />
                      </CardMedia>
                      <CardContent>
                        {/* <Typography variant="h6" >
                    {card.title}
                  </Typography> */}
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          sx={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
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
          )
        }

        {
          togal && <Button type="button" onClick={() => { setTogal(false) }}>Back</Button>
        }

        {
          togal === 1 && <BusTravels/>
        }

        {
          togal === 2 && <FlightTravels />
        }

        {
          togal === 3 && <TrainTravels />
        }

      </Box>

    </>
  );
}
