import React from 'react';
import SeachBar from './SearchBar';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyC0kJz5-lYdFCjVHXA8Bhetdv09iz6MJWQ';

class App extends React.Component {

    onTermSubmit = (term) => {
        console.log('Pesquisando por: ', term);
        youtube.get('/search',{
            params: {
                q: term,
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: KEY,
            }
        });
    };

    render(){
        return (
            <div className="ui container">
                <SeachBar onFormSubmit = {this.onTermSubmit} />
            </div>
        )        
    }
};

export default App;
