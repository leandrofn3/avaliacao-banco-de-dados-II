import { repository } from "../database/prisma.database";
import { CreateLikeDto } from "../dtos/likes.dto";
import { ResponseDto } from "../dtos/response.dto";
import { Like } from "../models/like.model";


class LikeService {
    public async findAll(): Promise<ResponseDto> {
        const data = await repository.like.findMany();
        return {
            code: 200,
            message: "Like succesfully listed",
            data
        }
    };

    public async create(data: CreateLikeDto) {
        const like = new Like(data.idUser, data.idTweet);

        const createLike = await repository.like.create({
            data: {
                idLike: like.idLike,
                idUser: like.idUser,
                idTweet: like.idTweet
            },
        });
        return createLike;
    };

    public async delete(idLike: string): Promise<ResponseDto> {
        const like = await repository.like.findUnique({
            where: {
                idLike
            }
        });

        if (!like) {
            return {
                code: 404,
                message: "Tweet not found"
            };
        };

        await repository.like.delete({
            where: {
                idLike
            }
        });

        return {
            code: 200,
            message: "Like successfully deleted"
        }
    }
};
export default new LikeService();