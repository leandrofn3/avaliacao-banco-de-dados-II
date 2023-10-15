import { Request, Response } from "express";
import userService from "../services/user.service";

export class UserController {
    public async index(req: Request, res: Response) {

        const user = await userService.findAll();

        return res.status(200).send({
            success: true,
            message: "Listagem de usuários",
            data: user
        });
    }

    public async create(req: Request, res: Response) {
        try {
            const { name, email, username, password } = req.body;

            const result = await userService.create({
                name, email, username, password
            });

            return res.status(201).send({
                ok: true,
                message: "User successfully created",
                data: result
            });
        } catch (err: any) {
            res.status(500).send({
                ok: false,
                message: err.toString()
            });
        };
    }

    public show(req: Request, res: Response) { }

    public update(req: Request, res: Response) { }

    public delete(req: Request, res: Response) {
        try {
            const {id} = req.params

            return res.status(200).send()

        } catch (err: any) {
            res.status(500).send({
                ok: false,
                message: err.toString()
            });
        }
    }
}