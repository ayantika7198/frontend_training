
getPosts();
function getPosts(){

    fetch("post.json")
    .then(res=>res.json())
    .then(res=>{
        res.map(post=>console.log(`Title: ${post.title}  Description: ${post.body}`));
    }
    ).catch(function(err){
        console.log(err)
    });
}


let post4={
    title: "Post 4",
    body: "This is post four"
}

postPosts();

function postPosts(){
fetch("post.json",{
    method: "POST",
    body: JSON.stringify(post4),
    headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(resp=>resp.json())
.then(json=>console.log(json))
.catch(err=>console.log(err));
}