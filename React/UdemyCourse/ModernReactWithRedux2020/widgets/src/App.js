import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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
    const [selectedColor, setSelectedColor] = useState(options[0]);

    return (
        <div>
            {/* <Search search= {items}/> */}
            <Dropdown
                selected = {selectedColor}
                onSelectedChange={setSelectedColor}
                options = {options} 
            />
        </div>
    );
}

export default App;