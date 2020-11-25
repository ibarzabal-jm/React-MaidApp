import React from 'react'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles( (theme)=> ({
    root:{
        display:'flex',
        flexFlow:'column wrap',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        borderRadius: '8px',
        border: '3px solid white'
        
    },
    icon: {
        alignSelf:'flex-start center',
        padding: theme.spacing(2),
    },
    title:{
        color: '#fff',
        padding: theme.spacing(2),
        textAlign:'center',
    },
  
}) )

const IconCard = ({title, text, icon}) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <div className={classes.icon}>{icon}</div>
                <div className={classes.title}>{title} <hr/></div>
                <div>{text}</div>
            </div>
        </>
    )
}

export default IconCard
