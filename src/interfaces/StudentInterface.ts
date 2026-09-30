import type { Student as PrismaStudent } from "@prisma/client";

export type StudentData = {
    name: string;
    age: number;
    course: string;
}

export interface IStudentService {
    addStudent(data: StudentData): Promise<PrismaStudent>;
    viewAllStudent(): Promise<PrismaStudent[]>;
    deleteStudent(id: number): Promise<boolean>;
}

export interface IStudentRepository {
    addStudent(data: StudentData): Promise<PrismaStudent>;
    getAllStudent(): Promise<PrismaStudent[]>;
    deleteStudent(id: number): Promise<boolean>;
}
