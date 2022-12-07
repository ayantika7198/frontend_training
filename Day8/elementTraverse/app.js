let div =document.createElement('div');
div.id='maindiv';
div.className='div1';

let str=document.createTextNode('Div 1');
div.appendChild(str);

const h2Element =  document.createElement('h2');
h2Element.textContent='H2 Element added to Div1';

div.append(h2Element);

document.body.appendChild(div);

let list1= document.createElement('ul');
let arr = ["Home","Products","AboutUs","ContactUs"];

let nodes = arr.map(
    e=>{
       let listitem =  document.createElement('li');
       listitem.textContent= e;
       return listitem;

    }

);
list1.append('List Elements');
list1.append(...nodes);
div.before(list1);