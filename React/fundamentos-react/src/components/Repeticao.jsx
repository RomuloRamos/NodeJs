import React from 'react'

import Products from '../data/products'

export default props=>{

    function getProductsListItem() {

        return Products.map(prod => {
        return <li key={prod.id}>
            {prod.id} - {prod.nome} - R${prod.preco}
            </li>
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProductsListItem()}
            </ul>
        </div>
    );
};