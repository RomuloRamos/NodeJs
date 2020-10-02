import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostAndUsers = () => async (dispatch, getState) => {
    
    console.log("called fetchPostAndUsers");
    dispatch( { type: 'FETCH_RESULT', payload: false } );
    await dispatch(fetchPosts());    
    const posts = getState().post;
    console.log("fetchPostAndUsers posts: ", posts);
    const userIds = _.uniq(_.map(posts, 'userId'));
    console.log('fetchPostAndUsers userIds = ', userIds);
    await Promise.all(userIds.map((id) => dispatch(fetchUser(id))));
    console.log("fetchPostAndUsers returning...");
    dispatch( { type: 'FETCH_RESULT', payload: true } );
};

export const fetchPosts = ()=> async (dispatch) => {
    console.log("called fetchPosts");
    const response = await jsonPlaceholder.get('/posts');
    console.log("fetchPosts returning...");
    dispatch( { type: 'FETCH_POSTS', payload: response.data } );
};

export const fetchUser = (id)=>{
    console.log("called fetchUser");
    if(!id){
        console.log("Id não veio");
        return { type: ''};
    }
    return async function(dispatch){
        const response = await jsonPlaceholder.get(`/users/${id}`);
        
        console.log("fetchUser returning...");
        dispatch( { type: 'FETCH_USER', payload: response.data } );
    }
};

// export const fetchUser = (id) => {
//     if(!id){
//         console.log("fetchUser called without id!!!");
//         return { type: ''};
//     }
//     return( (dispatch)=>{
//         _fetchUser(id, dispatch);
//     });
// };

// const _fetchUser = _.memoize( async (id, dispatch) => {
//         const response = await jsonPlaceholder.get(`/users/${id}`);
        
//         dispatch( { type: 'FETCH_USER', payload: response.data } );
// });