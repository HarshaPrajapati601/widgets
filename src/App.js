import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from  './components/Route';
import Header from './components/Header';

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
];
const options = [
    {
        label: 'The color Red',
        value: 'red'
    },
    {
        label: 'The color Blue',
        value: 'blue'
    },
    {
        label: 'The color Green',
        value: 'green'
    }
];


const App = () =>{
    const [selected, setSelected] = useState(options[0]);
    const [showdropddown, setShowDropdown] = useState(false);
    return(
        <div>
        <Header />
        <Route path="/">
            <Accordion items={items} />
        </Route>
        <Route path="/list">
            <Search />
        </Route>
        <Route path="/dropdown">
            <Dropdown 
                label ="Select a color"
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
            />
        </Route>
        <Route path="/translate">
            <Translate />
        </Route>
    </div>
    )
}
export default App;