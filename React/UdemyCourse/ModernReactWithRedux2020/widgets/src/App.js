import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components  '
    },
];

const options = [
    {
        label: "Select Color Red",
        value: "red"
    },
    {
        label: "Select Color Green",
        value: "green"
    },
    {
        label: "Select Color Blue",
        value: "blue"
    },
]

const App = (props)=> {
    const [option, setOption] = useState(options[0]);
    return (
        <div>
            <Route path={'/'}>
                <Accordion items={items}/>
            </Route>
            <Route path={'/list'}>
                <Search />
            </Route>        
            <Route path={'/dropdown'}>
                <Dropdown 
                label="Select a color"
                options={options}
                selected = {option}
                onSelectedChange = {setOption}/>    
            </Route>
            <Route path={'/translate'}>
                <Translate />
            </Route>    
        </div>
    );
}

export default App;