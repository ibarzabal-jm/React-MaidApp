import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
}   from '@material-ui/core'
import DeckIcon from '@material-ui/icons/Deck';
import Cloud from '@material-ui/icons/Cloud'



export const ListSideBar = () => {
    return (
        <div>
            <List component="nav">
                <ListItem button>
                    <ListItemIcon> <DeckIcon/> </ListItemIcon>
                    <ListItemText primary='Mi perfil'/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon> <Cloud /> </ListItemIcon>
                    <ListItemText primary='Mi segundo elemento'/>
                </ListItem>
                <Divider></Divider>
                <ListItem button>
                    <ListItemIcon> <Cloud /> </ListItemIcon>
                    <ListItemText primary='Datos personales'/>
                </ListItem>
            </List>
        </div>
    )
}
