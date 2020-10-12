import React from 'react';
import { connect } from 'react-redux';
import {signIn, signOut} from '../actions';

class GoogleAuth extends React.Component {

    // state = {isSignedIn: null};
    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                client_id:"961552831388-2mfppd7n5kb2oiqlfem9g3fsgis0leto.apps.googleusercontent.com",
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();

                // this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn)=>{
        if (isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    }

    onSignIn = ()=>{
        this.auth.signIn();
    }

    onSignOut = ()=>{
        this.auth.signOut();
    };

    renderAuthButton(){
         if(this.props.isSignedIn === null){
            return null;            
         }else if(this.props.isSignedIn){
            return (
                <button onClick={this.onSignOut} className="ui reg google button">
                    <i className="google icon"/>
                    Sing Out
                </button>
            );
         }else {
            return (
                <button onClick={this.onSignIn} className="ui red google button">
                    <i className="google icon"></i>
                    Sign In with Google
                </button>
            );
         }
     }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        );
    }
};

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn};
};

export default connect(mapStateToProps, {signIn, signOut}) (GoogleAuth);