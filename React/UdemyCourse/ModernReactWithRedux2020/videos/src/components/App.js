import React from 'react';
import SeachBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

const KEY = 'AIzaSyC0kJz5-lYdFCjVHXA8Bhetdv09iz6MJWQ';

class App extends React.Component {

    state = { videos: [] };

    onTermSubmit = async (term) => {
        console.log('Pesquisando por: ', term);
        const response = await youtube.get('/search',{
            params: {
                q: term,
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: KEY,
            }
        });

        console.log('Resultado da pesquisa: ',response);
        this.setState({videos: response.data.items});
    };

    render(){
        return (
            <div className="ui container">
                <SeachBar onFormSubmit = {this.onTermSubmit} />
                <p>
                    Vídeos encontrados: {this.state.videos.length}
                </p>
                <VideoList videos={this.state.videos}/>
            </div>
        )        
    }
};

export default App;
