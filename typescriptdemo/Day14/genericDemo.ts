export {}

function print<T>(arg1: T):void{
    console.log(`Argument: ${arg1}`);
}

print<number>(10);
print<string>('Ayantika');

function add<T>(arg1: T, arg2: T){
    if(typeof arg1=='number' && typeof arg2=='number') return arg1+arg2;
    else if(typeof arg1=='string' && typeof arg2=='string') return arg1.concat(arg2);

}

console.log(add<number>(10,20));
console.log(add<string>('Ayantika','Datta'));

class Generic<K,V>{
    private map: Map<K,V>;
    constructor(map){
        this.map=map;
    }
    setMap(map){
        this.map=map;
    }
    getMap(){
        return this.map;
    }

    display(){
        for (let [key, value] of this.map.entries()) {
            console.log(`${key},${value}`);
          }
    }

}

let mp=new Map<string,number>();
let mp2=new Map<string,boolean>();
mp.set('Ayantika',119);
mp2.set('Ayantika',true);
let mp3=new Map<number,number>();
mp3.set(111,11111);

let gen1=new Generic<string,number>(mp);
let gen2=new Generic<string,boolean>(mp2);
let gen3=new Generic<number,number>(mp3);

gen1.display();
gen2.display();
gen3.display();