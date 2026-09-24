class User {
    constructor(protected id: number, protected name: string) {
    }

    public getUser(): string {
        return "User";
    }
}

export default User;
