export {}

enum weekdays{
    sunday='sunday',
    monday='monday',
    tuesday='tuesday',
    wednesday='wednesday',
    thursday='thursday',
    friday='friday',
    saturday='saturday'
}

let daysOff=[weekdays.saturday,weekdays.sunday];

console.log(daysOff);

enum direction{
    north='north',
    south='south',
    east='east',
    west='west'
}


function move(where: direction){
    console.log(where);
}

move(direction.north);
move(direction.east);