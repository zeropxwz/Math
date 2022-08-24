"use strict";
/*    */
function sum(a, b) {
    return a + b;
}
function min(a, b) {
    return a - b;
}
function div(a, b) {
    return a / b;
}
function mult(a, b) {
    return a * b;
}
/* basic math functon  */
/*    */
function squere(a) {
    return a * a;
}
function cube(a) {
    return a * a * a;
}
/*    */
function exp(num, deg) {
    let res = 1;
    for (let i = 0; i < deg; i++) {
        res = res * num;
    }
    return res;
}
// логорифм - функция нахождения степени основания LOG  2   8 = 3 | LOG 2 8 = 2^3
//                                                     осн арг        
function log(base, arg) {
    // for (let deg = 0; deg < Infinity; deg++) {
    //     if (exp(base, deg) === arg) {
    //         return deg
    //     }
    let count = 0;
    while (arg > 1) {
        arg = arg / base;
    }
    return count;
}
// извление корня =- функция получения основания 
// function root (exp: number, num: number): number {
//     let r: number
//     return 1
// }
