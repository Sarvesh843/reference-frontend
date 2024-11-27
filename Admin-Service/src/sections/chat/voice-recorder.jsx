import React from "react";
import PropTypes from 'prop-types';
import { ClosedCaption } from "@material-ui/icons";
import AudioPlayer from "material-ui-audio-player";
import { Paper, Box, Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@material-ui/core";

const RegisPlayer = ({
  size = "default",
  color = "primary",
  elevation = 1,
  transcript = "",
  src,
  ...rest
}) => {
  const iconSize = {
    small: 20,
    default: 24,
    large: 36,
    inherit: "inherit"
  }[size];
  const fontSize = {
    small: "0.875rem",
    default: "1rem",
    large: "1rem"
  }[size];
  const spacing = {
    small: { x: 1, y: 0.5, z: 1 },
    default: { x: 1, y: 0.75, z: 1 },
    large: { x: 1.5, y: 1.5, z: 2 }
  }[size];
  const minWidth = {
    small: 220,
    default: 250,
    large: 320
  }[size];

  const paperStyle = {
    minWidth
  };

  const rootStyle = {
     background: "none",
    "& .MuiGrid-item": {
      display: "flex",
      alignItems: "center"
    },
    "& div[class*='volumeControlContainer']": {
      display: "none"
    },
    "& .MuiSvgIcon-root": {
      fontSize: iconSize
    }
  };

  const progressTimeStyle = {
    fontSize
  };

  const customIconStyle = {
    root: {
      cursor: "pointer",
      "&:hover": {
        color: color === "primary" ? "#3f51b5" : "#f50057"
      }
    }
  };

  const [openDialog, setOpenDialog] = React.useState(false);

  return (
    <>
      <Paper elevation={elevation} style={paperStyle}>
        <Box  >
          <Grid container alignItems="center" style={rootStyle}>
            <Grid item xs>
              <AudioPlayer
                {...rest}
                src={src}
                variation={color}
                elevation={0}
                spacing={spacing.z}
              />
            </Grid>
            {transcript !== "" && (
              <Grid item style={{ display: "flex" }}>
                <ClosedCaption
                  fontSize={size}
                  style={customIconStyle.root}
                  color={color}
                  onClick={() => setOpenDialog(true)}
                />
              </Grid>
            )}
          </Grid>
        </Box>
      </Paper>
      <Dialog open={openDialog} onBackdropClick={() => setOpenDialog(false)}>
        <DialogTitle disableTypography>
          <Typography variant="h3">Audio transcript</Typography>
        </DialogTitle>
        <DialogContent dividers>
          {transcript !== "" &&
            transcript.split("\n").map((item, index) => (
              <Typography paragraph key={index}>
                {item}
              </Typography>
            ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

RegisPlayer.propTypes = {
  size: PropTypes.oneOf(["small", "default", "large", "inherit"]),
  src: PropTypes.string.isRequired,
  elevation: PropTypes.number,
  color: PropTypes.string,
  transcript: PropTypes.string,
};

export default RegisPlayer;
