import React ,{useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [result, setResult] = useState([]);
    console.log("results",result)
    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });
            setResult(data.query.search);
        }
        if(term && !result.length){
            search();
            console.log("here")
        }else{
            const timeOutId = setTimeout(() => {
                if(term){
                    search();
                }
               },500)
               return () => {
                   clearTimeout(timeOutId);
               }
        }   
    },[term]);
    const renderedResults = result.map((obj) => {
        return(
            <div key={obj.pageid} className="item">
                <div className="right floated content">
                    <a
                      className="ui button"
                      href={`https://en.wikipedia.org?curid=${obj.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {obj.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: obj.snippet}}></span>
                </div>
            </div>
        )
    })
    return(
        <div className="ui form">
            <div className="field">
                <label>Enter Search Term</label>
                <input 
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="input" />
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search;