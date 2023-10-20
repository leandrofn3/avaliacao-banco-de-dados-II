export interface CreateTweetDto {
    content: string;
    idUser: string;
}

export interface UpdateTweetDto {
    id: string;
    content: string;
}