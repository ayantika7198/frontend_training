

const cart={
    addObject: function(object){
        console.log(`${object} added to cart`);
    },
    removeObject: function(object){
        console.log(`${object} removed from cart`);
    }
    ,
    checkOut: function(object){
        console.log(`${object} checked out`);
    }
}

cart.addObject("One");
cart.removeObject("One");
cart.addObject("Two");
cart.addObject("Three");
cart.checkOut("Two");