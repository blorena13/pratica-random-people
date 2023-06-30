import express, {json} from "express";
import "express-async-errors";
import peopleRouter from "./routers/people.routes";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = parseInt(process.env.PORT) || 5000; // para a porta ter o tipo number.
app.use(json());

app.use(peopleRouter);

app.listen(port, () => {
    console.log("servidor rodando!");
})