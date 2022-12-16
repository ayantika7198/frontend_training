let function1=()=>{
    return "hello world";
}
let function2=(str)=>{
    if(!((typeof str)=='string')) throw new Error("Datatype must be string");
    return str.length;
}
let function3=(str)=>{
    if(!((typeof str)=='string')) throw new Error("Datatype must be string");
    let str2=str.toUpperCase();
    return str2;
}
let alternateCap=(str)=>{
    let ch=str.toUpperCase().split("");
    for(let i=0; i<ch.length; i+=2){
        ch[i]=ch[i].toLowerCase();
    }
    return ch.join("");
}
let isEven=(num)=>{
    if(num%2==0) return true;
    else return false;
}
let isPrime=(num)=> {
             
    let i, flag = true;
 
    for(i = 2; i <= num - 1; i++)
        if (num% i == 0) {
            flag = false;
            break;
        }
         
    if (flag == false)
        return false;
    else
        return true;
}
console.log(alternateCap('ayantika'));
console.log(function1());
console.log(function2('ayantika'));
console.log(function3('ayantika'));

module.exports={function1,function2,function3,alternateCap,isEven,isPrime};