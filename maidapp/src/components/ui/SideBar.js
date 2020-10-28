import React from 'react'
import {
    Drawer,
    makeStyles,
    Divider
} from '@material-ui/core'
import { ListSideBar } from './ListSideBar';

const estilos = makeStyles( theme =>({
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper:{
        width: 240,
    },
    toolbar: theme.mixins.toolbar
}))

const SideBar = () => {

    const classes = estilos();

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            className={classes.drawer}
            classes={{ paper: classes.drawerPaper}}
        >
          <div className={classes.toolbar}/>
          <Divider />
          <ListSideBar />
          <Divider />

      </Drawer>
    )
}

export default SideBar;



