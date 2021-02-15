import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { Facebook, Instagram, Twitter, LinkedIn } from '@material-ui/icons';
import { Typography, Box, IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    width: 'auto',
    backgroundColor: theme.customColors[3],
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
  },
  icons_box: {
    color: 'white',
    marginLeft: '4em',
  },

  footer_icon: {
    color: 'white',
    fontSize: '1.7rem',
    '@media (min-device-width: 900px)': {
      fontSize: '1.8rem',
    },
  },
  footer_text: {
    fontSize: '0.75rem',
    paddingTop: '1.5em',
    paddingRight: '3em',
    '@media (min-device-width: 900px)': {
      fontSize: '1rem',
      paddingRight: '3em',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.footer}>
      <Box className={classes.icons_box}>
        <IconButton>
          <Facebook className={classes.footer_icon} />
        </IconButton>
        <IconButton>
          <Instagram className={classes.footer_icon} />
        </IconButton>
        <IconButton>
          <Twitter className={classes.footer_icon} />
        </IconButton>
        <IconButton>
          <LinkedIn className={classes.footer_icon} />
        </IconButton>
      </Box>
      {/* <Box> */}
      <Typography className={classes.footer_text}>
        {' '}
        @ 2020 all rights reserved by CalTrack
      </Typography>
      {/* </Box> */}
    </BottomNavigation>
  );
};

export default Footer;
