import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider  from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

import fondo from '../../../images/fondo.jpg'



const useStyles = makeStyles((theme) => ({
    box: {
        height:"100vh",
        background: `linear-gradient( rgba(0,0,0,0.5), rgba(0, 0, 0, 0.5) ), no-repeat center center, url(${fondo})`,
        backgroundSize:'cover',        
    },
    title:{
        color: "white",
    },
    subtitle:{
        color: "tan",
        textTransform: "capitalize",
    },

   
}))

const Portada = () => {
    const classes = useStyles();

    return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="center"

                className={classes.box}
            >
                <Grid item xs={12} sm={6}>
                    <Typography variant="h5" className={classes.title} align="center">
                        ¿Buscas Empleada?
                    </Typography>
                    <Divider/>
                    <Typography className={classes.subtitle} align="center" variant="h6">
                      Contratá iULY
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <Typography variant="h5" className={classes.title} align="center">
                        ¿Buscas Trabajo?
                    </Typography>
                    <Divider/>
                    <Typography className={classes.subtitle} align="center" variant="h6">
                      Ser parte de iULY
                    </Typography>
                </Grid>
                
            </Grid>

 
    )
}

export default Portada