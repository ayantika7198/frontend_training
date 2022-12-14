var Category;
(function (Category) {
    Category["jeans"] = "jeans";
    Category["shirts"] = "shirts";
    Category["tops"] = "tops";
    Category["furniture"] = "furniture";
    Category["groceries"] = "groceries";
})(Category || (Category = {}));
class Product {
    constructor(id, name, brand, price, category) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.category = category;
    }
}
class ShoppingCart {
    constructor(cart) {
        this.cart = cart;
        if (this.cart.has(cart.id)) {
            this.cart.set(cart, this.cart.get(cart.id + 1));
        }
        else {
            this.cart.set(cart, 1);
        }
    }
    displayTotal() {
        let sum = 0;
        for (let [key, value] of this.cart) {
            if (key.price >= 0) {
                console.log(key.price, value);
                sum = sum + (key.price * value);
            }
        }
        return sum;
    }
}
let p1 = new Product(101, 'P01', 'Brand1', '1000', Category.shirts);
let p2 = new Product(102, 'P02', 'Brand2', '1000', Category.jeans);
let p3 = new Product(103, 'P03', 'Brand3', '600', Category.shirts);
let p4 = new Product(104, 'P04', 'Brand4', '10000', Category.furniture);
let p5 = new Product(105, 'P05', 'Brand5', '1500', Category.tops);
let mp = new Map();
mp.set(p1, 1);
mp.set(p2, 1);
mp.set(p3, 1);
mp.set(p4, 1);
mp.set(p5, 1);
let sc = new ShoppingCart(mp);
console.log('Total Price: ' + sc.displayTotal());
export {};
