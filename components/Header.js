import React from 'react';
import { AppBar, Container, Tabs, Tab } from '@material-ui/core';
import Image from 'next/image';
const Header = () => {
    return (  
        <Container>
          <AppBar 
            title={ <Image src="/assets/imgs/who-rules-logo-md-s-6xx-480.png" width={128} height={120}/> }
            position="static" 
            
        />
        <Tabs >
            <Tab label="Item One"/>
            <Tab label="About Us"/>
            <Tab label="Contact"/>
        </Tabs>
      

        </Container>
       
    );
}

export default Header;
 