import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from "./styles";

function About() {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={12} sm={6} style={{padding:40}}>
                <Typography variant='h3' className={classes.heading}>
                    About Us
                </Typography>
                <Typography variant='body2' className={classes.bodyText}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making
                </Typography>
                <Typography variant='body2' className={classes.bodyText}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making
                </Typography>
                <Typography variant='body2' className={classes.bodyText}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making
                </Typography>
            </Grid>
            <Grid container justifyContent="center"
                  alignItems="center" xs={12} sm={6} style={{paddingTop:40}}>
                <video src="https://youtu.be/jyakpJW0iII" autoPlay="true" loop width="500" height="300" controls style={{borderRadius:15}} />
                {/*    <source src="https://youtu.be/jyakpJW0iII" type="video/mp4"/>*/}
                {/*</video>*/}
            </Grid>
        </Grid>
    )
}

export default About;