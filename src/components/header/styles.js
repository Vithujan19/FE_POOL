import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
        paddingLeft: 50,
        fontFamily: 'Dancing Script',
        fontSize: 35,
        fontWeight:600,
        color:"#ffae00",
    },
    link:{
        textDecoration:'none',
        color:"#ffae00",
        '&:hover': {
            color:"#ffae00",
            textDecoration:'none',
            cursor:"pointer"
        },
    },
    listItem: {
        marginRight: 50,
        textDecoration:'none',
        fontFamily:'Patrick Hand',
        fontWeight:600,
        fontSize: 20,
        color:"#616161",
        '&:hover': {
            color:"#ffae00",
            textDecoration:'none',
            cursor:'pointer'
        },
    },
    menuSign:{
        backgroundColor:"#000000ff",
        opacity: 0.5,
        color:"#FFFFFF",
        textDecoration:'none',
        fontFamily:'Patrick Hand',
        fontWeight:600,
        fontSize: 18,
        borderRadius:15,
        '&:hover': {
            backgroundColor:"#ffae00",
        },
    },
    toolbar:{
        padding:15
    },
}));

export default useStyles;