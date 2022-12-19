let arr=[];


class Student{
    constructor(id, name, city, clearedExam){
        this.id=id;
        this.name=name;
        this.city=city;
        this.clearedExam=clearedExam;
    }
}

function getTotalMarks(map){
    for(let [key,value] of map){
        let initial = 0;
    let sum= value.reduce(
    (acc, curr) => acc + curr,
    initial
    );

        console.log(`Name: ${key.name}, Total Marks: ${sum}`);
    }
}

fetch("./assets/students.json")
.then(res =>res.json())
.then(res=>{arr=[...res];
    //console.log(res);
    console.log(arr);

    let map=new Map();
  let st1=new Student(101,'Ayantika','Kalyani',true);
  let st2=new Student(102,'Rita','Kolkata',false);
  //console.log(arr);
    for(let i of arr){
        map.set(i,[60]);
    }
    //console.log(map);
  arr.push(st1);
  arr.push(st2);
  let marks=[80,90];
  for(let i of arr){
    if(map.has(i)){
        let mark2=[...marks,Math.floor(Math.random() * 101)];
        map.set(i,mark2);
    }else{
        map.set(i,marks);
    }
  }

  console.log(map);

  getTotalMarks(map);



res.map(student=>console.log(`${student.id}, ${student.name}, ${student.city}, ${student.clearedExam}`));}
)
.catch(function(err){console.log(err)});

//console.log(arr);
let val2={
    "id":123,
    "name": "Ayantika",
    "city": "Kolkata",
    "clearedExam": true
   
  }

async function postData(){
    try{
  let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify(val2),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  });
  let data = await response.json();
  console.log(data);
    }
    catch(err){console.log(err);}

  }
 // postData();

  
