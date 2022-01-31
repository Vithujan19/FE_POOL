import React from 'react';
import { Grid, InputBase, Paper, Typography, Button, Link } from '@material-ui/core';
import useStyles from "./styles";

function Signup() {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid xs={false} sm={6} className={classes.content}>
                <Paper className={classes.paper}>
                    <Typography variant="h5" className={classes.heading}>
                        Create Account
                    </Typography>
                    <div className={classes.inputField}>
                        <i className="fas fa-user"></i>
                        <InputBase placeholder="Username" className={classes.inputs}></InputBase>
                    </div>
                    <div className={classes.inputField}>
                        <i className="fas fa-unlock-alt"></i>
                        <InputBase placeholder="Password" type="password" className={classes.inputs}></InputBase>
                    </div>
                    <div className={classes.inputField}>
                        <i className="fas fa-unlock-alt"></i>
                        <InputBase placeholder="Confirm Password" type="password" className={classes.inputs}></InputBase>
                    </div>
                    <div className={classes.inputField}>
                        <i className="fas fa-envelope"></i>
                        <InputBase placeholder="Email" className={classes.inputs}></InputBase>
                    </div>
                    <div className={classes.inputField}>
                        <i className="fas fa-phone-volume"></i>
                        <InputBase placeholder="Phone Number" className={classes.inputs}></InputBase>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Button
                            className={classes.btn}
                            variant="text"
                        >
                            Sign Up
                        </Button>
                    </div>
                    <div style={{ textAlign: 'center',paddingTop:10 }}>
            <span to="/">
              Already have an account ? <Link className={classes.link} href="/login">Login</Link>
            </span>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Signup