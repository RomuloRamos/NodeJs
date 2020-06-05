import React from 'react';

import './App.css'

import Primeiro from './components/Primeiro';
import ComParametro from './components/ComParametro';
import ComFilhos from './components/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/Repeticao';
import Condicional from './components/Condicional';
import CondicionalComIf from './components/CondicionalComIf';
import DiretaPai from './components/comunicacao/direta/pai';
import IndiretaPai from './components/comunicacao/indireta/pai';
import Input from './components/form/Input';
import Contador from './components/contador/Contador';
import Mega from './components/Mega/Mega';

export default (props)=> (

    <div className="App">
        <h1>Fundamentos de React</h1>
        <div className="Cards">
            <Card titulo="#01 - Primeiro Componente" color="#92B06A">
                <Primeiro/>
            </Card>
            <Card titulo="#02 - Componente com parâmetros" color="#FF85CB">
                <ComParametro titulo="Esse é o Título" subtitulo="Esse é o subtítulo" />
            </Card>
            <Card titulo="#03 - Componente usando children" color="#D96459">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Lisa</li>
                        <li>Bia</li>
                        <li>Romulo</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#04 - Componente Repetição" color="#008BBA">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="#05 - Componente Condicional" color="#E94C6F">
                <Condicional numero={10} ></Condicional>
            </Card>
            <Card titulo="#06 - Componente Condicional Com If" color="#FA6900">
                <CondicionalComIf numero={11} ></CondicionalComIf>
            </Card>
            <Card titulo="#07 - Comunicação Direta" color="#4298B5">
                <DiretaPai sobrenome="Freitas"></DiretaPai>
            </Card>
            <Card titulo="#08 - Comunicação Indireta" color="#000">
                <IndiretaPai ></IndiretaPai>
            </Card>
            <Card titulo="#09 - Input" color="#9C0F5F">
                <Input></Input>
            </Card>
            <Card titulo="#10 - Contador" color="#293E6A">
                <Contador></Contador>
            </Card>
            <Card titulo="#11 - Mega" color="#73503C">
                <Mega qtNumero={8}></Mega>
            </Card>
        </div>
    </div>

);