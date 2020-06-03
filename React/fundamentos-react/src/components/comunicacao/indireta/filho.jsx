import React from 'react';

export default props => {

    return(
        <div>
            <button onClick={() =>{
                props.aoClicar(Math.random(),"Valor gerado")
            }}>Alterar</button>
        </div>

    );

};