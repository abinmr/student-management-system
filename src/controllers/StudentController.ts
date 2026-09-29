import Student from "src/models/Student";
import type { IStudentService } from "src/interfaces/StudentInterface";

export class StudentController {
    constructor(private studentService: IStudentService) {}

    public addStudent(name: string, age: number, course: string) {
        const student = new Student( name, age, course);
        this.studentService.addStudent(student);
        return true;
    }

    public viewAllStudent() {
        return this.studentService.viewAllStudent();
    }

    public deleteStudent(id: number) {
        return this.studentService.deleteStudent(id);
    }
}

