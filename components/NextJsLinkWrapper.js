import React from 'react';
import Link from 'next/link';

/**
 * Wrapper function that adds allow you to wrap a Link and anchor around whatever component passed
 * https://gist.github.com/herr-vogel/0b5d4f3c28f08dc6cc4a2fd4f7b4a4df
 */
/*
* 
* 
*/
const NextJsLinkWrapper =  ({ className, href, hrefAs, children, prefetch }) => {
    return (  
        <Link href={href} as={hrefAs} prefetch={prefetch}>
            <a className={className}>
                {children}
            </a>
        </Link>

    );
}
 
export default NextJsLinkWrapper;