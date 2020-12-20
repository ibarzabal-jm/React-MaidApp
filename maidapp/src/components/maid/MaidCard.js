import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {  makeStyles } from '@material-ui/core';


const useStyles = makeStyles( (theme) => ({
    card: {
        alignContent:'center',
        background: '#fff',
        borderRadius: '10px',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: ' arial, sans-serif',
        overflow: 'hidden',
        maxWidth: '340px',

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
        textTransform:'uppercase',
        textDecoration:'',
        color: theme.palette.secondary.main,
        fontSize: '25px',
    },
    desc : {
        fontSize: '16px',
        textAlign: 'justify',
        padding: '0 20px 5px 20px',
    },
    footer: {
        backgroundColor:'cyan',
        display:'flex',
        justifyContent:'center', 
    },
    cardButton: {
        backgroundColor: 'green',
        color:'white',
        alignSelf:'center',

        '&:hover':{
            backgroundColor:'black'
        }

    }
}) )

const MaidCard = ({ maid }) => {

    const {
        nombre,
        edad,
        nacionalidad,
        img,
        modalidad,
        cantidadTrabajos,
        referencias,
        residencia,
        valoracion
    } = maid

    const classes = useStyles();
    
    return (
        <div className={classes.card}>
           <div className={classes.headerStart}>
               <div className={classes.valoracion}>Valoracion</div>
               <div className={classes.mas} > Denunciar </div>
           </div>
           <img className={classes.avatar} src={img} alt={nombre}></img>
           <div className={classes.content}>
               <div className={classes.title}>
                   {nombre}
               </div>
               <Grid container>
                   <Grid item xs={6}></Grid>
                   <Grid item xs={6} className={classes.datos}>
                        <ul>
                            <li>Edad: {edad} años</li>
                            <li>Nacionalidad: {nacionalidad}</li>
                            <li>Residencia: {residencia}</li>
                            <li>Fecha Alta: {alta}</li>
                            <hr></hr>
                            <li>Modalidad: {modalidad}</li>
                            <li>Ultima actualizacion: {actualizacion}</li>
                        </ul>
                   </Grid>
               </Grid>
               <Grid container
                    alignItems="center"
               >
                   <ul>
                       <li>Limpieza</li>
                       <li>Niños</li>
                       <li>Ancianos</li>
                       <li>Cocina</li>
                   </ul>
               </Grid>
               <Grid
                    container
                    direction="column" 
                    alignItems="center"
                    className={classes.stats}
                >
                   {valoracion}
                   {cantidadTrabajos}
                   {referencias}
               </Grid>
           </div>

           
            <Grid container className={classes.footer}>
                <Grid item xs={8} className={classes.iconscontainer}>

                </Grid>
                <Grid item xs={4}>
                    <Button 
                    variant="contained"
                    color="default"
                    className={ classes.cardButton }
                    >
                        Contactar
                    </Button>
                </Grid>
            </Grid>
           

        </div>
    )
}

export default MaidCard
