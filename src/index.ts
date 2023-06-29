import express, {json} from "express";
import "express-async-errors";
import peopleRouter from "routers/people.routes";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(json());

app.use(peopleRouter);

app.listen(port, () => {
    console.log("servidor rodando!");
})