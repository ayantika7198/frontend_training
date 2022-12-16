class Student{
    constructor(id, name, email){
        this.id=id;
        this.name=name;
        this.email=email;
    }
}
class StudentDAO{
    constructor(studentArr){
        this.studentArr=studentArr;
    }
    findAll=()=> console.log('calling student findAll method');
    findById=(id)=>console.log('calling id method');
    remove=(id)=>null;
}
class StudentService{
    constructor(dao){
        this.dao=dao;
    }

    findAll=()=>this.dao.findAll();
    findById=(id)=>this.dao.findById(id);
    remove=(id)=>this.dao.remove(id);
}
module.exports={Student,StudentDAO,StudentService};