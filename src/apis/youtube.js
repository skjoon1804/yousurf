import axios from 'axios';
const YOUTUBE_TOKEN = `AIzaSyCszVyY2XC9zN1aWs5hDZc6PhO83gDBego`;

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: YOUTUBE_TOKEN,
        type: 'video'
    }
})