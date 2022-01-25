import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import { exit } from "process";
import { connect, mongo } from "mongoose";
import { UserModel } from "./schemas/UserSchema";

dotenv.config();
if (!process.env.PORT) {
    console.log(".ENV file not found");
    exit(1);

}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();
const mongo_db = 'mongodb://localhost:27017/Pengin';

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => { res.json({ 'potato': 123 }) })
app.get('/getUser', async (req, resp) => {
    await connect(mongo_db);
    const data = await UserModel.findOne();
    console.log(data);
    resp.send(data);

})

app.get('/AddUser/:userName', (req, res) => {
    connect(mongo_db);
    const new_user = new UserModel({ name: req.params.userName });
    new_user.save();
    res.send("Saving User")
})

app.get('/AddReading/:mangaId', async (req, resp) => {
    await connect(mongo_db);
    var user_data = await UserModel.findOne();
    user_data?.favorite_manga?.push(req.params.mangaId);
    user_data?.save();

    resp.send('Manga Saved');
});

app.listen(PORT, () => { console.log(`Listening on port ${PORT} `) })