import React from 'react'
import Grid from '@material-ui/core/Grid'

export const Introduccion = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                ¿Quienes somos?
            </Grid>
            <Grid item xs={12}>
                <p>
                    iULY es una app cuyo objetivo es hacer más fácil, más rápida y segura el servicio de Limpieza de un hogar particular u oficina.
                </p>
            </Grid>
        </Grid>
    )
}
