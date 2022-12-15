interface Printable{
    print:()=>void;
}
interface colorable{
    color: string;
}
let color1:colorable={
    color:'red'
}
let color2:colorable={
    color:'blue'
}

interface DigitalPrint extends Printable,colorable{}

let dp1:DigitalPrint={
    color: 'yellow',
    print: function (): void {
        console.log(`Color: ${this.color}`);
    }
}

dp1.print();