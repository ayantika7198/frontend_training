const {function1, function2, function3,alternateCap,isEven,isPrime}= require('../src/stringDemo');


let str="ayantika";
describe("Testing String functions",function(){
    it("must return hello world",function(){
        expect(function1()).toEqual('hello world');
    });
    it("must return length",function(){
        expect(function2(str)).toEqual(8);
    });
    it("must return length",function(){
        expect(function2(str)).toEqual(8);
    });
    
    it("must return in UpperCase",function(){
        expect(function3(str)).toEqual('AYANTIKA');
    });

    it("function alternateCap() should return alternate uppercase",function(){

        expect(alternateCap("javascript")).toEqual("jAvAsCrIpT");
       
       });
       it("function stringLength(nonStr) should throw Error",function(){

        expect(function2(123444)).toThrow();  
    
       });
       it("function stringUpperCase(nonStr) should throw Error",function(){

        expect(function3(123444)).toThrow();    
    
       });
       it("function isEven(num) should check if number is even",function(){

        expect(isEven(4)).toBeTruthy();
    
       });
       

it("function isPrime(num) should check if number is not prime",function(){
    expect(isPrime(4)).toBeFalsy();

   });

   it("function isPrime(num) should check if number is prime",function(){
    expect(isPrime(13)).toBeTruthy();
   
   });



});