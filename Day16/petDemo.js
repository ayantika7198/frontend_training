let map=new Map();

let pets=['dog','cat','dog','cat','turtle','rabbit','rabbit'];

for(let key of pets){
    if(map.has(key)){
        map.set(key, map.get(key)+1);
    }else{
        map.set(key, 1);
    }
}

for(let [key,value] of map){
    console.log(`Pet: ${key}, Count: ${value}`);
}