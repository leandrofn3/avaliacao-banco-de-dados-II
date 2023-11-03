import { NextFunction, Request, Response } from "express";

export async function idMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params

        if (!id) {
            return res.status(400).send({
                ok: false,
                massage: "ID was not passed by parameter"
            });
        }

        next()

    } catch (err) {
        return res.status(500).send({
            massage: err
        })
    }
}