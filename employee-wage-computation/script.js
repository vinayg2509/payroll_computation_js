// Define a class named 'Employee' to encapsulate employee data and wage logic
class Employee {
    //! UC1 - Check Attendance
    constructor(empId, empName) {
        this.empId = empId;                  // Employee ID
        this.empName = empName;              // Employee Name
        this.empAttendance = "";             // Attendance status for the day
        this.dailyWage = 0;                  // Calculated wage for the day
        this.workingHour = 0;                // Total working hours for the day
    }

    //! UC4 - Calculate wage using switch-case on random attendance type
    calculateWage() {
        // Generate a random number to simulate attendance
        let attendanceType = Math.floor(Math.random() * 3); // 0: Absent, 1: Full-time, 2: Part-time

        // Constants for wage calculation
        const WAGE_PER_HOUR = 20;
        const FULL_DAY_HOUR = 8;
        const PART_TIME_HOUR = 4;

        // Determine working hours and attendance type using switch-case
        switch (attendanceType) {
            case 0:
                this.workingHour = 0;
                this.empAttendance = "Absent";
                break;
            case 1:
                this.workingHour = FULL_DAY_HOUR;
                this.empAttendance = "Full-time";
                break;
            case 2:
                this.workingHour = PART_TIME_HOUR;
                this.empAttendance = "Part-time";
                break;
            default:
                this.workingHour = 0;
                this.empAttendance = "Unknown";
        }

        // Return the calculated daily wage
        return this.workingHour * WAGE_PER_HOUR;
    }

    //Display employee wage details
    printDetailsOfWage() {
        // Trigger wage calculation before displaying
        const wage = this.calculateWage();

        // Log employee details and wage to the console
        console.log(`Employee ID: ${this.empId}, Name: ${this.empName}`);
        console.log(`Attendance Type: ${this.empAttendance}`);
        console.log(`Working Hours: ${this.workingHour}`);
        console.log(`Total Daily Wage: ₹${wage}\n`);
    }
}

//Create employee objects and display their daily wage details
let employee1 = new Employee(1544, "Vinay");
employee1.printDetailsOfWage();

let employee2 = new Employee(1545, "Yogeesh");
employee2.printDetailsOfWage();

let employee3 = new Employee(1546, "Pavan");
employee3.printDetailsOfWage();

let employee4 = new Employee(1547, "Rohan");
employee4.printDetailsOfWage();
