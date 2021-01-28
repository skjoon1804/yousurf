require('dotenv').config();
const { google } = require('googleapis');

google.youtube('v3').search.list({
    key: process.env.YOUTUBE_TOKEN,
    part: 'snippet',
    q: 'korea'
}).then((res) => {
    console.log(res.data.items);
}).catch((err) => console.log(err));




