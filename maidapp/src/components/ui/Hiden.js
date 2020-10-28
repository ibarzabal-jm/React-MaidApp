import React from 'react'
import { Typography, withWidth, Hidden, Button } from '@material-ui/core'

const Hiden = (props) => {
    return (
        <div>
            <Typography variant="h6" color="initial">
                Ancho: {props.width}
            </Typography>

            <Hidden smDown>
                <Button variant="contained" color="primary">
                  sm
                </Button>
            </Hidden>
        </div>
    )
}

export default withWidth()(Hiden)
