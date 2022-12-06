const employee1={
    employeeId: "E01",
    name: "Ayantika",
    department:{
        id: "D01",
        name: "FSE",
        mgr_id: "M01"
    },
    salary: 45000,
    datOfJoin: new Date("2020-09-20"),

    project:{
        id: "P01",
        name: "Cog-Project",
        startDate: new Date("2021-06-16"),
        duration: "2 years"
    }
}

for (let i in employee1){

        
    if (i === 'department' || i === 'project'){
        console.log(`${i} Details:`);
     for(let j in employee1[i]){
         console.log(`${j}: ${employee1[i][j]}`);
     }
 }
 else{

     console.log(`${i} : ${employee1[i]}`);
 }
}

 

