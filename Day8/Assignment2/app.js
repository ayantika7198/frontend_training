document.getElementById('div1').className+=' div2';

function move(){
    let divs=document.getElementById('div1');
    let classnames=divs.className;
    if(classnames.includes('div2')){
        divs.classList.remove('div2');
    }else{
        divs.className+=' div2';
    }
}