import User from "@/models/User";

class Student extends User {
    constructor(
        name: string,
        public age: number,
        public course: string,
    ) {
        super(name);
    }
}

export default Student;
