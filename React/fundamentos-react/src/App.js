import React from 'react';

import './App.css'

import Primeiro from './components/Primeiro';
import ComParametro from './components/ComParametro';
import ComFilhos from './components/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/Repeticao';
import Condicional from './components/Condicional';
import CondicionalComIf from './components/CondicionalComIf';

export default (props)=> (

    <div className="App">
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro/>
        </Card>
        <Card titulo="#02 - Componente com parâmetros">
            <ComParametro titulo="Esse é o Título" subtitulo="Esse é o subtítulo" />
        </Card>
        <Card titulo="#03 - Componente usando children">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Lisa</li>
                    <li>Bia</li>
                    <li>Romulo</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#04 - Componente Repetição">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="#05 - Componente Condicional">
            <Condicional numero={10} ></Condicional>
        </Card>
        <Card titulo="#06 - Componente Condicional Com If">
            <CondicionalComIf numero={11} ></CondicionalComIf>
        </Card>
    </div>

);