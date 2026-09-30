import type { IStudentRepository, StudentData } from "src/interfaces/StudentInterface";
import type { Student as PrismaStudent } from "@prisma/client";
import prisma from "src/prisma/db"

class StudentRepository implements IStudentRepository {
    private db = prisma;

    public async addStudent(data: StudentData): Promise<PrismaStudent> {
        return this.db.student.create({ data })
    }

    public async getAllStudent(): Promise<PrismaStudent[]> {
        return this.db.student.findMany()
    }

    public async deleteStudent(id: number): Promise<boolean> {
        await this.db.student.delete({ where: { id }})
        return true;
    }
}

export default StudentRepository;
