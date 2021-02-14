import { MongoClient } from 'mongodb';
let url = (process.env.NODE_ENV === `production`) 
            ? `mongodb+srv://admin:admin@cluster0.mylms.mongodb.net/yousurfdb?retryWrites=true&w=majority`
            : `mongodb://localhost:27017/yousurfdb`;   

let db = null;
export async function connectDB() { 
    if (db) return db;
    let client = await MongoClient.connect(url, { useNewUrlParser: true });
    db = client.db();
    return db;
}
connectDB();