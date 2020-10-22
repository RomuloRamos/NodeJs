import React from 'react';
import {connect} from 'react-redux';
import {featchStream} from '../../actions';

class StreamEdit extends React.Component {
 
    componentDidMount(){
        this.props.featchStream(this.props.match.params.id);
    }

    render(){
        if(this.props.stream){
            return (
                <div>{this.props.stream.title}</div>
            );
        }
        return (
            <div>Loading...</div>
        );  
    }
}

const mapToProps = (state, ownProps) =>{
    return {
        stream: state.streams[ownProps.match.params.id]
    };
};

export default connect(mapToProps, {featchStream})(StreamEdit);