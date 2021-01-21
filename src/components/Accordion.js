import React, { useState } from 'react';

const Accordion =  ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null);
    //usetate is used to set the state in functional components
    //helper function in functional components
    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const renderedItems = items.map((item,index) =>{
        const active = index == activeIndex ? 'active' : ''
        return(
            <React.Fragment key={item.title}>
                <div  onClick={()=>onTitleClick(index)}
                className={`title ${active}`}>
                    <i className="dropdown icon">
                    </i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })
    return (
        <div className="ui styled accordion">
           {renderedItems}
           <h4>{activeIndex}</h4>
        </div>
    )
}
export default Accordion;