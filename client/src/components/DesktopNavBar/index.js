import React, { useContext } from 'react';
import { Button, Box, useMediaQuery } from '@material-ui/core';
import { Link } from 'react-router-dom';
import favIcon from './favicon.ico';
import { context } from '../userProvider';
import LoginSignupButtonsBox from '../LoginSignupButtonsBox';
import useStyles from './style';

const DesktopNavBar = () => {
  const smallScreen = useMediaQuery('(max-width:600px)');
  const classes = useStyles();
  const [isAuthenticated] = useContext(context);
  return (
    <div className={classes.navbar}>
      <Box className={classes.logo_container}>
        <Link to="/">
          <img alt="scale" src={favIcon} className={classes.scale_img} />
        </Link>
        <span className={classes.logo}>CalTrack</span>
      </Box>
      <Box className={classes.login_logout_signup_container}>
        {isAuthenticated ? (
          <Link to="/logout" className={classes.logout_link}>
            <Button className={classes.logout_btn}>log out</Button>
          </Link>
        ) : smallScreen ? (
          ''
        ) : (
          <LoginSignupButtonsBox />
        )}
      </Box>
    </div>
  );
};

export default DesktopNavBar;
