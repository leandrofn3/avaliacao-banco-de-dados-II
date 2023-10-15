import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import cors from "cors"
import * as dotenv from "dotenv"
import userRouter from "./routes/user.routes";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(userRouter);

const port = process.env.PORT

app.listen(3333, () => {
    console.log(`App está rodando na porta ${port}`)
});

app.get("/", (req: Request, res: Response) => {
    return res.status(200).send({ success: true, message: "API - GrowTwitter" });
});