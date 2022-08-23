
/*    */
function sum (a: number, b: number): number {
    return a + b
}

function min (a: number, b: number): number {
    return a - b
}

function div (a: number, b: number): number {
    return a / b
}

function mult (a: number, b: number): number {
    return a * b
}
/* basic math functon  */


/*    */
function squere (a: number): number {
    return a * a
}

function cube (a: number): number {
    return a * a * a
}
/*    */

function exp (num: number, deg: number): number {

    let res: number = 1

    for (let i = 0; i < deg; i++) {
        res = res * num
    }

    return res
}


// логорифм - функция нахождения степени основания LOG  2   8 = 3 | LOG 2 8 = 2^3
//                                                     осн арг        
function log (root: number, arg: number) {

    for (let deg = 0; deg < Infinity; deg++) {

        if (exp(root, deg) === arg) {
            return deg
        }

    }

}
// извление корня =- функция получения основания 
function root (exp: number, num: number): number {

    let r: number


    return 1
}