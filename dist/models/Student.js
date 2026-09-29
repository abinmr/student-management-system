import User from "@/models/User";
class Student extends User {
    age;
    course;
    constructor(name, age, course) {
        super(name);
        this.age = age;
        this.course = course;
    }
}
export default Student;
//# sourceMappingURL=Student.js.map