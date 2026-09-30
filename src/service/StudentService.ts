import type { Student as PrismaStudent } from "@prisma/client";
import type { IStudentRepository, IStudentService, StudentData } from "src/interfaces/StudentInterface";

class StudentService implements IStudentService {
    constructor(private studentRepository: IStudentRepository) {}

    public async addStudent(data: StudentData): Promise<PrismaStudent> {
        if (data.age <= 3) {
            throw new Error("Invalid Age");
        }

        return this.studentRepository.addStudent(data);
    }

    public async viewAllStudent(): Promise<PrismaStudent[]> {
        return this.studentRepository.getAllStudent();
    }

    public async deleteStudent(id: number): Promise<boolean> {
        return this.studentRepository.deleteStudent(id);
    }
}

export default StudentService;
