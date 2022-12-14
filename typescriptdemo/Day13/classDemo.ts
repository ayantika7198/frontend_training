export {}

enum Category{
    jeans='jeans',
    shirts='shirts',
    tops='tops',
    furniture='furniture',
    groceries='groceries'
}
class Product{
    id:number;
    name:string;
    brand:string;
    price:number;
    category:Category;

    constructor(id,name,brand,price,category){
        this.id=id;
        this.name=name;
        this.brand=brand;
        this.price=price;
        this.category=category;
    }

}

class ShoppingCart{
    cart: Map<Product,number>;

    constructor(cart){
        this.cart=cart;
        if(this.cart.has(cart.id)){
            this.cart.set(cart,this.cart.get(cart.id+1));
        }else{
            this.cart.set(cart,1);
        }
    }

    displayTotal(){
        let sum=0;
        for(let [key,value] of this.cart){
            if(key.price>=0){
            console.log(key.price,value);
            sum=sum+(key.price*value);
            }
        }
        return sum;
    }
}

let p1=new Product(101,'P01','Brand1','1000',Category.shirts);
let p2=new Product(102,'P02','Brand2','1000',Category.jeans);
let p3=new Product(103,'P03','Brand3','600',Category.shirts);
let p4=new Product(104,'P04','Brand4','10000',Category.furniture);
let p5=new Product(105,'P05','Brand5','1500',Category.tops);

let mp=new Map<Product,number>();
mp.set(p1,1);
mp.set(p2,1);
mp.set(p3,1);
mp.set(p4,1);
mp.set(p5,1);

let sc=new ShoppingCart(mp);
console.log('Total Price: '+sc.displayTotal());
