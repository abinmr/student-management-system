import type { IStudentService } from "src/interfaces/StudentInterface";
import prisma from "src/prisma/db"

type Student = {
    name: string;
    age: number;
    course: string;
}

class StudentRepository {
    private db = prisma;

    public addStudent(student: Student) {
        return this.db.student.create({ data: student })
    }
}

export default StudentRepository;
