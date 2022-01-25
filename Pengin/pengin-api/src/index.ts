import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import { exit } from "process";

dotenv.config();
if (!process.env.PORT) {
    console.log(".ENV file not found");
    exit(1);

}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();


app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => { res.json({ 'potato': 123 }) })

app.listen(PORT, () => { console.log(`Listening on port ${PORT} `) })