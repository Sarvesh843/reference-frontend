import React from 'react'

import { Box } from '@mui/system'
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';



export default function VoterReferralBanner() {
    const theme=useTheme()

  return (
    
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0),
          imgUrl: '/assets/images/voterreferral/Referral.png',
        }),
        boxShadow: '0px 0px 7px 2px rgba(0,0,0,0.15)',
        height: { md: 250 },
        py: { xs: 10, md: 0 },
        overflow: 'hidden',
        position: 'relative',
        borderRadius: {xs:0, md:2},
      }}
    />

  )
}
