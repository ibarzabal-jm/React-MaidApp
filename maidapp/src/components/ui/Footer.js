import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Copyright from './Copyright';
import { makeStyles } from '@material-ui/core/styles';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles((theme) => ({
  footer: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    padding: theme.spacing( 2 ),
    marginTop: 'auto',
    backgroundColor:'black',
  },
  icons: {
    color: 'white',
    "&:hover": {
      color: theme.palette.warning.main
    }
  }
 
}));

const Footer = () => {
  const classes = useStyles();
  return (
      <footer className={classes.footer}>
        <IconButton className={classes.icons} aria-label="Github" onClick={() => window.open('https://github.com/ibarzabal-jm')}  >
          <GitHubIcon />
        </IconButton>
        <IconButton className={classes.icons} aria-label="LinkedIn" onClick={() => window.open('https://www.linkedin.com/in/juan-manuel-ibarzabal')}  >
          <LinkedInIcon />
        </IconButton>

        <Copyright textcolor={ '#fafafa' }/>
      
      </footer>
  );
}


export default Footer;