const employee1={
    employeeId: "E01",
    name: "Ayantika",
    dept:{
        id: "D01",
        name: "FSE",
        mgr_id: "M01"
    },
    salary: 45000,
    datOfJoin: new Date("2020-09-20"),

getNumberOfServiceYears: function(){
  
    return 2022 - this.datOfJoin.getFullYear();


  }
}
  console.log(employee1);
  val=employee1.getNumberOfServiceYears();
  console.log(`Number Of Service Years: ${val}\n`);

  const employees = [

    { id:'E01',name:'Ayantika',dept:'FSE',salary:45000  },
    {id:'E02',name:'Rita',dept:'ADM', salary:30000},
    {id:'E03',name:'Rayan',dept:'CDE', salary:50000},
    {id:'E04',name:'Rohan',dept:'IOT', salary: 40000}
 ];
 console.log("Employee Details\n");
 for(let i=0;i<employees.length;i++){
 
     console.log(` ${employees[i].id} ${employees[i].name} ${employees[i].dept} ${employees[i].salary}`);
 }