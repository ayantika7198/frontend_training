

function change(){
    let list=document.getElementsByName("input");

for(let i=0;i<list.length;i++){
    let elm=list[i].value ;
    if(elm.checked){
        console.log('checked');
    elm.style.backgroundColor="orange" ;
    }
}
}