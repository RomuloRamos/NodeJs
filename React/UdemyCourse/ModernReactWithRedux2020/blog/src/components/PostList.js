import React from 'react';
import {connect} from 'react-redux';
import {fetchPostAndUsers} from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component{

    componentDidMount(){
        console.log('called componentDidMount of PostList');
        this.props.fetchPostAndUsers();
    }

    renderList(){
        return this.props.posts.map(post=>{
            return(
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user"/>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>
                </div>
            );
        })
    }

    render(){
        console.log("render Props PostList: ",this.props.posts)
        return(
            <div className="ui relaxed divided list">{this.renderList()}</div>
        );
    }

};

const mapToProps = (state)=>{
    console.log('called mapToProps of PostList');
    if(state.result){
        console.log('called mapToProps of PostList ->',state.user);
        return {posts:state.post};
    } 
    return {posts: []}

};

export default connect(mapToProps,{fetchPostAndUsers})(PostList);