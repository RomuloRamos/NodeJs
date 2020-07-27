import React from 'react';
import ReactDom from 'react-dom';   

import SeasonDisplay from './SeasonDisplay';
import Spinner from "./Spinner";

class App extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {lat: null};
    }

    //Called immediately after a component is mounted. Setting state here will trigger re-rendering
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (error) => this.setState({errorMessage: error.message})
        );
    }

    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        else if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        else if(!this.state.errorMessage && !this.state.lat){
            return <Spinner message="Please accept location request"/>
        }
    }

    //React says we have to define render method!
    render(){
        return <div className="boder red">
            {this.renderContent()}
        </div>
    }
};

ReactDom.render(
    <App></App>,
    document.querySelector("#root")
);