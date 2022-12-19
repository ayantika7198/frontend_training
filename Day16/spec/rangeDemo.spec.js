let {Range, Span}=require('../rangeDemo');

let range;

beforeEach(function(){
    range=new Range(50, 100);
       
   });

describe("Testing Range Demo",function(){
    it("should test includes method",function(){
        //let range=new Range(50, 100);

        expect(range.includes(55)).toEqual(true);

        expect(range.includes(5)).toEqual(false);
    });
});
describe("Testing Range Demo",function(){
    it("should test toString Method",function(){
        expect(range.toString()).toEqual("50...100");
    });
});
describe("Testing Range Demo",function(){
    it("should test Parse Method",function(){
        let rng=new Range(100, 150);
        console.log(rng);
        let p=range.parse('100...150');
    
        
        expect(p.from).toEqual(rng.from);
        expect(p.to).toEqual(rng.to);

        expect(range.parse('8970')).toEqual("Please provide Value Properly");
    });
});
describe("Testing Span Demo",function(){
    it("should test show Method",function(){
        let spn=new Span(100, 5);

        expect(spn.show()).toEqual("100 101 102 103 104 ");
    });
});
