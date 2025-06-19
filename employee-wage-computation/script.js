class Employee 
{
    constructor(empId,empName) 
    {
        this.empId=empId
        this.empName=empName
        this.empAttendance=this.empAttendanceGenerator()
        
    }
    empAttendanceGenerator() 
    {
        return Math.floor(Math.random()*2)===1?"Presnt":"Absent"
    }
}

let employee1=new Employee(1544,"Vinay")
console.log(employee1);
let employee2=new Employee(1545,"Yogeesh")
console.log(employee2);
let employee3=new Employee(1546,"Pavan")
console.log(employee3);
let employee4=new Employee(1547,"Rohan")
console.log(employee4);

