import { Public } from "@prisma/client/runtime/library";
import { repository } from "../database/prisma.database";
import { ResponseDto } from "../dtos/response.dto";
import { CreateUserDto, UpdateUserDto } from "../dtos/user.dto";
import { User } from "../models/user.model";

class UserService {
    public async findAll(): Promise<ResponseDto> {
        const data = await repository.user.findMany();
        return {
            code: 200,
            message: "Users successfully listed",
            data,
        };
    }

    //Criar usuário
    public async create(data: CreateUserDto) {
        const user = new User(data.name, data.email, data.username, data.password);

        const createdUser = await repository.user.create({
            data: {
                idUser: user.id,
                name: user.name,
                email: user.email,
                userName: user.username,
                password: user.password,
            },
        });
        return createdUser;
    };

    //Deletar usuário
    public async delete(idUser: string): Promise<ResponseDto> {
        const user = await repository.user.findUnique({
            where: {
                idUser,
            },
        });

        console.log(user, "passou aqui")
        if (!user) {
            return {
                code: 404,
                message: "User not found"
            };
        };
        //deletar o usuário
        await repository.user.delete({
            where: {
                idUser
            },
        });

        return {
            code: 200,
            message: "User successfully deleted"
        };
    };

    public async update(data: UpdateUserDto): Promise<ResponseDto> {

        const user = await repository.user.findUnique({
            where: {
                idUser: data.id
            }
        })

        if (!user) {
            return {
                code: 404,
                message: "User not found"
            };
        };

        const updatUser = await repository.user.update({
            where: {
                idUser: data.id
            },
            data: {
                name: data.name,
                email: data.email,
                userName: data.username,
                password: data.password
            },
        });

        return {
            code: 200,
            message: "User successfully updated",
            data: updatUser
        };
    };
};


export default new UserService();

//57:25