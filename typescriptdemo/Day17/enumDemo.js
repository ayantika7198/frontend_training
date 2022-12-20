"use strict";
//exports.__esModule = true;
var weekdays;
(function (weekdays) {
    weekdays["sunday"] = "sunday";
    weekdays["monday"] = "monday";
    weekdays["tuesday"] = "tuesday";
    weekdays["wednesday"] = "wednesday";
    weekdays["thursday"] = "thursday";
    weekdays["friday"] = "friday";
    weekdays["saturday"] = "saturday";
})(weekdays || (weekdays = {}));
var daysOff = [weekdays.saturday, weekdays.sunday];
console.log(daysOff);
var direction;
(function (direction) {
    direction["north"] = "north";
    direction["south"] = "south";
    direction["east"] = "east";
    direction["west"] = "west";
})(direction || (direction = {}));
function move(where) {
    console.log(where);
}
move(direction.north);
move(direction.east);
