import React, {useState} from 'react';

export default (orops) => {

    const [name, setName]  = useState("Digite seu nome");

    return(
        <React.Fragment>
            <h3>{name}</h3>
            <input type="text" value={name} 
            onChange={event => setName(event.target.value)}
            />
        </React.Fragment>
    );

}