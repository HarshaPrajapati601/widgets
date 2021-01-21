import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Covert = ({language, text}) => {
    const [transalted, setTranslation] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);
    useEffect(() => {
        const timerId = setTimeout(()=>{
            setDebouncedText(text);
        },500);
        return () => {
            clearTimeout(timerId);
        }
    },[text]);

    useEffect(()=>{
       //making a helper function
       const doTranslation = async () => {
           const {data} = await  axios.post('https://translation.googleapis.com/language/translate/v2',{},{
                params:{
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                    },
            });
            setTranslation(data.data.translations[0].translatedText)
        };
        doTranslation();
    },[language, debouncedText]);

    return(       
        <div>
            <div className="ui header">
                {transalted}
            </div>
        </div>
    )
}
export default Covert;