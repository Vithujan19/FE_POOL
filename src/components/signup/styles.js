import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    content:{
        paddingTop:30,
        paddingLeft: 30,
        paddingRight: 30,
    },
    paper: {
        padding:30,
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    },
    inputField: {
        margin:30,
        padding:12,
        backgroundColor:"#ebebe0",
        borderRadius:15,
    },
    inputs:{
        paddingLeft:20,
        width:'90%',
    },
    heading:{
        textAlign:'center',
        fontWeight:600,
        color:"#ffae00",
    },
    btn:{
        backgroundColor:"#ffae00",
        color:"#FFF",
        '&:hover': {
            backgroundColor:"#ffae00",
        },
        paddingLeft:30,
        paddingRight:30,
        borderRadius:15,
    },
    link:{
        textDecoration:'none',
        fontWeight:600,
        color:"#000",
        '&:hover': {
            color:"#000",
            cursor:'pointer',
            textDecoration:'none',
        },
    }
}));

export default useStyles;