import React from 'react'
import { Link } from 'react-router-dom'

import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import logo from '../../images/logo-iuly.png';

const useStyle = makeStyles( theme => ({
    menuButton:{
        marginRight: theme.spacing(2),
    },
    title:{
        flexGrow: 1,
    },
    appBar: {
        width: `calc(100% - ${240}px)`,
        marginLeft: 240,
    }
}))

export const Navbar = () => {

    const classes = useStyle();

    return (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar>
                <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Link to="/">
                            <img alt="logo-iULY" style={{ width:"100px", height : "40px", marginRight : "0.5rem" }} src={logo}></img>
                </Link>
                <Typography variant="h6" className={classes.title}>
                    iULY
                </Typography>
                <Button variant="text" color="inherit">
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    )
}

