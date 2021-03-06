import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import md5 from 'md5';
import uuid from 'react-uuid';
import { connectDB } from './connect-db';
import path from 'path';

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


async function assembleUserState(user) {
    let db = await connectDB();
    let users = await db.collection(`users`).find().toArray();
    return {
        users,
        session: {authenticated: `AUTHENTICATED`, id: user.id}
    }
}

const authenticationTokens = [];
const authenticateRoute = app => {
    app.post('/authenticate', async (req, res) => {
        let {username, password} = req.body;
        let db = await connectDB();
        let collection = db.collection(`users`);

        let user = await collection.findOne({username: username});
        if (!user) { return res.status(500).send("User not found"); }

        let hash = md5(password);
        let passwordCorrect = hash === user.passwordHash;
        if (!passwordCorrect) { return res.status(500).send("Password Incorrect"); }

        let token = uuid();
        authenticationTokens.push({
            token,
            userID: user.id
        })
        let state = await assembleUserState(user);

        res.send({token, state});
    })
}
authenticateRoute(app);



export const addNewUser = async user => {
    let db = await connectDB();
    let collection = db.collection(`users`);
    await collection.insertOne(user);
};

export const updateUser = async user => {
    let { id, name, email, dob } = user;
    let db = await connectDB();
    let collection = db.collection(`users`);

    if (name) {
        await collection.updateOne({id}, {$set: {name}});
    }
    if (email) {
        await collection.updateOne({id}, {$set: {email}});
    }
    if (dob) {
        await collection.updateOne({id}, {$set: {dob}});
    }
}

export const addFavorite = async favorite => {
    let { userID, videoID, imageUrl, title, description } = favorite;
    let db = await connectDB();
    let collection = db.collection(`users`);
    let check = await collection.findOne({id: userID});
    if (check) {
        await collection.updateOne({id: userID}, {$push: {favorite: {videoID, imageUrl, title, description}}});
    } else {
        res.status(500).send("Error");
    }
}

export const deleteFavorite = async favorite => {
    let { userID, videoID } = favorite;
    let db = await connectDB();
    let collection = db.collection(`users`);
    await collection.updateOne({id: userID}, {$pull: {favorite: {videoID}}});
}

app.post('/user/new', async (req, res) => {
    let user = req.body.user;
    let db = await connectDB();
    let collection = db.collection(`users`);
    let check = await collection.findOne({username: user.username});
    if (check) {
        res.status(500).send("User already exists!");
    } else {
        await addNewUser(user);
        res.status(200).send();
    }
})

app.post('/user/update', async (req, res) => {
    let user = req.body.user;
    await updateUser(user);
    res.status(200).send();
})

app.post('/favorite', async (req, res) => {
    let favorite = req.body.favorite;
    await addFavorite(favorite);
    res.status(200).send();
})

app.delete('/favorite', async (req, res) => {
    let favorite = req.body;
    await deleteFavorite(favorite);
    res.status(200).send();
})