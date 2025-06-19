// Define a class named 'Employee'
class Employee 
{
    //!UC1-CheckAttendance
    // Constructor method that gets called when a new Employee object is created
    constructor(empId, empName) 
    {
        // Assign the empId parameter to the empId property of the object
        this.empId = empId;

        // Assign the empName parameter to the empName property of the object
        this.empName = empName;

        // Call the empAttendanceGenerator method and assign its result to empAttendance property
        this.empAttendance = this.empAttendanceGenerator();

        // Call the empAttendanceGenerator method and assign its result to partTimeAttendance property
        this.partTimeAttendance=this.empAttendanceGenerator()
    }

    // Method to randomly generate "Present" or "Absent" for employee attendance
    empAttendanceGenerator() 
    {
        // Generate a random number 0 or 1. If 1, return "Present", otherwise return "Absent"
        return Math.floor(Math.random() * 3) === 1 ? "Present" : "Absent";
    }

    //!UC3-PartTimeWage
    //Method to calculate daily wage based on employee attendance
    calculateWage() {
    const WAGE_PER_HOUR = 20;       // Fixed wage rate per hour
    const FULL_DAY_HOUR = 8;        // Number of working hours in a full day
    const PART_TIME_HOUR=4         // Number of working hours in parttime
    let dailyWage=0
    let partTimeWage=0
   
    if (this.empAttendance === "Present") {
            dailyWage = WAGE_PER_HOUR * FULL_DAY_HOUR;
        } else {
            dailyWage = 0;
        }

        if (this.partTimeAttendance === "Present") {
            partTimeWage = WAGE_PER_HOUR * PART_TIME_HOUR;
        } else {
            partTimeWage = 0;
        }

        return dailyWage + partTimeWage;
}

// Method to print employee details along with their daily wage
    printDetailsOfWage() {
          
        console.log(`Employee ID: ${this.empId}, Name: ${this.empName}`);
        console.log(`Full-time Attendance: ${this.empAttendance}`);
        console.log(`Part-time Attendance: ${this.partTimeAttendance}`);
        console.log(`Total Daily Wage: Rs${this.calculateWage()}\n`)
}

}

// Create a new Employee object with ID 1544 and name "Vinay"
let employee1 = new Employee(1544, "Vinay");
// Print the details of employee1 to the console
employee1.printDetailsOfWage()

// Create a new Employee object with ID 1545 and name "Yogeesh"
let employee2 = new Employee(1545, "Yogeesh");
// Print the details of employee2 to the console
employee2.printDetailsOfWage()

// Create a new Employee object with ID 1546 and name "Pavan"
let employee3 = new Employee(1546, "Pavan");
// Print the details of employee3 to the console
employee3.printDetailsOfWage()

// Create a new Employee object with ID 1547 and name "Rohan"
let employee4 = new Employee(1547, "Rohan");
// Print the details of employee4 to the console
employee4.printDetailsOfWage()

