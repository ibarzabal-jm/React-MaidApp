import React, { useState } from 'react'
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
    const [open, setOpen] = useState(true);

    const handleToggle = () =>{
        setOpen(!open);
    }

    return (
        <Router>
            <div className={classes.root} >
                <Navbar handleToggle={handleToggle}/>
                <Hidden xsDown>
                    <SideBar variant="permanent"
                             open={true}
                    />
                </Hidden>
                <Hidden smUp>
                    <SideBar variant="temporary"
                             open={open}
                             onClose={handleToggle}
                    />
                </Hidden>

                <div className={classes.content}>
                    <div className={classes.toolbar}></div>
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
