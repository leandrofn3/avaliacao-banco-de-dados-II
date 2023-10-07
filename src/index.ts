import { PrismaClient } from "@prisma/client";
import express from "express";

// const repository = new PrismaClient();

const app = express();
app.use(express.json());

app.get("/", )

app.listen(3333, ()=> {
    console.log("App está rodando na porta 3333")
});