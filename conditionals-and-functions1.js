/*
* Conditionals, Functions, Scope and Loops.
*/

let storeA = 4.40;
let storeB = 3.40;

function compareStorePrices (storeA, storeB) {
    let storeAIsLower = storeA < storeB;

    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their prices are equal.")
    }
}

compareStorePrices (5, 10);
compareStorePrices (10, 7);

function squareNum (number) {
    return number * number;
}

let squaredNumber = squareNum(7);
console.log(squaredNumber);