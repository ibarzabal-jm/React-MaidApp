import React from 'react'


import { Button } from '@material-ui/core'
import  Hiden  from './Hiden'



export const HomeScreen = () => {
    
    

    return (
        <div>
            <h1>Home</h1>
            <Button variant="contained" color="primary">
              Boton
            </Button>
            <Button disableElevation variant="contained" color="secondary">
              Boton
            </Button>
            <Button variant="contained" color="primary" href='https://google.com' >
              Boton
            </Button>

            <Hiden/>

            
        </div>
    )
}
