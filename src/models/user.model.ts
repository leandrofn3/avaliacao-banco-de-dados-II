export class User {
    constructor(
        private _id: string,
        private _name: string,
        private _email: string,
        private _username: string,
        private _password: string
    ) { }

    public getId() {
        return this._id;
    };

    public getName() {
        return this._name;
    };

    public getEmail() {
        return this._email;
    };

    public getUsername() {
        return this._username;
    };

    // public getPassword() {
    //     return this._password;
    // };

    public toJson() {
        return {
            id: this._id,
            name: this._name,
            email: this._email,
            username: this._username
        };
    };
}