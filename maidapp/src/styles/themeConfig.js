import {createMuiTheme} from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette:{
        primary:{
            main: '#26C6DA'
        },
        secondary:{
            main:'#D93B8B'
        },
        warning:{
            main: '#ffd54f'
        }
    },
    typography: {
        fontFamily: [
          'Poppins',
          'sans-serif',
          '-apple-system',
        ].join(','),
    },
})

export default theme;