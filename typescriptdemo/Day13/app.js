"use strict";
exports.__esModule = true;
var msg1 = 'Hello World';
console.log(msg1);
var Size;
(function (Size) {
    Size[Size["small"] = 0] = "small";
    Size[Size["medium"] = 1] = "medium";
    Size[Size["large"] = 2] = "large";
})(Size || (Size = {}));
var Toppings;
(function (Toppings) {
    Toppings[Toppings["cheese"] = 0] = "cheese";
    Toppings[Toppings["veggie"] = 1] = "veggie";
    Toppings[Toppings["paneer"] = 2] = "paneer";
    Toppings[Toppings["chicken"] = 3] = "chicken";
})(Toppings || (Toppings = {}));
var p1, p2, p3;
p1 = {
    id: 101,
    size: Size.small,
    base: 'B1',
    toppings: Toppings.cheese
};
p2 = {
    id: 102,
    size: Size.medium,
    base: 'B2',
    toppings: Toppings.chicken
};
p3 = {
    id: 103,
    size: Size.large,
    base: 'B3',
    toppings: Toppings.paneer
};
var arr = [p1, p2, p3];
function outForDelivery(pizza) {
    switch (pizza.size) {
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
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var i = arr_1[_i];
    console.log("".concat(i.id, " ").concat(Size[i.size], " ").concat(i.base, " ").concat(Toppings[i.toppings]));
    outForDelivery(i);
}
