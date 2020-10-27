import React from 'react';
import ReactDom from 'react-dom';

const Modal = (props)=>{

    return ReactDom.createPortal(
        <div 
            onClick={props.onDismiss} //Evento para que, em caso de clique na div principal, va para a tela principal
            className="ui dimmer modals visible active">
            
            <div 
                onClick={(e)=>e.stopPropagation()}//Impede a propagação do evento de clique, para não setar o evento da div pai e sair da tela
                className="ui standart modal visible active">
                <div className="header">{props.title}</div>
                <div className="content">
                    {props.content}
                </div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;