import React from 'react'
import MaidCard from './MaidCard'
import { Grid, Typography, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';




const useStyles = makeStyles( (theme)=> ({
    root: {
        backgroundColor:'pink',
        width:'100%'
    }  
}) )

const mucamas = [
    {
        id: 1,
        nombre: 'rita',
        nacionalidad: 'argentina',
        img: 'https://placekitten.com/408/287',
        edad: 30,
        modalidad: 'Cama Adentro',
        alta: 'Mayo 2020',
        residencia:'Caballito',
        update: new Date(),
    },
    {
        id: 2,
        nombre: 'fasfas',
        nacionalidad: 'argentina',
        modalidad: 'Cama Adentro',
        img: 'https://placekitten.com/408/287',
        edad: 30,
        alta: 'Abril 2020',
        residencia:'Caballito',
        update: new Date(),
    },

]
export const MaidList = () => {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Grid container
                alignContent="center"
                alignItems="center"
                justify="center"
                direction="row"
                spacing={4}
            >
                <Toolbar/>
                <Grid item xs={12}>
                    
                    <Typography variant="h3" align="center" > Nuestras iULY's</Typography>
                    
                </Grid>
    
                {
                    mucamas.map( (mucama) =>(
                        <Grid item xs={4} >
                            <MaidCard
                                maid={mucama}
                            />
                        </Grid>
                    )
                    )
                }
            </Grid>
        </div>
    )
}
