import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faHistory } from '@fortawesome/free-solid-svg-icons'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { Grid, makeStyles, Typography } from '@material-ui/core'

import fondo from '../../../images/limpiar.jpeg'
import IconCard from './IconCard'

const useStyles = makeStyles( (theme) => ({
    root: {
        background: `linear-gradient( rgba(0,0,0,0.5), rgba(0, 0, 0, 0.5) ), no-repeat center center, url(${fondo})`,
        backgroundSize:'cover', 
        color:'white',
    },
    beneficios: {
        display:'flex',
        padding: theme.spacing(5),
    },
}))

const JoinUs = () => {

    const classes = useStyles();

    const beneficios = [ 
        {   title:'Velocidad',
            text:'Buscá trabajo de manera inmediata' , 
            icon: <FontAwesomeIcon  size="3x" icon={faClock} /> ,
        },
        {   title:'Seguridad',
            text:'Te brindamos la mejor covertura de salud y seguridad' , 
            icon: <FontAwesomeIcon size="lg" icon={faShieldAlt} /> ,
        },
        {   title:'Historial',
            text:'Conocé el historial de tu empleador a través de su perfil y evaluaciones iULY' , 
            icon: <FontAwesomeIcon size="lg" icon={faClock} /> ,
        },
        {   title:'Organizacion',
            text:'Podrás gestionar y organizar tus trabajos y actividades' , 
            icon: <FontAwesomeIcon size="lg" icon={faCalendarCheck} /> ,

        },
        {   title:'Gratuito',
            text:'Registro totalmente gratuito' , 
            icon: <FontAwesomeIcon size="lg" icon={faDollarSign} /> ,
        },
        {   title:'Versatil',
            text:'Podrás elegir la forma de cobrar según tu conveniencia, Efectivo, Tarjeta o MercadoPago' , 
            icon: <FontAwesomeIcon size="lg" icon={faWallet} /> ,
        },

    ]

    return (
        <>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
                alignContent="center"
                className={classes.root}
            >
                <Grid item xs={12}>
                    <Typography variant="h3" align="center" color="inherit"> Se parte de Nuestro Servicio</Typography>
                </Grid>
                {
                    beneficios.map(( {title,text, icon} ) =>(
                        <Grid item xs={4} md={3} key={title} className={classes.beneficios} >
                            <IconCard
                                title={title}
                                text={text}
                                icon={icon}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}

export default JoinUs
