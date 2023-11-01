import express, { Request, Response } from "express";
import cors from "cors"
import * as dotenv from "dotenv"
import userRouter from "./routes/user.routes";
import TweetRouter from "./routes/tweet.routes"
import LikeRouter from "./routes/like.routes"
import authRouter from "./routes/auth.routes"

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(TweetRouter);
app.use(LikeRouter);
app.use(authRouter)

const port = process.env.PORT

app.listen(3333, () => {
    console.log(`App está rodando na porta ${port}`)
});

app.get("/", (req: Request, res: Response) => {
    return res.status(200).send({ success: true, message: "API - GrowTwitter" });
});