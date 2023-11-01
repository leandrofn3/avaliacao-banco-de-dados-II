import { NextFunction, Request, Response } from "express";

function authMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const { token } = req.headers;
        if (!token) {
            return res.status(401).send({
                message: "Authentication token fail"
            });
        };

        next()
        
    } catch (err) {
        return res.status(500).send({
            message: err
        });
    };
}

export default authMiddleware;