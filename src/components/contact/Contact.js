import React from 'react';
import {
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@material-ui/core';
import useStyles from "./styles";

function createData(name, phone, email) {
    return { name, phone, email };
}

const rows = [
    createData('Hoks James', '07756889945', 'kova@gmail.com',),
    createData('Donals sandres', '07756889945', 'kova@gmail.com'),
    createData('Eclair Sedcr', '07756889945', 'kova@gmail.com'),
    createData('Couckine Cupcake', '07756889945', 'kova@gmail.com'),
    createData('Ginger Bruce', '07756889945', 'kova@gmail.com'),
];

function Contact() {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={12} sm={10} style={{padding:40}}>
                <Typography variant='h3' className={classes.heading}>
                    Contact Us
                </Typography>
                <Typography variant='body2' className={classes.bodyText}>
                    You can contact us at any time
                </Typography>
                <TableContainer component={Paper} style={{paddingTop:20}}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Phone Number</TableCell>
                                <TableCell align="right">E-Mail</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.phone}</TableCell>
                                    <TableCell align="right">{row.email}</TableCell>\
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Typography variant='h5' className={classes.bodyText}>
                    If any feedback or Complaints on anything, you can contact us via our chat application
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Contact;