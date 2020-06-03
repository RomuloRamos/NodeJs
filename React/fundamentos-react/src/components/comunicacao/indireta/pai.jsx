import React,{useState} from 'react';
import Filho from './filho';

export default props =>{
    
    const [text, setText] = useState('Valor');
    const [value, setValue] = useState(0);

    function quandoClicar(valueReceived, textReceived) {
        setText(textReceived);
        setValue(valueReceived);
    }
    return (
        <div>
            <h4>{text}: {value}</h4>
            <Filho aoClicar={quandoClicar}></Filho>
        </div>
    );

}