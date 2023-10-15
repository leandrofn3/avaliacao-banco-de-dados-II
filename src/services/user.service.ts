import { repository } from "../database/prisma.database";
import { ResponseDto } from "../dtos/response.dto";
import { CreateUserDto } from "../dtos/user.dto";
import { User } from "../models/user.model";

class UserService {
    public async findAll() {
        const data = await repository.user.findMany();
        return data;
    }

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
        })
        return createdUser;
    }

    public async delete(idUser: string): Promise<ResponseDto> {
        const user = await repository.user.findUnique({
            where: {
                idUser
            }
        });

        if (!user) {
            return {
                code: 404,
                message: "User not found"
            }
        }

        return {
            code: 200,
            message: "User successfully deleted"
        }
    }
}

export default new UserService();

//57:25