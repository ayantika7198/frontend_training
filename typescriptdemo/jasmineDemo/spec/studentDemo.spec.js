let {Student,StudentDAO ,StudentService} = require('../src/studentDemo');

let student;
let studentDao;
let studentService;
let arr=[];
beforeEach(function(){
    student1= new Student(119,'Ayantika','ayantika@gmail.com');
    arr.push(student1);
    studentDao=new StudentDAO(arr);
   
    studentService = new StudentService(studentDao);
       
   });

   describe("checking student service impl",function(){

    it("service findAll should list all the students",function(){

        spyOn(studentDao,'findAll').and.returnValue(arr);

        expect(studentService.findAll()).toEqual(arr);

    });


});

describe("checking student service impl",function(){

    it("service findAll should list all the students",function(){

        spyOn(studentDao,'findById').and.returnValue(student);

        expect(studentService.findById(119)).toEqual(student);

    });
});
describe("checking student service impl",function(){

    it("service findAll should list all the students",function(){

        spyOn(studentDao,'remove').and.callFake(function(id){
            for(let i of arr){
                if (i.id==id)
                    arr.splice(i,1);
            }
            return arr.length;
          })
      
          expect(studentService.remove(119)).toEqual(0);

    });
});