import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import Streams from './streams';

const App = ()=>{

    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={Streams.list}/>
                    <Route path='/streams/new' exact component={Streams.create}/>
                    <Route path='/streams/delete' exact component={Streams.delete}/>
                    <Route path='/streams/show' exact component={Streams.show}/>
                    <Route path='/streams/edit' exact component={Streams.edit}/> 
                </div>  
            </BrowserRouter>
        </div>
    );
};

export default App;