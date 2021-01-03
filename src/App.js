import React from 'react';
import Accordion from './components/Accordion';

//static array
const items = [
    {
        title: 'WHat is React?',
        content: 'React is a Front ENd Javascript Framework'
    },
    {
        title: 'Why Use React?',
        content: 'React is a favourite Js framework'
    }
]

const App = () =>{
    return(
       <Accordion items={items}/>
    )
}
export default App;