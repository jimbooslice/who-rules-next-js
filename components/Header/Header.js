import React from 'react';
import { AppBar, Container, makeStyles } from '@material-ui/core';
import Nav from './Nav';
const useStyles = makeStyles(t => ({
    root:{
        "padding-bottom":".507em",
        "position": "relative"
    }
})
);
const Header = () => {
    const classes = useStyles();
    return (
        <Container>
            <AppBar
                title="Home"
                position="static"
                className={classes.root}
            >
               
                <Nav/>
            </AppBar>



        </Container>

    );
}

export default Header;
