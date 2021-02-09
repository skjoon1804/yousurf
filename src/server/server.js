import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './connect-db';

let port = process.env.PORT || 8888;
let app = express();

app.use(
    cors(),
    bodyParser.urlencoded({extended: true}),
    bodyParser.json()
);
app.listen(port, console.log("Server listening on port", port));

if (process.env.NODE_ENV == `production`) {
    app.use(express.static(path.resolve(__dirname, `../../dist`)));
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve('index.html'));
    });
}

export const addNewUser = async user => {
    let db = await connectDB();
    let collection = db.collection(`users`);
    await collection.insertOne(user);

};

export const updateUser = async user => {
    let { id } = user;
    let db = await connectDB();
    let collection = db.collection(`users`);

    if (email) {
        await collection.updateOne({id}, {$set: {email}})
    }

    // TODO add more
}

app.post('/user/new', async (req, res) => {
    let user = req.body.user;
    await addNewUser(user);
    res.status(200).send();
})

app.post('/user/update', async (req, res) => {
    let user = req.body.user;
    await updateUser(user);
    res.status(200).send();
})