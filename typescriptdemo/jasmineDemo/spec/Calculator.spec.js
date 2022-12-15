const Calculator = require('../src/calculator');

let calculator;
beforeEach(function(){
  console.log('creating calculator object');
     calculator=new Calculator();

    
});



describe("Calculator test suite",function(){

    it("add function test",function(){
 
        expect(calculator.add(3,4)).toEqual(7);


    });
    it("subtract function test",function(){
 
        expect(calculator.sub(3,4)).toEqual(-1);


    });


});