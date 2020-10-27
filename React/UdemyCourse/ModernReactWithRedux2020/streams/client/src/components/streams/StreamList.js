import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {featchStreams} from '../../actions';

class StreamList extends React.Component {
    
    componentDidMount(){
        this.props.featchStreams();
    }

    renderAdmin(strem){
        if(strem.userId === this.props.currentUserId){
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${strem.id}`} className="ui button primary">
                        Edit
                    </Link>
                    <Link to={`/streams/delete/${strem.id}`} className="ui button negative">
                        Delete
                    </Link>
                </div>
            );
        }
    }

    renderList(){
        return this.props.streams.map((stream)=>{
            
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera"/>
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            );
        })
    }

    renderCreate(){
        if(this.props.isSignedIn){
            return(
                <div style={{textAlign: 'right'}}>
                    <Link to="/streams/new" className="ui button primary">
                        Create Stream
                    </Link>
                </div>
            );
        }
    }   

    render(){
        console.log("streams: ", this.props.streams);
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div> 
                {this.renderCreate()}
            </div>
        );
    }
};

const mapStateToProps = (state)=>{
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {featchStreams})(StreamList);