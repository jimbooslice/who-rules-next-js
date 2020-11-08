import React from 'react'
import Footer from './Footer';
import Header from './Header/Header';
/*
    
*/
//https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/
const Layout = (props) => {
    return (
        <main>
            <Header />
                {props.children}
            <Footer />
        </main>

    );
}

export default Layout;
<Header />
