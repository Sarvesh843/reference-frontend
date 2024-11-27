import React from 'react';
import { Link } from 'react-router-dom';

import { Box } from '@mui/system';
import { Card, Grid,CardMedia, Typography, CardContent } from '@mui/material';

export default function StudentGuide() {
  const studentGuideData = [
    {
      title: "LinkedIn Learning",
      description: "Offers online courses and tutorials for career development.",
      navigate: "https://www.linkedin.com/learning/",
      path: "/assets/images/studentcareer/student2/LinkedIn Learning.png"
    },
    {
      title: "Study Skills",
      description: "Improve your study habits and techniques for better learning outcomes.",
      navigate: "https://www.educationcorner.com/study-skills/",
      website: "Study Skills Guide",
      path: "/assets/images/studentcareer/Study Skills.png"
    },
    {
      title: "Time Management",
      description: "Learn how to manage your time effectively and prioritize tasks.",
      navigate: "https://www.time-management-guide.com/",
      website: "Time Management Guide",
      path: "/assets/images/studentcareer/Time Management.png"
    },
    {
      title: "Test Preparation",
      description: "Get tips and strategies to prepare for exams and tests.",
      navigate: "https://www.educationcorner.com/test-preparation-tips/",
      website: "Test Preparation Guide",
      path: "/assets/images/studentcareer/Test Preparation.png"
    },
    {
      title: "Note-Taking Methods",
      description: "Explore different note-taking methods and find the one that works best for you.",
      navigate: "https://blog.box.com/best-note-taking-methods",
      website: "Note-Taking Guide",
      path: "/assets/images/studentcareer/Note-Taking Methods.png"
    },
    {
      title: "Writing Skills",
      description: "Enhance your writing skills with guides on essay writing, grammar, and more.",
      navigate: "https://www.englishclub.com/writing/guide.php",
      website: "Writing Skills Guide",
      path: "/assets/images/studentcareer/Writing Skills.png"
    },
    {
      title: "Career Planning",
      description: "Plan your career path, explore job options, and develop career skills.",
      navigate: "https://ceric.ca/publications/guiding-principles-of-career-development/",
      website: "Career Planning Guide",
      path: "/assets/images/studentcareer/Career Planning.png"
    },
    {
      title: "Financial Literacy",
      description: "Learn about managing finances, budgeting, and financial planning.",
      navigate: "https://www.annuity.org/financial-literacy/",
      website: "Financial Literacy Guide",
      path: "/assets/images/studentcareer/Financial Literacy.png"
    },
    {
      title: "Wellness and Self-Care",
      description: "Take care of your mental and physical well-being with self-care tips and resources.",
      navigate: "https://www.everydayhealth.com/self-care/",
      website: "Wellness and Self-Care Guide",
      path: "/assets/images/studentcareer/Wellness and Self-Care.png"
    },
    {
      title: "BYJU'S Exam Prep",
      description:
        'Offers preparation materials, mock tests, and study plans for various government job exams.',
      navigate: 'https://byjusexamprep.com',
      path: "/assets/images/studentcareer/student2/BYJU'S Exam Prep.png",
    },
    {
      title: "Roadtrip Nation",
      description: "Career exploration platform for students.",
      navigate: "https://roadtripnation.com",
      path: "/assets/images/studentcareer/student2/Roadtrip Nation.png"
    },
    {
      title: "My Next Move",
      description: "Interactive tool by the U.S. Department of Labor.",
      navigate: "https://www.mynextmove.org/",
      path: "/assets/images/studentcareer/student2/My Next Move.png"
    },
    {
      title: "CareerExplorer",
      description: "Provides career assessment tests and personalized recommendations.",
      navigate: "https://www.careerexplorer.com/",
      path: "/assets/images/studentcareer/student2/CareerExplorer.png"
    },
    {
      title: "CareerOneStop",
      description: "Career exploration tools sponsored by the U.S. Department of Labor.",
      navigate: "https://www.careeronestop.in/",
      path: "/assets/images/studentcareer/student2/CareerOneStop.png"
    },
    // {
    //   title: "PathSource",
    //   description: "Career exploration platform with assessments and job search tools.",
    //   navigate: "https://path-source.com/",
    //   path: "/assets/images/studentcareer/student2/PathSource.png"
    // },
    {
      title: "CareerVillage",
      description: "Community-driven platform for career-related questions and advice.",
      navigate: "https://www.careervillage.org/",
      path: "/assets/images/studentcareer/student2/CareerVillage.png"
    },
  
  ];
  

  return (
    <Grid container sx={{ mt: 2, gridGap: 24, justifyContent: "space-evenly" }}>
    {studentGuideData.map((card) => (

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
