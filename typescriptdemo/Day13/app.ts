export {}
let msg1='Hello World';
console.log(msg1);

enum Size{
    small,
    medium,
    large
}

enum Toppings{
    cheese,
    veggie,
    paneer,
    chicken
}

interface Pizza{
    id:number,
    size:Size,
    base:String,
    toppings:Toppings
}

let p1:Pizza, p2:Pizza, p3:Pizza;
p1={
    id: 101,
    size: Size.small,
    base: 'B1',
    toppings: Toppings.cheese
}
p2={
    id: 102,
    size: Size.medium,
    base: 'B2',
    toppings: Toppings.chicken
}
p3={
    id: 103,
    size: Size.large,
    base: 'B3',
    toppings: Toppings.paneer
}

let arr:Pizza[]=[p1, p2, p3];
function outForDelivery(pizza: Pizza){
    switch(pizza.size){
        case Size.small:
            console.log('You have to pay $5 at the time of delivery');
            break;
        case Size.medium:
            console.log('You have to pay $10 at the time of delivery');
            break;
        case Size.large:
            console.log('You have to pay $20 at the time of delivery');
            break;
        default:
            console.log('Not applicable');

    }
}
for(let i of arr){
    console.log(`${i.id} ${Size[i.size]} ${i.base} ${Toppings[i.toppings]}`);
    outForDelivery(i);
}


