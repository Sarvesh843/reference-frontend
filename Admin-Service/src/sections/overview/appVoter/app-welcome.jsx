import PropTypes from 'prop-types';
// import ReactPlayer from 'react-player';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';

// ----------------------------------------------------------------------

export default function AppWelcome({
  title,
  title2,
  newstitle,
  description,
  headertitle,
  action,
  img,
  newsImage,
  ...other
}) {
  const theme = useTheme();

  return (
    <Stack
      flexDirection={{ xs: 'column', md: 'row' }}
      sx={{
        ...bgGradient({
          direction: '135deg',
          startColor: alpha(theme.palette.primary.light, 0.2),
          endColor: alpha(theme.palette.primary.main, 0.2),
        }),
        height: { md: 1 },
        borderRadius: 2,
        position: 'relative',
        color: 'primary.darker',
        backgroundColor: 'common.white',
        boxShadow: '0px 0px 7px 2px rgba(0,0,0,0.15)',
      }}
      {...other}
    >
      <Stack
        flexGrow={1}
        justifyContent="center"
        alignItems={{ xs: 'center', md: 'flex-start' }}
        sx={{
          p: {
            xs: theme.spacing(5, 3, 0, 3),
            md: theme.spacing(5),
          },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography variant="h4" sx={{ mb: 5, whiteSpace: 'pre-line' }}>
          {title}
        </Typography>

        <Typography variant="h7" sx={{ whiteSpace: 'pre-line' }}>
          {title2}
        </Typography>

        <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
          {newstitle}
        </Typography>

        <Typography
          variant="h4"
          sx={{
            opacity: 0.8,
            maxWidth: 360,
            mb: { xs: 3, xl: 5 },
          }}
        >
          {headertitle}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            opacity: 0.8,
            maxWidth: 360,
            mb: { xs: 3, xl: 5 },
          }}
        >
          {description}
        </Typography>

        {action && action}
      </Stack>

      <Stack sx={{ height: '100%', width: '100%', padding: '10px' }}>
      <div style={{ borderRadius: '10px', overflow: 'hidden',height: '100%', width: '100%', }}>
        {/* <ReactPlayer
          url="https://www.youtube.com/watch?v=q0FBL3fXECA"
          width="100%"
          height="100%"
          playing
          loop
          muted
        /> */}
      </div>
    </Stack>
    </Stack>
  );
}

AppWelcome.propTypes = {
  img: PropTypes.node,
  action: PropTypes.node,
  title: PropTypes.string,
  title2: PropTypes.string,
  newstitle: PropTypes.string,
  headertitle: PropTypes.string,
  newsImage: PropTypes.string,
  description: PropTypes.string,
};
