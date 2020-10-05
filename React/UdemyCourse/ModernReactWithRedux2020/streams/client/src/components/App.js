import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';

const PageOne = ()=>{
    
    return (
        <div>
            PageOne
            <Link to="/pagetwo">Navigate to Page Two</Link>
        </div>
    );

};

const PageTwo = ()=>{
    
    return (
        <div>
            PageTwo
            <button>Click Me!</button>
            <Link to="/">Navigate to Page One</Link>
        </div>
    );

};

const App = ()=>{

    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={PageOne}/>
                    <Route path='/pagetwo' exact component={PageTwo}/> 
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;