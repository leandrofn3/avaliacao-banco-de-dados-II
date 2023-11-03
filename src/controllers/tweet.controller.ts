import { Response, Request } from "express";
import tweetService from "../services/tweet.service";

export class TweetController {
    public async index(req: Request, res: Response) {
        try {
            const tweet = await tweetService.findAll();

            return res.status(tweet.code).send(tweet);

        } catch (err: any) {
            res.status(500).send({
                ok: false,
                message: err.toString()
            });
        }
    }

    public async create(req: Request, res: Response) {
        try {
            const { content, idUser } = req.body;

            if(!content || !idUser){
                return res.status(400).send({
                    ok: false,
                    massage: "The user's content and ID must be passed"
                });
            }

            const result = await tweetService.create({
                content, idUser
            });

            return res.status(201).send({
                ok: true,
                message: "Tweet successfully created",
                data: result
            });
        } catch (err: any) {
            res.status(500).send({
                ok: false,
                message: err.toString()
            });
        };
    };

    public async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const result = await tweetService.delete(id);

            return res.status(result.code).send(result);

        } catch (err: any) {
            res.status(500).send({
                ok: false,
                message: err.toString()
            });
        };
    };

    public async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { content } = req.body;

            const result = await tweetService.update({
                id,
                content
            });

            return res.status(result.code).send(result);

        } catch (err: any) {
            res.status(500).send({
                ok: false,
                message: err.toString()
            })
        };
    }
}