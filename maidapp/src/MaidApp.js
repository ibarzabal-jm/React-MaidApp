import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './styles/themeConfig'
import { AppRouter } from './routers/AppRouter'


export const MaidApp = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <AppRouter/>
            </ThemeProvider>
        </div>
    )
}
