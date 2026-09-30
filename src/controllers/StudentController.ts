import type { IStudentService, StudentData } from "src/interfaces/StudentInterface";

export class StudentController {
    constructor(private studentService: IStudentService) {}

    public async addStudent(data: StudentData) {
        return this.studentService.addStudent(data);
    }

    public async viewAllStudent() {
        return this.studentService.viewAllStudent();
    }

    public async deleteStudent(id: number) {
        return this.studentService.deleteStudent(id);
    }
}
