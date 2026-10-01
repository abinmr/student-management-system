import promptSync from "prompt-sync";
import StudentRepository from "./repositroy/StudentRepository";
import StudentService from "./service/StudentService";
import { StudentController } from "./controllers/StudentController";
import { green, yellow, red, blue } from "console-log-colors";
const prompt = promptSync();

async function main() {
    const studentRepository = new StudentRepository();
    const studentService = new StudentService(studentRepository);
    const studentController = new StudentController(studentService);
    while (true) {
        console.log("\n");
        console.log(`
        ${blue("===== Student Management System ===== ")}

        ${green("1. Add Student")}
        ${yellow("2. View Students")}
        ${red("3. Delete Student")}
        4. Exit 
        `);

        const choice = prompt(`Choose an option: `);

        switch (choice) {
            case "1":
                const name = prompt("Enter name: ").trim();
                const age = Number(prompt("Enter student age: "));
                const course = prompt("Enter student course: ").trim();
                if (!name || isNaN(age) || !course) {
                    console.log("Error: All fields are required and Age must be a number");
                    break;
                }

                try {
                    const newStudent = await studentController.addStudent({ name, age, course });
                    console.log("Student Added Successfully", newStudent);
                } catch (err: any) {
                    console.log("Failed adding student", err.message);
                }
                break;
            case "2":
                try {
                    const data = await studentController.viewAllStudent();
                    if (data.length === 0) {
                        console.log("\x1b[31m%s\x1b[0m", "No students founds");
                    } else {
                        console.table(data);
                    }
                } catch (err: any) {
                    console.log(err);
                }
                break;
            case "3":
                const id = Number(prompt("Enter the id of the student: "));
                try {
                    const success = await studentController.deleteStudent(id);
                    if (success) {
                        console.log("Successfully student user");
                    }
                } catch (err: any) {
                    console.log("Error deleteing student");
                }
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
