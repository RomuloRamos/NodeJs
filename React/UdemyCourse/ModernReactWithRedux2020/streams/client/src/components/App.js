import React from 'react';
import { Route, Router } from 'react-router-dom';
import Streams from './streams';
import Header from './Header';
import history from '../history';


const App = ()=>{

    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header></Header>
                    <Route path='/' exact component={Streams.list}/>
                    <Route path='/streams/new' exact component={Streams.create}/>
                    <Route path='/streams/delete' exact component={Streams.delete}/>
                    <Route path='/streams/show' exact component={Streams.show}/>
                    <Route path='/streams/edit/:id' exact component={Streams.edit}/> 
                </div>  
            </Router>
        </div>
    );
};

export default App;