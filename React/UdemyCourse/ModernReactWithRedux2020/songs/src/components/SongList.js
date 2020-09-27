import React, { Component } from 'react';
import {connect} from 'react-redux';

class SongList extends Component {
    
    render() {
        return <div>SongList</div>;
    }
}

const mapStateToProps = () => {
    
}

export default connect()(SongList);