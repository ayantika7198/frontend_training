function showValue(){
    document.getElementById("btn1")
    .addEventListener("click", function(event) {
    event.preventDefault();
    if (event.altKey && event.shiftKey) {
        document.getElementById("result").innerHTML="Hello Ayantika";
    }
});
}