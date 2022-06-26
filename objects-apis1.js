function x(y) {
    y.num = y.num + 5;
    console.log(y);
}

let y = {
    name: "Tom",
    num: 10,
};
x(y);
console.log(y);