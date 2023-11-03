import { NextFunction, Request, Response } from "express";

export async function userCreateMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const { name, email, username, password } = req.body;

        if(!name || !email  || !username  || !password  ){
            return res.status(400).send({
                ok: false,
                massage: "All fields must be filled in"
            });
        }

        next()

    } catch (err) {
        return res.status(500).send({
            massage: err
        });
    };
}