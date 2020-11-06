import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
class Button extends React.Component{
    
    //Replaced by consumer aproach
    // static contextType = LanguageContext;

    renderConsumerReceivedLang(language){
        return (language === 'english' ? 'Submit' : 'Voorleggen');
    }

    renderConsumerReceivedColor(receivedValue){
        return(
            <button className={`ui button ${receivedValue}`}>
                {/* {text} */}
                <LanguageContext.Consumer>
                    {({language}) => this.renderConsumerReceivedLang(language)}
                </LanguageContext.Consumer>
            </button>
        );
    }

    render(){
        
        //Replaced by consumer aproach
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
        return(
            // <button className="ui button primary">
            //     {/* {text} */}
            //     <LanguageContext.Consumer>
            //         {(receivedValue) => this.renderConsumerReceivedLang(receivedValue)}
            //     </LanguageContext.Consumer>
            // </button>
            <ColorContext.Consumer>
                {(receivedColor) => this.renderConsumerReceivedColor(receivedColor)}
            </ColorContext.Consumer>
        );
    }
}

export default Button;