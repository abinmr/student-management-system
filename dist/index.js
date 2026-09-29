import promptSync from "prompt-sync";
const prompt = promptSync();
function main() {
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
                const id = prompt("Enter student id: ");
                const name = prompt("Enter name: ");
                const age = Number(prompt("Enter student age: "));
                const course = prompt("Enter student course: ");
                console.log(`Adding student: ${name}`);
                break;
            case "2":
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
//# sourceMappingURL=index.js.map