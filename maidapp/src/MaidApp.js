import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './styles/themeConfig'
import { AppRouter } from './routers/AppRouter'


export const MaidApp = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppRouter/>
            </ThemeProvider>
        </div>
    )
}
