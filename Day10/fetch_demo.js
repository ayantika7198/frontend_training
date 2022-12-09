
/*fetch("https://jsonplaceholder.typicode.com/users")
.then(function(res){
    return res.json();
})
.then(function(data){
    console.log(data);
})
.catch(
    function(err){
        console.log(err)
    }
);*/

fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then(res=>{
    res.map(user=>console.log(`Name: ${user.name}   Email: ${user.email}`));
})
.catch(
    function(err){
        console.log(err);
    }
);


fetch_async();

async function fetch_async(){
    let resp=await fetch("https://jsonplaceholder.typicode.com/users");
    let data= await resp.json();
    data.map(user=>console.log(`Id: ${user.id}  Name: ${user.name}`));
}

let data1={
    id: 1,
    name: "Ayantika",
    email: "ayantika@gmail.com"
}

let data2={
    id: 2,
    name: "Shreya",
    city: "Kolkata"
}

fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "POST",
    body: JSON.stringify(data1),
    headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(resp=>resp.json())
.then(json=>console.log(json))
.catch(err=>console.log(err));


post_async();

async function post_async(){
    let resp= await fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        body: JSON.stringify(data2),
        headers: {"Content-type": "application/json; charset=UTF-8"}});

let data=await resp.json();
console.log(data);
}