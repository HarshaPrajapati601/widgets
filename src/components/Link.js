import React from 'react';

const Link = ({className, href, children}) => {
    const onClick = (event) =>{
        if(event.metaKey || event.ctrlKey){
            return;
        }
        //no page reload
        event.preventDefault();
        //to update the url
        window.history.pushState({},'',href);
        //event sent to Route component to tell url has changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }
    return(
        <a onClick={onClick} className={className} href={href}>
            {children}
        </a>
    );
}
export default Link;