import React from 'react';

import { Container, Grid, Paper } from '@material-ui/core'
const Games = () => {
    return (  
        <Container>
            <h1>About Us</h1>
            <Grid container justify="center">
                <Grid item sm={6}>
                    <Paper>Test</Paper>
                </Grid>
                <Grid item sm={6}>
                    <Paper>Test</Paper>
                </Grid>
                <Grid item sm={6}>
                    <Paper>Test</Paper>
                </Grid>
                <Grid item sm={6}>
                    <Paper>Test</Paper>
                </Grid>
            </Grid>
            
        </Container>
    );
}
 
export default Games;
