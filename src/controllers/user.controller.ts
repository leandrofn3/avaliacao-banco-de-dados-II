import { Request, Response } from "express";
import userService from "../services/user.service";

export class UserController {
    public async index(req: Request, res: Response) {

        const user = await userService.findAll();

        return res.status(user.code).send(user);
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

    public async delete(req: Request, res: Response) {
        try {
            const { id } = req.params

            
            const result = await userService.delete(id);
        
            return res.status(result.code).send(result);

        } catch (err: any) {
            res.status(500).send({
                ok: false,
                message: err.toString()
            });
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const {name, email, username, password} = req.body;

            
            const result = await userService.update({
                id,
                name,
                email,
                username,
                password
            });
        
            return res.status(result.code).send(result);

        } catch (err: any) {
            res.status(500).send({
                ok: false,
                message: err.toString()
            });
        }
    }
}