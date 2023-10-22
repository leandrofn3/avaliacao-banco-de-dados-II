import { v4 as createUuid } from "uuid";

export class Like {
    private _idLike: string

    constructor(private _idUser: string, private _idTweet: string) {
        this._idLike = createUuid();
    };

    public get idLike() {
        return this._idLike;
    };

    public get idUser() {
        return this._idUser;
    };

    public get idTweet() {
        return this._idTweet
    };

    public get toJson() {
        return {
            idLike: this._idLike,
            idUser: this._idUser,
            idTweet: this.idTweet
        }
    }
}