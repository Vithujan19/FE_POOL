import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    heading:{
        fontFamily: 'Sigmar One',
        fontStyle: 'cursive',
        color:'rgba(94, 93, 93, 0.863)',
        paddingLeft:60,
    },
    bodyText:{
        color:'#7c807d',
        paddingLeft:60,
        paddingTop:10,
        textAlign:'justify'
    },
}));

export default useStyles;