import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = ({search}) => {

    const [term, setTerm] = useState('');//<-Como eu deixei vazio, isso gera um erro na linha 37, ao chamar o metodo search()
    const [debouncedTerm, setDebouncedTerm] = useState(term); 
    const [results, setResults] = useState([]);

    // console.log(results);

    useEffect(()=>{
        const timerId = setTimeout(()=>{
            console.log("setDebouncedTerm:",term);
            setDebouncedTerm(term);
        },1000);

        return(()=>{
            clearTimeout(timerId);
        });
    }, [term]);
  
    useEffect(()=>{
        const search = async () =>{
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                },
            });
            // console.log("setResults: ",data.query.search);
            setResults(data.query.search);
        };
        if(debouncedTerm)search();
    },[debouncedTerm]);

    // useEffect( ()=>{
    //     // console.log("Chamando função de useEffect para registrar a função de reação ao proximo RENDER");

    //     // return ()=>{
    //     //     console.log("Função que foi registrada com o useEffect");
    //     // };
    //     console.log('useEffect called!');
    //     const search = async () =>{
    //         const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
    //             params: {
    //                 action: 'query',
    //                 list: 'search',
    //                 origin: '*',
    //                 format: 'json',
    //                 srsearch: term,
    //             },
    //         });
    //         setResults(data.query.search);
    //     };
    //     if(term && !results.length) {
    //         search();
    //     } else {    
    //         const timeOutId = setTimeout(()=>{
    //             if(term  ) search();
    //         },1000);
    
    //         return ()=>{
    //             clearTimeout(timeOutId);
    //         };
    //     }

    // }, [term]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a 
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
                </div>
            </div>
        );
    }) 

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label> Enter Seach Term</label>
                    <input
                        value={term}
                        onChange={e=>setTerm(e.target.value)} 
                        type="text" 
                        className="input"/>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
}

export default Search;