import React from 'react';
import { Link } from 'react-router-dom';

import { Box } from '@mui/system';
import { Card, Grid,CardMedia, Typography, CardContent } from '@mui/material';

export default function WomanEmpowermentLeadershipAndMentor() {
    
    const leadershipMentorshipData = [
        {
          id: 1,
          title: "Women's Leadership Institute",
          description: "Providing leadership training, mentorship, and networking opportunities for women in various industries.",
          navigate: "https://wliut.com/",
          path:"/assets/images/womanEmpowerment/Women's Leadership Institute.png"
        },
        {
          id: 2,
          title: "MentorHER Network",
          description: "Connecting women with mentors, coaching, and support for career growth and leadership development.",
          navigate: "https://www.behindcloseddoors.com/blog/how-coaching-mentoring-enables-women-to-reach-their-potential-in-the-workplace",
          path:"/assets/images/womanEmpowerment/MentorHER Network.png"
        },
        {
          id: 3,
          title: "Girls Leadership Academy",
          description: "Empowering girls with leadership skills, confidence-building, and mentorship for future success.",
          navigate: "https://girlsleadership.org/",
          path:"/assets/images/womanEmpowerment/Girls Leadership Academy.png"
        },
        {
          id: 4,
          title: "Women in Business Mentorship Program",
          description: "Pairing aspiring women entrepreneurs with experienced mentors for guidance and business support.",
          navigate: "https://cherieblairfoundation.org/what-we-do/programmes/mentoring/",
          path:"/assets/images/womanEmpowerment/Women in Business Mentorship Program.png"
        },
        {
          id: 5,
          title: "Leadership Development Fund",
          description: "Providing grants, training, and mentorship for women leaders driving social change and innovation.",
          navigate: "https://iwda.org.au/resource/wpl/?gad_source=1&gclid=CjwKCAjwi_exBhA8EiwA_kU1Mjgbw9bjlzfPYJ8YlhOie8wb980lfocgVSvHZfjV5MGGA4EOgDBYIxoC5uMQAvD_BwE",
          path:"/assets/images/womanEmpowerment/Empowerment Enterprises.png"
        },
        {
          id: 6,
          title: "Women in Tech Leadership Forum",
          description: "Bringing together women leaders in the tech industry for networking, skill-sharing, and mentorship opportunities.",
          navigate: "https://girlsintech.org/?gad_source=1&gclid=CjwKCAjwi_exBhA8EiwA_kU1MkUqX9rCbrDvgUIvcIu8xm2ma47Y15yX3ZIBIiHng2rnuJnUmofB0hoCFN0QAvD_BwE",
          path: "/assets/images/womanEmpowerment/Women in Tech Leadership Forum.png",
        }
        
      ];
      
  return (
    <Grid container sx={{ mt: 2, gridGap: 24, justifyContent: "space-evenly" }}>
    {leadershipMentorshipData.map((card) => (

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
