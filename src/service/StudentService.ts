import type { IStudentService } from "src/interfaces/StudentInterface";
import type Student from "src/models/Student";

class StudentService {
    constructor(private studentRepository: IStudentService) {}


    public async addStudent(student: Student) {
        if (student.age <= 3) {
            throw new Error("Invalid Age");
        }

        return this.studentRepository.addStudent(student);
    }
}

export default StudentService;
