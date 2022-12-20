"use strict";
//exports.__esModule = true;
function convert(temp, fromTo) {
    var res;
    if (fromTo === 'FtoC') {
        res = ((temp - 32) / 9) * 5;
    }
    else {
        res = ((temp / 5) * 9) + 32;
    }
    return Math.round(res);
}
console.log(convert(70, 'FtoC'));
