import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tabs, Tab, TabPanel, Grid, makeStyles } from '@material-ui/core';
import NextJsLinkWrapper  from '../NextJsLinkWrapper'


const useStyles = makeStyles({
    tab: {
        "bottom": 0,
        "position": "absolute"
    },
    gridItem: {
        "position": "relative"
    }
});
const Nav = () => {
    const classes = useStyles();
    const [value, setValue] = useState(false);
    const handleChange = (e, n) => {
        setValue(n);
    }
    return (
        <Grid container spacing={2} >
            <Grid item xs={2} >
                <Link href="/"> 
                    <a>
                    <Image src="/assets/imgs/who-rules-logo-md-s-6xx-480.png" width={340} height={246} />   
                    </a>
                </Link>
               

            </Grid>

            <Grid item xs={8} className={classes.gridItem}>
                <Tabs value={value} onChange={handleChange} centered className={classes.tab}>
                    
                    <NextJsLinkWrapper href='/about'>
                        <Tab label="About Us" />    
                    </NextJsLinkWrapper>
                    <NextJsLinkWrapper href='/games'>
                        <Tab label="Games" />
                    </NextJsLinkWrapper>
                    <NextJsLinkWrapper href='/events'>
                        <Tab label="Events" />
                    </NextJsLinkWrapper>
                    
                    <NextJsLinkWrapper href='/store'> 
                        <Tab label="Store (TBD)" />
                    </NextJsLinkWrapper>
                   
                </Tabs>
            </Grid>
            <Grid item xs={2} className={classes.gridItem} >
                <Tabs centered className={classes.tab}>
                <NextJsLinkWrapper href='/login'> 
                    <Tab label="Login" />
                </NextJsLinkWrapper>
                
                </Tabs>
            </Grid>
        </Grid>
    );
}

export default Nav;