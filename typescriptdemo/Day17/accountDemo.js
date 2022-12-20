var Account;
var arr = [];
arr.push(['102', 'Name2', 'Title2']);
arr.push(['103', 'Name3', 'Title3']);
arr.push(['104', 'Name4', 'Title4']);
console.log(arr);
var SavingsAccount = /** @class */ (function () {
    function SavingsAccount(account, nums) {
        this.account = account;
        this.nums = nums;
    }
    return SavingsAccount;
}());
var sa1 = new SavingsAccount(arr[0], [1, 2, 3]);
var sa2 = new SavingsAccount(arr[1], [50, 100, 150, 200]);
var sa3 = new SavingsAccount(arr[2], [70, 80, 90, 100, 150]);
var saveArray = [];
saveArray.push(sa1);
saveArray.push(sa2);
saveArray.push(sa3);
console.log(saveArray);
