import React from 'react';
import { Link } from 'react-router-dom';

import { Box } from '@mui/system';
import { Card, Grid,CardMedia, Typography, CardContent  } from '@mui/material';

export default function WomanEmpowermentLegalAndAdvocacy() {
    const legalAidAdvocacyData = [
        {
          id: 1,
          title: "Legal Momentum",
          description: "Advocating for women's rights, workplace equality, and legal protections against violence and discrimination.",
          navigate: "https://www.legalmomentum.org/",
          path: "/assets/images/womanEmpowerment/Legal Momentum.png",
        },
        {
          id: 2,
          title: "Women's Legal Service",
          description: "Providing legal aid, support, and representation for women facing legal challenges, domestic violence, and family law issues.",
          navigate: "https://nalsa.gov.in/library/women-and-law",
          path: "/assets/images/womanEmpowerment/Women's Legal Service.png",
        },
        {
          id: 3,
          title: "Gender Justice Advocates",
          description: "Championing gender equality, reproductive rights, and legal advocacy for marginalized women and communities.",
          navigate: "https://www.unilever.com/sustainability/equity-diversity-and-inclusion/gender-equality-and-womens-empowerment/",
          path: "/assets/images/womanEmpowerment/Gender Justice Advocates.png",
        },
        {
          id: 4,
          title: "Equality Law Center",
          description: "Promoting equality under the law, fighting gender-based discrimination, and providing legal resources for women's empowerment.",
          navigate: "https://equaleverywhere.org/stories/?gad_source=1&gclid=CjwKCAjwi_exBhA8EiwA_kU1MtHWLn7N_z-GmCEqAMuOHXkdVxqLVhPqgEW2cd2-0qeewbJORKRZjBoCRDwQAvD_BwE",
          path: "/assets/images/womanEmpowerment/Equality Law Center.png",
        },
        {
          id: 5,
          title: "Women's Rights Legal Fund",
          description: "Supporting women's rights litigation, legal defense, and impact litigation to advance gender equality and justice.",
          navigate: "http://ncw.nic.in/",
          path: "/assets/images/womanEmpowerment/Women's Rights Legal Fund.png",
        },
        {
          id: 6,
          title: "Legal Aid Society for Women",
          description: "Providing free legal aid, counseling, and advocacy for women in need, ensuring access to justice and protection of rights.",
          navigate: "https://www.sarimburneytrust.org/services/legal-aid/?gad_source=1&gclid=CjwKCAjwi_exBhA8EiwA_kU1MjszwyEBSWgfCbB_kX_1dAD687AHBmFW9XGqlzpQqeqFFok-CztsZRoCHzMQAvD_BwE",
          path: "/assets/images/womanEmpowerment/Legal Aid Society for Women.png",
        }
        
      ];
      
  return (
    <Grid container sx={{ mt: 2, gridGap: 24, justifyContent: "space-evenly" }}>
    {legalAidAdvocacyData.map((card) => (

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
