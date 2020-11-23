import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { CardMedia, makeStyles } from '@material-ui/core'


const useStyles = makeStyles( (theme)=> ({
    root:{
        borderRadius: '8px',
        height: '100%',
    },
    cardTitle:{
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
        borderBottom:'1px solid black',
        textAlign:'center',

    },
    cardContent:{
        height:'100%',
    }
  
}) )

const IconCard = ({title, text, icon}) => {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.root} variant="outlined">
                <CardHeader title={title} subheader={icon} className={classes.cardTitle} >
                </CardHeader>
                <CardContent className={classes.cardContent} >
                    <Typography variant="body1">{text}</Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default IconCard
