// Define a class named 'Employee' to encapsulate employee data and wage logic
class Employee {
    constructor(empId, empName) {
        this.empId = empId;                    // Employee ID
        this.empName = empName;                // Employee Name
        this.empAttendance = "";               // Last day's attendance
        this.dailyWage = 0;                    // Last day's wage
        this.dailyWorkingHour = 0;             // Last day's working hours
        this.workingHourPerMonth = 0;          // Cumulative monthly working hours
        this.workingDays=0
    }

    // UC5 - Calculate wage for 20 days
    calculateWage() {
        const WAGE_PER_HOUR = 20;
        const FULL_DAY_HOUR = 8;
        const PART_TIME_HOUR = 4;
        const TOTAL_WORKING_DAYS = 20;
        let wagePerMonth = 0;

        for (let day = 1; day <= TOTAL_WORKING_DAYS; day++) {
            let attendanceType = Math.floor(Math.random() * 3); // 0: Absent, 1: Full-time, 2: Part-time

            switch (attendanceType) {
                case 0:
                    this.dailyWorkingHour = 0;
                    this.empAttendance = "Absent";
                    break;

                case 1:
                    this.dailyWorkingHour = FULL_DAY_HOUR;
                    this.empAttendance = "Present";
                    break;

                case 2:
                    this.dailyWorkingHour = PART_TIME_HOUR;
                    this.empAttendance = "Part-Time";
                    break;

                default:
                  break
            }

            this.dailyWage = this.dailyWorkingHour * WAGE_PER_HOUR;
            this.workingHourPerMonth += this.dailyWorkingHour;
            wagePerMonth += this.dailyWage;
            if (this.dailyWorkingHour > 0) {
                 this.workingDays += 1;
}

        }


        return wagePerMonth;
    }

    // Display employee wage details
    printDetailsOfWage() {
        const totalWage = this.calculateWage();

        console.log(`Employee ID: ${this.empId}, Name: ${this.empName}`);
        console.log(`Worked for ${this.workingHourPerMonth} hours in a month`);
        console.log(`Employee worked : ${this.workingDays} days`);
        
        console.log(`Total Monthly Wage: ₹${totalWage}\n`);
    }
}

// Create employee objects and display their daily wage details
let employee1 = new Employee(1544, "Vinay");
employee1.printDetailsOfWage();

let employee2 = new Employee(1545, "Yogeesh");
employee2.printDetailsOfWage();

let employee3 = new Employee(1546, "Pavan");
employee3.printDetailsOfWage();

let employee4 = new Employee(1547, "Rohan");
employee4.printDetailsOfWage();
