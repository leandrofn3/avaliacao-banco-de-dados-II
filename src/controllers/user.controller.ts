import { Request, Response } from "express";

export class UserController {
    public index(req: Request, res: Response) {
        return res.status(200).send({
            success: true,
            message: "Listagem de usuários",
            data: []
        });
    }

    public create(req: Request, res: Response) { }

    public show(req: Request, res: Response) { }

    public update(req: Request, res: Response) { }

    public delete(req: Request, res: Response) { }
}