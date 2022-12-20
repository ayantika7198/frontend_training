export {};

interface Artist{
    id: number;
    name: string;
    bio: string;
}

let art1: Artist;
let art2: Artist;
let art3: Artist;
let art4: Artist;

art1={
    id: 101,
    name: "Ayantika",
    bio: "Senior Artist"
}
art2={
    id: 102,
    name: "Arin",
    bio: "Junior Artist"
}
art3={
    id: 103,
    name: "Sohi",
    bio: "Creative Artist"
}
art4={
    id: 104,
    name: "Tarun",
    bio: "Modern Artist"
}
let arr=[];
arr.push(art1);
arr.push(art2);
arr.push(art3);
arr.push(art4);

console.log(arr);

class Work{
    map: Map<Artist,string[]>;

    constructor(map){
        this.map=map;
    }

    get(): any{
        return this.map;
    }

}

let mp: Map<Artist,string[]>;

mp.set(arr[0],['work1','work2']);
mp.set(arr[1],['work3','work4']);
mp.set(arr[2],['work5','work6']);

let work= new Work(mp);
console.log(work.get());