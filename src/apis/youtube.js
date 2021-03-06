import axios from 'axios';
const YOUTUBE_TOKEN = `AIzaSyCszVyY2XC9zN1aWs5hDZc6PhO83gDBego`;

export function initialRequest() {
    return (
        axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3/',
            params: {
                part: 'snippet',
                maxResults: 10,
                key: YOUTUBE_TOKEN,
                type: 'video'
            }
        })
    )
}

export function nextRequest(token) {
    return (      
        axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3/',
            params: {
                part: 'snippet',
                maxResults: 10,
                key: YOUTUBE_TOKEN,
                type: 'video',
                pageToken: token
            }
        })
    )
}