"use strict";
// let a: string = "hellow";
// let nambo: number = 3443;
// let check: boolean;
// let num = <number>34;
const obj = {
    height: 3432,
    weight: 243,
    gender: false
};
const obj2 = {
    gender: false,
    height: 342,
    weight: 434
};
const obj3 = {
    height: 342,
    weight: 434
};
const func = (n, m, l) => {
    if (typeof l === "undefined")
        return n * m;
    // Add a return statement for the case when `l` is provided
    return n * m * l;
};
func(234, 334); // Returns the product of n and m when l is not provided
