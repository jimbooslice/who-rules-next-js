import React, {useState} from 'react';

import Image from 'next/image';
import {  Tabs, Tab, TabPanel, Grid, makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    tab:{
        "bottom":0,
        "position":"absolute"
    },
    gridItem:{
        "position":"relative"
    }
});
const Nav = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const handleChange = (e, n) =>{
        setValue(n);
    }
    return (
        <Grid container spacing={2} >
            <Grid item xs={2} >
                
                    <Image src="/assets/imgs/who-rules-logo-md-s-6xx-480.png" width={340} height={246} />
               
            </Grid>

            <Grid item xs={8} className={classes.gridItem}>
                <Tabs value={value} onChange={handleChange} centered className={classes.tab}>
                    <Tab label="Item One" />
                    <Tab label="About Us" />
                    <Tab label="Contact" />
                </Tabs>
            </Grid>
            <Grid item xs={2}  className={classes.gridItem} >
                <Tabs centered className={classes.tab}>
                    <Tab label="Login" />

                </Tabs>
            </Grid>
        </Grid>
    );
}

export default Nav;