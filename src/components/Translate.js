import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

//key --AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
const options = [
    {
        label:'Africans',
        value: 'af'
    },
    {
        label:'Arabic',
        value:'ar'
    },
    {
        label:'Korean',
        value:'ko'
    },
    {
        label:'Chinese',
        value:'zh'
    },
    {
        label:'French',
        value:'fr'
    },
    {
        label:'Japanese',
        value:'ja'
    }
]
const Translate = () =>{
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    return(
        <div>
            <div className="ui form">
            <div className="field">
                <label>Enter Text</label>
                <input value={text} onChange={(event)=>setText(event.target.value)}/>
            </div>
        </div>
            <Dropdown
                label="Select a Language
                " 
                selected={language}
                onSelectedChange={setLanguage}
                options={options}
            />
            <hr />
            <h3 className="ui header">
                <Convert
                text={text}
                language={language} />
            </h3>
        </div>
    )
}
export default Translate;