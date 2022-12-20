export {};

type Account=[number, string, string];

let arr=[];
arr.push(['102','Name2','Title2']);
arr.push(['103','Name3','Title3']);
arr.push(['104','Name4','Title4']);

console.log(arr);

class SavingsAccount{
    account: Account;
    nums: number[];
    constructor(account, nums){
        this.account=account;
        this.nums=nums;
    }
}

let sa1= new SavingsAccount(arr[0],[1,2,3]);
let sa2=new SavingsAccount(arr[1],[50,100,150,200]);
let sa3=new SavingsAccount(arr[2],[70,80,90,100,150]);

let saveArray=[];
saveArray.push(sa1);
saveArray.push(sa2);
saveArray.push(sa3);

console.log(saveArray);


