class Employee{
    constructor(id, name, salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }

    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getSalary(){
        return this.salary;
    }
    setId(id){
        this.id=id;
    }
    setName(name){
        this.name=name;
    }
    setSalary(salary){
        this.salary=salary;
    }
}
const employees=[];

function addEmployee(){
    let id=document.getElementById("id").value;
    let name=document.getElementById("name").value;
    let salary=document.getElementById("salary").value;

    let emp=new Employee(id, name, salary);
    employees.push(emp);
    console.log(employees);
    let content=`<table><tr><td>Id</td><td>Name</td><td>Salary</td></tr>`;
    employees.forEach(emp=>
        {
            content+=`<tr><td>${emp.id}</td><td>${emp.name}</td><td>${emp.salary}</td></tr>`;
        });
    content+=`</table>`;
    document.getElementById('result').innerHTML=content;

}
/*
let emp1=new Employee(1243,'Ayantika',35000);
let emp2=new Employee(1278,'Tiya',45000);
let emp3=new Employee(1256,'Rita',20000);
employees.push(emp1);
employees.push(emp2);
employees.push(emp3);
console.log(employees);*/

let employeesCopied=[...employees];
//function sortByName(){
   
//}
function sortBySalary(){
    let employeesCopied=[...employees];
    let sortBySalaries = employeesCopied.sort(
        (a,b)=>(a.salary > b.salary) ?1 :(a.salary<b.salary)?-1:0);
    console.log(sortBySalaries);
    let content=`<table><tr><td>Id</td><td>Name</td><td>Salary</td></tr>`;
    sortBySalaries.forEach(emp=>
        {
            content+=`<tr><td>${emp.id}</td><td>${emp.name}</td><td>${emp.salary}</td></tr>`;
        });
    content+=`</table>`;
    document.getElementById('result').innerHTML=content;
}
function sortByName(){
employeesCopied=[...employees];
let sortByNames = employeesCopied.sort(
    (a,b)=>(a.name > b.name) ?1 :(a.name<b.name)?-1:0);
console.log(sortByNames);
let content=`<table><tr><td>Id</td><td>Name</td><td>Salary</td></tr>`;
    sortByNames.forEach(emp=>
        {
            content+=`<tr><td>${emp.id}</td><td>${emp.name}</td><td>${emp.salary}</td></tr>`;
        });
    content+=`</table>`;
    document.getElementById('result').innerHTML=content;
}
