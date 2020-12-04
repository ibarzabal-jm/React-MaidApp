import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import  CustomerCard  from './CustomerCard';




const useStyles = makeStyles( (theme)=> ({
    root: {
        backgroundColor:'pink',
        width:'100%'
        
    }  
}) )

const clientes = [
    {
        id: 1,
        nombre: 'rita',
        nacionalidad: 'argentina',
        img: 'https://placekitten.com/408/287',
        edad: 30,
        modalidad: 'Cama Adentro',
        alta: 'Mayo 2020',
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
        update: new Date(),
    },

]
export const CustomerList = () => {
    const classes = useStyles();

    return (
        <Grid container
            alignContent="center"
            alignItems="center"
            justify="center"
            direction="row"
            spacing={4}
        
            className={classes.root}
        >
            <Grid item xs={12}>
                
                <Typography variant="h3" align="center" > Nuestras iULY's</Typography>
                
            </Grid>

            {
                clientes.map( (customer) =>(

                    <Grid item xs={4} >
                        <CustomerCard
                            customer={customer}
                        />
                    </Grid>
                )
                )
            }
        </Grid>
    )
}
