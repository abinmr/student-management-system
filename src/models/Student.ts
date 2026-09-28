import User from "@/models/User";

class Student extends User {
    public getUser(): string {
        return "Student";
    }
}

