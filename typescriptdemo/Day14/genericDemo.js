function print(arg1) {
    console.log(`Argument: ${arg1}`);
}
print(10);
print('Ayantika');
function add(arg1, arg2) {
    if (typeof arg1 == 'number' && typeof arg2 == 'number')
        return arg1 + arg2;
    else if (typeof arg1 == 'string' && typeof arg2 == 'string')
        return arg1.concat(arg2);
}
console.log(add(10, 20));
console.log(add('Ayantika', 'Datta'));
class Generic {
    constructor(map) {
        this.map = map;
    }
    setMap(map) {
        this.map = map;
    }
    getMap() {
        return this.map;
    }
    display() {
        for (let [key, value] of this.map.entries()) {
            console.log(`${key},${value}`);
        }
    }
}
let mp = new Map();
let mp2 = new Map();
mp.set('Ayantika', 119);
mp2.set('Ayantika', true);
let mp3 = new Map();
mp3.set(111, 11111);
let gen1 = new Generic(mp);
let gen2 = new Generic(mp2);
let gen3 = new Generic(mp3);
gen1.display();
gen2.display();
gen3.display();
export {};
