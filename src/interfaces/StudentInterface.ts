import Student from "src/models/Student";

export interface IStudentService {
    addStudent(student: Student): boolean;
    viewAllStudent(): Student[];
    deleteStudent(id: number): boolean;
}
