import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
class App extends React.Component {

    state = {language: "english", color:"red"};
    
    onLanguageChange = (language)=>{
        this.setState({language})
        if(language === 'english'){
            this.setState({color: 'blue'})
        }
        else{
            this.setState({color: 'red'})
        }
    }

    render(){
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i className="flag us" onClick={()=>this.onLanguageChange('english')}/>
                    <i className="flag nl" onClick={()=>this.onLanguageChange('dutch')}/>
                </div> 
                <ColorContext.Provider value = {this.state.color}>
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate/>
                    </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        );

    }
}

export default App;