let number = prompt("Enter a random number");
if(number > 90 && number < 110) {
    alert("Bingo!");
} else {
    alert("Miss");
}

let numbers = [50, 10, 40, 30, 20];
let sorted = numbers.sort((a, b) => b - a);
console.log(sorted); // [10, 20, 30, 40, 50]

function add(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a + b;
}

function sub(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a - b;
}

function mult(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a * b;
}

//Exercise 3

let add = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;
let sub = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;
let mult = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;

//Exercise 4
let action = (callback, a, b) => callback(a, b);
// or
let action = function (callback, a, b) {
    return callback(a, b);
}
// or
function action(callback, a, b) {
    return callback(a, b);
}

//Exercise 5
let counter = 1;
let intervalId = setInterval(function () {
    console.log(counter++);
}, 2000);
setTimeout(function () {
    clearInterval(intervalId)
}, 20000);

//Exercise 6
let fibbRec = function (n) {
    let retVal = 0;
    if (n != 0) {
        if (n === 1) {
            retVal = 1;
        } else {
            retVal = fibbRec(n - 1) + fibbRec(n - 2);
        }
    }
    return retVal;
}

//Exercise 7
let fibb = n => n == 0 ? 0 : (n == 1 ? 1 : fibb(n - 1) + fibb(n - 2));

// Exercise 8
function fibbIter(n) {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a;
        a = b;
        b += c;        
    }
    return b;
}