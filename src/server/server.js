import express from 'express';
import cors from 'cors';
const { google } = require('googleapis');

let app = express();

require('dotenv').config();

google.youtube('v3').search.list({
    key: process.env.YOUTUBE_TOKEN,
    part: 'snippet',
    q: 'korea'
}).then((res) => {
    console.log(res.data.items);
}).catch((err) => console.log(err));




