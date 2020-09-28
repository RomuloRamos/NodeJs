import React from 'react';
import {connect} from 'react-redux';


const SongDetail = ({song})=>{
    console.log("SongDetail props: ", song)

    if(!song){
        return(
            <div>
                <strong>Song Detail</strong>
                <p>Select a song</p>
            </div>
        );
    }
    return(
        <div>
            <strong>Song Detail</strong>
            <h3>Details for:</h3>
            <p>
                Title: {song.title}
                <br/>
                Duration:{song.duration}
            </p>
        </div> 
    );

};

const mapStateToProps = (state)=>{
    return (
        {
            song:state.selectedSong,
        }
    );
}

export default connect(mapStateToProps)(SongDetail);

