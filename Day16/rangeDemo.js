class Range{
    constructor(from, to){
        this.from=from;
        this.to=to;
    }

    includes=(x)=>{
        if(x>=this.from && x<=this.to) return true;
        else return false;
    }

    toString=()=>{
        return `${this.from}...${this.to}`;
    }

    parse=(val)=>{
        if(val.includes("...")){
            let ind1=val.indexOf(".");
            let newFrom=val.substring(0,ind1);

            let ind2=val.lastIndexOf(".");
            let newTo=val.substring(ind2+1);

            return new Range(parseInt(newFrom), parseInt(newTo));
        }else{
            return "Please provide Value Properly";
        }
    }
}
/*
let rng=new Range(25,50);
console.log(rng.toString());
console.log(rng.includes(29));
console.log(rng.includes(15));

let rng2=rng.parse("100...150");
console.log(rng2.toString());*/

//let rng3=rng.parse("5677");

class Span extends Range{
    constructor(start, span){
        super(start, start+span-1);
        //this.span=span;
    }

    show=()=>{
        let str="";
        for(let i=this.from;i<=this.to; i=i+1){
            str+=i+" ";
        }
        return str;
    }
}

let sp=new Span(100, 5);
//console.log(sp.show());

module.exports={Range, Span};

