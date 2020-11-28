import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, CardHeader, makeStyles } from '@material-ui/core';


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
    },
    headerStart: {
        backgroundColor:'cyan',
        width: '100%',
        height: '160px',
    },
    avatar:{
        zIndex: 100,
        width: '120px',
        height: '120px',
        position: 'relative',
        marginTop: '-75px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '100px',
        border: '10px solid #fff',
        transitionDuration: '0.4s',
        transitionProperty: 'transform',
        '&:hover':{
            transform: 'scale(2.2)',
            border:'3px solid black'
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
    }
}) )

const MaidCard = ({ maid }) => {

    const {
        id,
        nombre,
        edad,
        nacionalidad,
        img,
        modalidad,
        trabajos,
        alta,
        update,
        valoracion
    } = maid

    const classes = useStyles();
    
    return (
        <div className={classes.card}>
           <div className={classes.headerStart}></div>
           <img className={classes.avatar} src={img}></img>
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
               </div>
           </div>

           <div className={classes.footer}>

           </div>


        </div>
    )
}

export default MaidCard
