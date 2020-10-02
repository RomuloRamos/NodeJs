import React from 'react';
import {connect} from 'react-redux';


class UserHeader extends React.Component {
    
    render(){
        const {user} = this.props;
        console.log("render Props UserHeader: ",user)
        if(!user) return null;

        return (
            <div className="header">
                {user.name}                
            </div>
        );
    }
};

const MapToProps = (state, ownProps)=> {
    console.log('called mapToProps of UserHeader');
    return {user: state.user.find(user => user.id === ownProps.userId)}
}

export default connect(MapToProps)(UserHeader);