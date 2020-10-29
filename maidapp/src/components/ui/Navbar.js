import React from 'react'
import { Link } from 'react-router-dom'

import { AppBar, Button, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import logo from '../../images/logo-iuly.png';

const drawerWidth = 240;

const useStyle = makeStyles( theme => ({
    menuButton:{
        flexGrow: 1,
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]:{
            display:'none',
        },
    },
    title:{
        flexGrow: 1,
    },
    appBar: {
        [theme.breakpoints.up('sm')]:{
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,    
        }
    }
}))

export const Navbar = ({handleToggle}) => {

    const classes = useStyle();

    return (
        <AppBar position="fixed" color="primary" className={classes.appBar} >
            <Toolbar>
                
                <IconButton className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleToggle}>
                    <MenuIcon />
                </IconButton>

                <Link to="/" className={classes.title}>
                            <img alt="logo-iULY" style={{ width:"100px", height : "40px", marginRight : "0.5rem" }} src={logo}></img>
                </Link>

                <Button variant="contained" color="primary">
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    )
}

