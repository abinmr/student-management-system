import type { IStudentService, StudentData } from "src/interfaces/StudentInterface";

export class StudentController {
    constructor(private studentService: IStudentService) {}

    public addStudent(data: StudentData) {
        return this.studentService.addStudent(data);
    }

    public viewAllStudent() {
        return this.studentService.viewAllStudent();
    }

    public deleteStudent(id: number) {
        return this.studentService.deleteStudent(id);
    }
}
