import React, { useState } from 'react';

export default props => {

    const[numeros, setNumeros] = useState(Array(props.qtNumero).fill(0))
    
    function gerarNumeroSemRepetir(array) {
        const min = 1;
        const max = 60;
        const novoNumero = parseInt(Math.random() * (max - min)) + min;
        return array.includes(novoNumero) ? gerarNumeroSemRepetir(array) : novoNumero;
    }
    
    function gerarNumeros(){
        const novoArray = Array(props.qtNumero)
            .fill(0)
            .reduce((a, e) => {
                const novoNumero = gerarNumeroSemRepetir(a);
                console.log(a, e, novoNumero);
                return [...a, novoNumero]
            }, [])
            .sort((a,b) => a - b);
        setNumeros(novoArray);

        }

    return(
       <React.Fragment>
           <h3>Mega</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar numeros</button>
       </React.Fragment>
    );
}