export {}
interface Comparator<T>{
    compareTo(value:T):number;
}

class Person implements Comparator<Person>{
    id: number;
    name: string;
    address: string;

    constructor(id,name,address){
        this.id=id;
        this.name=name;
        this.address=address;
    }
    

    compareTo=(Person)=>{
        if(Person.id===101 || Person.id===102 || Person.id===103 || Person.id===104) return Person.id;
        else return -1;
    }
}

let p1=new Person(101,'Ayantika','Kalyani');
let p2=new Person(0,'Riya','Kolkata');

let comp: Comparator<Person>;

console.log(comp.compareTo(p1));
console.log(comp.compareTo(p2));

