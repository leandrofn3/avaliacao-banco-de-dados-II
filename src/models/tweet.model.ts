import { v4 as createUuid } from "uuid";

export class Tweet {
    private _idTweet: string
    public retweet?: string[]
    public like?: string[]
    constructor(
        public content: string,
        public idUser: string,
    ) {
        this._idTweet = createUuid();
        this.like = [];
        this.retweet = [];
    };

    public get id() {
        return this._idTweet
    }

    public toJson() {
        return {
            id: this._idTweet,
            content: this.content,
            idUser: this.idUser
        }
    }
}