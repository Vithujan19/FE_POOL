import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    heading:{
        fontFamily: 'Sigmar One',
        fontStyle: 'cursive',
        color:'rgba(94, 93, 93, 0.863)',

    },
    bodyText:{
        color:'#7c807d',
        paddingTop:10,
        textAlign:'justify'
    },
}));

export default useStyles;