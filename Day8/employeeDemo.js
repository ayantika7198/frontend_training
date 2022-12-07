class Employee{
    constructor(id, name, address, department, mngr_id){
        this.id=id;
        this.name=name;
        this.address=address;
        this.department=department;
        this.mngr_id=mngr_id;
    }

    get id(){
        return this._id ;
    }

    set id(val){
        this._id=val;
    }

    get name(){
        return this._name;
    }

    set name(val){
        this._name=val;
    }

    get address(){
        return this._address;
    }

    set address(val){
        this._address=val;
    }

    get department(){
        return this._department;
    }

    set department(val){
        this._department=val;
    }

    get mngr_id(){
        return this._mngr_id;
    }

    set mngr_id(val){
        this._mngr_id=val;
    }

    disp(){
        console.log(`${this.id} ${this.name} ${this.address} ${this.department} ${this.mngr_id}`);
    }

}

let emp1= new Employee('E01','Ayantika','Kalyani','FSE','M01');
let emp2=new Employee();
emp2.id='E02';
emp2.name='Ritu';
emp2.address='Dumdum';
emp2.department='ADM';
emp2.mngr_id='M02';

emp1.disp();
emp2.disp();
