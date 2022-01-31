import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from "./styles";
import img from '../../assets/superhero-opening-trap-door.png'

function Home() {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid container justifyContent="center"
                  alignItems="center" xs={12} sm={5}>
                <img src={img} alt="" style={{width:300, height:'auto'}}/>
            </Grid>
            <Grid item xs={12} sm={7} style={{paddingRight:50}}>
                <Typography variant='h3' className={classes.heading}>
                    Content Heading.
                </Typography>
                <Typography variant='body2' className={classes.bodyText}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making
                </Typography>
                <Typography variant='body2' className={classes.bodyText}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Home;