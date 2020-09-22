import React, { useEffect, useState, useRef } from 'react';

const Dropdown = ({options, selected, onSelectedChange, label}) => {

    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) =>{
            console.log('BODY CLICK');
            console.log('ref = ', ref.current);
            console.log('event = ', event.target);
            if(ref.current.contains(event.target)){
                console.log('not call setOpen()');
                return
            }
            console.log('calling setOpen()');
            setOpen(false);
        };
        document.body.addEventListener('click', onBodyClick);
        
        return (()=>{
            document.body.removeEventListener('click', onBodyClick);
        });

    }, []);

    const renderedOptions = options.map((option) => {
        if(option.value === selected.value) return null;
        return(
            <div 
                key = {option.value} 
                className = "item"
                onClick = {()=>{
                    console.log('ITEM CLICK');
                    onSelectedChange(option);
                }}
            >
                {option.label}
            </div>
        );
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick = {() => {
                        console.log('DROPDOWN CLICK');
                        setOpen(!open);
                    }} 
                    className={`ui selection dropdown ${open ? 'visible active': ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition': ''}`}>{renderedOptions}</div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;