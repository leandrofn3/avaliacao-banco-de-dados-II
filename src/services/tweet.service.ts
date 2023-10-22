import { repository } from "../database/prisma.database";
import { ResponseDto } from "../dtos/response.dto";
import { CreateTweetDto, UpdateTweetDto } from "../dtos/tweet.dto";
import { Tweet } from "../models/tweet.model";

class TweetService {
    public async findAll(): Promise<ResponseDto> {
        const data = await repository.tweet.findMany()
        return {
            code: 200,
            message: "tweet successfully listed",
            data
        };
    };

    public async listFromUser(idUser: string) {
        const user = await repository.user.findUnique({
            where: {
                idUser: idUser, 
            },
        });

        if(!user){
            return {
                code: 404,
                message: "User not found"
            };
        }

        const tweet = await repository.tweet.findMany({
            where: {
                idUser,
            }
        });

        return {
            code: 200,
            message: "tweet successfully listed",
            data: tweet
        };
    }

    public async create(data: CreateTweetDto) {
        const tweet = new Tweet(data.content, data.idUser);

        const createTweet = await repository.tweet.create({
            data: {
                idTweet: tweet.id,
                content: tweet.content,
                idUser: tweet.idUser
            },
        });
        return createTweet;

    };

    public async delete(idTweet: string): Promise<ResponseDto> {
        const tweet = await repository.tweet.findUnique({
            where: {
                idTweet,
            },
        });

        if (!tweet) {
            return {
                code: 404,
                message: "Tweet not found"
            };
        };

        await repository.tweet.delete({
            where: {
                idTweet
            },
        });

        return {
            code: 200,
            message: "Tweet successfully deleted"
        }
    }

    public async update(data: UpdateTweetDto): Promise<ResponseDto> {
        const tweet = await repository.tweet.findUnique({
            where: {
                idTweet: data.id
            },
        });

        if (!tweet) {
            return {
                code: 404,
                message: "Tweet not found"
            };
        };

        const updateTweet = await repository.tweet.update({
            where: {
                idTweet: data.id
            },
            data: {
                content: data.content
            }
        });

        return {
            code: 200,
            message: "Tweet successfully updated",
            data: updateTweet
        };
    };
}

export default new TweetService(); 