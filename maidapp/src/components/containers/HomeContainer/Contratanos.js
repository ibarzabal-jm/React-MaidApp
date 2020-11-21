import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Grid, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles( (theme) => ({
    root: {

    },
    beneficios: {
        display:'flex',
        
    },
}))

const Contratanos = () => {

    const classes = useStyles();

    const beneficios = [ 
        {   title:'Velocidad',
            text:'Personalizá tu pedido de limpieza con absoluta rapidez' , 
            icon: <FontAwesomeIcon icon={faCoffee} /> ,
        },
        {   title:'Seguridad',
            text:'Todos cuentan con experiencia comprobada verificados por nuestro propio equipo.' , 
            // icon: <DesktopMacIcon style={{ color: "white" }}/> ,  
        },
        {   title:'Historial',
            text:'Conocé al personal doméstico a través de sus perfiles, referencias y evaluaciones iULY.' , 
            // icon: <StorageIcon style={{ color: "white" }} /> ,
        },
        {   title:'Entrevistá',
            text:'Puedes hablar con nuestro personal de forma individual mediante un chat seguro.' , 
            // icon: <StorageIcon style={{ color: "white" }} /> ,
        },
    ]

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            alignContent="center"
        >
            <Grid item xs={12}>
                <Typography variant="h3" align="center"> Contratá Nuestros Servicio</Typography>
            </Grid>
            {
                beneficios.map(( {title, text, icon} ) =>(
                    <Grid item xs={4} md={3} key={title} className={classes.beneficios} >
                        {icon}
                        <Typography variant="h5">{title}</Typography>
                        <Typography variant="body1">{text}</Typography>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default Contratanos
