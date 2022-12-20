let art1;
let art2;
let art3;
let art4;
art1 = {
    id: 101,
    name: "Ayantika",
    bio: "Senior Artist"
};
art2 = {
    id: 102,
    name: "Arin",
    bio: "Junior Artist"
};
art3 = {
    id: 103,
    name: "Sohi",
    bio: "Creative Artist"
};
art4 = {
    id: 104,
    name: "Tarun",
    bio: "Modern Artist"
};
let arr = [];
arr.push(art1);
arr.push(art2);
arr.push(art3);
arr.push(art4);
console.log(arr);
class Work {
    constructor(map) {
        this.map = map;
    }
    get() {
        return this.map;
    }
}
let mp=new Map();
mp.set(arr[0], ['work1', 'work2']);
mp.set(arr[1], ['work3', 'work4']);
mp.set(arr[2], ['work5', 'work6']);
let work = new Work(mp);
console.log(work.get());
export {};
