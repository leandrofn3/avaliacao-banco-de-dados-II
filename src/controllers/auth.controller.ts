import { Request, Response } from "express";
import userService from "../services/user.service";
import { ResponseDto } from "../dtos/response.dto";
import { v4 as tokenGerate } from "uuid";

export class AuthController {

    public async create(req: Request, res: Response) {
        const { email, password } = req.body;

        const user = await userService.getByEmailAndPassword(email, password);

        if (!user) {
            return res.status(401).send({ massage: "Email or password wrong" });
        };

        const token = tokenGerate();
        const update = await userService.update({ ...user, token: token, id: user.idUser });

        const response: ResponseDto = {
            code: 200,
            message: "Login success",
            data: { token: token },
        };

        if (update.code === 200) {
            return res.status(response.code).send(response)
        }
    }

    public async delete(req: Request, res: Response) {

        const { token } = req.headers;

        const user = await userService.getByToken(token as string);

        if (user) {
            const response: ResponseDto = {
                code: 200,
                message: "Logout success",
            };
            const update = userService.update({ ...user, token: null, id: user.idUser });

            return res.status(response.code).send(response);
        }

        const response: ResponseDto = {
            code: 404,
            message: "Logout not found",
        };
        return res.status(response.code).send(response)
    }
}