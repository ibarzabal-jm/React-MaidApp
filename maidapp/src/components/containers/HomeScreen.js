import React from 'react'
import Grid from '@material-ui/core/Grid'
import Portada from './HomeContainer/Portada'
import JoinUs  from './HomeContainer/JoinUs'
import Contratanos from './HomeContainer/Contratanos'
import Introduccion  from './HomeContainer/Introduccion'


export const HomeScreen = () => {
      
    return (
        <Grid container >
            <Portada/>
            <Introduccion />
            <JoinUs />
            <Contratanos/>
        </Grid>
    )
}

