class invoice{
    constructor(title, details, total, date){
        this.title=title;
        this.details=details;
        this.total=total;
        this.date=date;
    }

    getTitle=()=>{
        return this.title;
    }
    getDetails=()=>{
        return this.details;
    }
    getTotal=()=>{
        return this.total;
    }
    getDate=()=>{
        return this.date;
    }
}

class Printer{
    print=(invoice)=>{
        console.log(`Title: ${invoice.getTitle()}, Details: ${invoice.getDetails()}, Total: ${invoice.getTotal()}, Date: ${invoice.getDate()}`);

    }
}

let inv1=new invoice('I001','Invoice1',5000,new Date('2022-08-16'));
let inv2=new invoice('I002','Invoice2',3000,new Date('2022-09-08'));
let inv3=new invoice('I003','Invoice3',2000,new Date('2022-05-25'));
let inv4=new invoice('I004','Invoice4',4000,new Date('2022-11-19'));
let inv5=new invoice('I005','Invoice5',6000,new Date('2022-10-09'));

let arr=[];
arr.push(inv1);
arr.push(inv2);
arr.push(inv3);
arr.push(inv4);
arr.push(inv5);

let pr=new Printer();
for(let val of arr){
    pr.print(val);
}
