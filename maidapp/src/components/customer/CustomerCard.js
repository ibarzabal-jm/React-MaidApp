import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {  makeStyles } from '@material-ui/core';


const useStyles = makeStyles( (theme) => ({
    card: {
        fontFamily: ' Candara, sans-serif',
        maxWidth: '340px',
        overflow: 'hidden',
        background: '#fff',
        borderRadius: '10px',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        alignContent:'center',


        transitionDuration: '0.4s',
        transitionProperty: 'transform',
        '&:hover': {
            transform: 'scale(1.1)',
        }
    },
    headerStart: {
        backgroundColor:'cyan',
        width: '100%',
        height: '100px',
   
    },
    valoracion: {
        display: 'flex',
        justifyContent:'flex-end',

    },
    avatar:{
        zIndex: 100,
        width: '120px',
        height: '120px',
        position: 'relative',
        marginTop: '-65px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '100px',
        border: '10px solid #fff',
        transitionDuration: '0.4s',
        transitionProperty: 'transform',
        '&:hover':{
            transform: 'scale(1.2)',
            border:'6px solid orange'
        }
    },
    title :{
        zIndex:200,
        textAlign:'center',
        textDecoration:'',
        fontSize: '25px',
    },
    desc : {
        fontSize: '16px',
        textAlign: 'justify',
        padding: '0 20px 5px 20px',
    },
    footer: {
        backgroundColor:'cyan',
        height:'50px',
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
    },
    cardButton: {
        display:'flex',
        backgroundColor: 'green',
        color:'white',
        alignSelf:'center'

    }
}) )

const CustomerCard = ({ customer }) => {

    const {
        nombre,
        edad,
        nacionalidad,
        img,
        modalidad,
        cantidadTrabajos,
        referencias,
        valoracion
    } = customer

    const classes = useStyles();
    
    return (
        <div className={classes.card}>
           <div className={classes.headerStart}>
               <div className={classes.valoracion}>Valoracion</div>
           </div>
           <img className={classes.avatar} src={img} alt={nombre}></img>
           <div className={classes.content}>
               <div className={classes.title}>
                   {nombre}
               </div>
               <Grid container>
                   <Grid item xs={6}></Grid>
                   <Grid item xs={6}>
                        <ul>
                            <li>{nacionalidad}</li>
                            <li>{edad}</li>
                            <li>{modalidad}</li>
                        </ul>
                   </Grid>
               </Grid>
               <div className={classes.datos}>
                   {valoracion}
                   {cantidadTrabajos}
                   {referencias}
               </div>
           </div>

           <div className={classes.footer}>
               <Button 
                variant="contained"
                color="default"
                className={ classes.cardButton }
               >
                   Contactar
               </Button>
           </div>


        </div>
    )
}

export default CustomerCard
