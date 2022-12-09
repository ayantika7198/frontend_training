let cars=[

    {id:"C01" , model:"M01" ,dealer:"D01" , price:500000},

    {id:"C02" , model:"M02" ,dealer:"D02" , price:400000}

];

cars.push({

 id:"C03" , model:"M03" ,dealer:"D03" , price:800000

});

console.log(cars);

let carItem={

 id:"C04" , model:"M04" ,dealer:"D04" , price:600000

};

carShift = cars.unshift(carItem);

console.log(cars);



popCar=cars.pop();

console.log(cars);



let car_item2={

 id:"C05" , model:"M05" ,dealer:"D05" , price:500000

};

spliceCar = cars.splice(3,0,car_item2);

console.log(cars);



shiftedCar = cars.shift();

console.log(cars);