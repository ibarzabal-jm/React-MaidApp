import React from 'react'
import {
    Drawer,
    makeStyles,
    Divider
} from '@material-ui/core'
import { ListSideBar } from './ListSideBar';

const drawerWidth = 240;

const estilos = makeStyles( theme =>({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper:{
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar
}))

const SideBar = (props) => {

    const classes = estilos();

    return (
        <Drawer
            anchor="left"
            className={classes.drawer}
            classes={{ paper: classes.drawerPaper}}
            variant={props.variant}
            open={props.open}
            onClose={ props.onClose ? props.onClose : null}
        >
          <div className={classes.toolbar}/>
          <Divider />
          <ListSideBar />
          <Divider />

      </Drawer>
    )
}

export default SideBar;



