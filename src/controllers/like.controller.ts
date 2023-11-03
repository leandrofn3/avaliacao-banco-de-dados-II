import { Request, Response } from "express";
import likeService from "../services/like.service";

export class LikeController {
    public async index(req: Request, res: Response) {
        try {
            const like = await likeService.findAll();

            return res.status(like.code).send(like);

        } catch (err: any) {
            res.status(500).send({
                ok: false,
                message: err.toString()
            });
        };
    };

    public async create(req: Request, res: Response) {
        try {
            const { idUser, idTweet } = req.body;

            if(!idUser || !idTweet){
                return res.status(400).send({
                    ok: false,
                    massage: "Tweet ID and User ID must be passed"
                });
            }

            const result = await likeService.create({
                idUser, idTweet
            });

            return res.status(201).send({
                ok: true,
                message: "Like successfully created",
                data: result
            });

        } catch (err: any) {
            res.status(500).send({
                ok: false,
                message: err.toString()
            });
        };
    };

    public async delete(req: Request, res: Response){
        try {
            const { id } = req.params;

            const result = await likeService.delete(id);

            return res.status(result.code).send(result);

        } catch (err: any) {
            res.status(500).send({
                ok: false,
                message: err.toString()
            });
        };
    }
}