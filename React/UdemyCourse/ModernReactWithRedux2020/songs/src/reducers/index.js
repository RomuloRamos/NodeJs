import {combineReducers} from 'redux';

const songsReducer = () =>{
    return [
        {title: 'Musica 1', duration:'4:05'},
        {title: 'Musica 2', duration:'2:30'},
        {title: 'Musica 3', duration:'3:15'},
        {title: 'Musica 4', duration:'1:45'},
        
    ];
};

const selectedSongReducer = (selectSong=null, action) =>{
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});