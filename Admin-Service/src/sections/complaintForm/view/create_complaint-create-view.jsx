import { useState } from 'react';

import { Box, Grid, Card, Button, CardMedia, Typography, CardContent, CardActionArea } from '@mui/material';

import ComplaintHero from '../complaint-hero';
import ComplaintFood from '../complaint-food';
import ComplaintRoad from '../complaint-road';
import ComplaintLight from '../complaint-light';
import ComplaintWater from '../complaint-water';
import ComplaintHospital from '../complaint-hospital';
import ComplaintEducation from '../complaint-education';
import ComplaintFakeVoting from '../complaint-fake-voting';
import ComplaintGasPipeline from '../complaint-gas-pipeline';
import ComplaintSewageProblem from '../complaint-sewage-problem';

const cardsData = [
  {
    id: 1,
    title: 'Health & hosptial Related Complain',
    description: `Complaint lodged concerning long waiting times, inadequate staff, and substandard hygiene at the hospital, demanding immediate improvements for patient care and safety."`,
    navigate: `https://voterportal.eci.gov.in/home/ngsp`,
    path: "/assets/images/complainSection/HealthandHospitalIssue.png"
  },
  {
    id: 2,
    title: 'Light Related Complain',
    description: `Complaint filed regarding faulty light fixtures, inadequate illumination, and frequent power outages, requiring prompt resolution for safety and convenience."`,
    navigate: `https://voterportal.eci.gov.in/home/ngsp`,
    path: "/assets/images/complainSection/ElectricityProblem.png"
  },
  {
    id: 3,
    title: 'Water Related Complain',
    description: `Complaint filed regarding low water pressure, frequent leaks, and discolored water, necessitating immediate attention for health and sanitation concerns."`,
    navigate: `https://voterportal.eci.gov.in/home/ngsp`,
    path: "/assets/images/complainSection/WaterProblems.png"
  },
  {
    id: 4,
    title: 'Road Related Complain',
    description: `Complaint lodged about potholes, inadequate road markings, and traffic congestion, urging swift action to ensure safe and efficient transportation."`,
    navigate: `https://voterportal.eci.gov.in/home/ngsp`,
    path: "/assets/images/complainSection/RoadIssue.png"
  },
  {
    id: 5,
    title: 'Education - School and College Related Complain',
    description: `Complaint submitted regarding outdated school facilities, lack of resources, and ineffective teaching methods, urging comprehensive reforms for quality education and student development."`,
    navigate: `https://voterportal.eci.gov.in/home/ngsp`,
    path: "/assets/images/complainSection/SchoolandCollegesProblems.png"
  },

  {
    id: 6,
    title: 'Food Related Complain',
    description: `Complaint filed concerning subpar food quality, inconsistent hygiene standards, and delayed service, demanding immediate improvements for customer satisfaction and health safety."`,
    navigate: `https://voterportal.eci.gov.in/home/ngsp`,
    path: "/assets/images/complainSection/FoodProblem.png"
  },
  {
    id: 7,
    title: 'Sweage Related Complain',
    description: `Complaint raised about sewage system issues including blockages, foul odors, and overflows, necessitating urgent repairs to prevent health hazards and environmental pollution."`,
    navigate: `https://voterportal.eci.gov.in/home/ngsp`,
    path: "/assets/images/complainSection/SeawageProblem.png"
  },
  {
    id: 8,
    title: 'Gas Pipeline Related Complain',
    description: `Complaint filed regarding gas pipeline leaks, inconsistent supply, and safety concerns, urging immediate inspection and repairs to ensure public safety and uninterrupted service."`,
    navigate: `https://voterportal.eci.gov.in/home/ngsp`,
    path: "/assets/images/complainSection/Pipelineissue.png"
  },


  {
    id: 9,
    title: 'Fake Voting Complain',
    description: `Complaint filed for suspected fake voting in recent elections, demanding thorough investigation due to alleged duplicate votes and ineligible participation."`,
    navigate: `https://voterportal.eci.gov.in/home/ngsp`,
    path: "/assets/images/complainSection/FakeVoteTrackingcard.png"
  },

];


export default function CreateComplaint() {

  const [togal, setTogal] = useState(null);

  const handleCardClick = (id) => {
    // window.open(cardsData.find(card => card.id === id).navigate, '_blank');
    setTogal(id)
  };


  return (
    <>
      <ComplaintHero />

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
          togal === 1 && <ComplaintHospital/>
        }

        {
          togal === 2 && <ComplaintLight />
        }

        {
          togal === 3 && <ComplaintWater />
        }

        {
          togal === 4 && <ComplaintRoad/>
        }

        {
          togal === 5 && <ComplaintEducation />
        }

        {
          togal === 6 && <ComplaintFood/>
        }

{
          togal === 7 && <ComplaintSewageProblem />
        }

        {
           togal === 8 &&  <ComplaintGasPipeline/>
        }

        {
          togal === 9 && <ComplaintFakeVoting />
        }



      </Box>

    </>
  );
}
