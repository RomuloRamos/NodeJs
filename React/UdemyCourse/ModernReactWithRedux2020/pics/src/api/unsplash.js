import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID MoNK5qDEczDLsUub_mK2JBcHOkzib6pSQCV0LsoycuQ'
    }
});