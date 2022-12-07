var b=document.body;
var div=document.getElementById("div1");
b.addEventListener("mousemove", function(event){
    x=event.offsetX;
    y=event.offsetY;
    b.style.backgroundColor=`rgb(${x}, ${y}, ${ x - y })`;
    div.innerHTML=`Mouse X: ${x}, Mouse Y: ${y}`;
});