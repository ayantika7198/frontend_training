let mp=new Map();

mp.set('String1',101);
mp.set('String2',102);
mp.set('String3',103);
mp.set('String4',104);
mp.set('String5',105);

class MapClass{
    constructor(map){
        this.map=map;
    }

    checkKey=(val)=>{
        if(this.map.has(val)) return this.map.get(val);
        else return "No Value";
    };
}

let mpClass=new MapClass(mp);
console.log(mpClass.checkKey('String4'));
console.log(mpClass.checkKey('Ayantika'));

console.log(mp.size);
mp.delete('String1');
console.log(mp.size);
console.log(mpClass.checkKey('String1'));


