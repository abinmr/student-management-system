import promptSync from "prompt-sync";
import StudentRepository from "./repositroy/StudentRepository";
import StudentService from "./service/StudentService";
import { StudentController } from "./controllers/StudentController";
const prompt = promptSync();

async function main() {
    const studentRepository = new StudentRepository();
    const studentService = new StudentService(studentRepository);
    const studentController = new StudentController(studentService);
    while (true) {
        console.log(`
        ===== Student Management System =====

        1. Add Student
        2. View Students
        3. Delete Student
        4. Exit
        `);

        const choice = prompt(`Choose an option: `);

        switch (choice) {
            case "1":
                const name = prompt("Enter name: ");
                const age = Number(prompt("Enter student age: "));
                const course = prompt("Enter student course: ");
                console.log(`Adding student: ${name}`);
                studentController.addStudent({ name, age, course })
                break;
            case "2":
                const data = await studentController.viewAllStudent();
                console.log(data);
                break;
            case "3":
                break;
            case "4":
                console.log("Exiting...");
                return;
            default:
                console.log("Invalid option: Try again");
        }
    }
}


main();
