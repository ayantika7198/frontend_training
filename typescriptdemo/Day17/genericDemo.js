"use strict";
//exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(id, name, address) {
        this.compareTo = function (Person) {
            if (Person.id === 101 || Person.id === 102 || Person.id === 103 || Person.id === 104)
                return Person.id;
            else
                return -1;
        };
        this.id = id;
        this.name = name;
        this.address = address;
    }
    return Person;
}());
var p1 = new Person(101, 'Ayantika', 'Kalyani');
var p2 = new Person(0, 'Riya', 'Kolkata');
var comp;
console.log(comp.compareTo(p1));
console.log(comp.compareTo(p2));
