import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Button, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import NavbarScroll from './NavbarScroll'
import MenuIcon from '@material-ui/icons/Menu'
import logo from '../../images/logo-iuly.png';

const useStyle = makeStyles( theme => ({
 
    menuButton:{
        flexGrow: 1,
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]:{
            display:'none',
        },
        "&:hover": {
            color: theme.palette.warning.main
        }
    },
    navButton:{
        marginRight: theme.spacing(1),
        [theme.breakpoints.down('xs')]:{
            display:'none',
        },
        "&:hover": {
            color: theme.palette.warning.main
        }
    },
    title:{
        flexGrow: 1,
    },
}))

export const Navbar = () => {

    const classes = useStyle();

    return (
        <NavbarScroll>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="menu" >
                        <MenuIcon />
                    </IconButton>

                    <Link to="/" className={classes.title}>
                                <img alt="logo-iULY" style={{ width:"100px", height : "40px", marginRight : "0.5rem" }} src={logo}></img>
                    </Link>

                    <Button variant="text"
                        color="inherit"
                        className={ classes.navButton }
                        component={Link}
                        to="/auth/login"
                    >
                        Ingresar
                    </Button>

                    <Button variant="text"
                        color="inherit"
                        className={ classes.navButton }
                        component={Link}
                        to="/register"
                    >
                        Registro
                    </Button>

                </Toolbar>
            </AppBar>
        </NavbarScroll>
    )
}
