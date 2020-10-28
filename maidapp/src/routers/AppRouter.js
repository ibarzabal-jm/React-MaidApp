import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

import {
    Hidden,
    makeStyles
} from '@material-ui/core'

import { Navbar } from '../components/ui/Navbar';
import { HomeScreen } from '../components/ui/HomeScreen';
import { AuthRouter } from './AuthRouter';
import SideBar from '../components/ui/SideBar';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export const AppRouter = () => {

    const classes = useStyles();

    return (
        <Router>
            <div className={classes.root} >
                <Navbar/>
                <Hidden xsDown>
                    <SideBar/>
                </Hidden>
                <div className={classes.content}>
                    <div className={classes.toolbar}></div>
                    Hola
                        <Switch >
                            <Route path="/auth" component={AuthRouter} />
                            <Route exact path="/" component={HomeScreen} />
                            <Redirect to="/" />
                        </Switch>
                    </div>
            </div>
        </Router>
    )
}
