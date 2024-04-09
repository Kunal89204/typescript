// let a: string = "hellow";
// let nambo: number = 3443;
// let check: boolean;
// let num = <number>34;

// let surname: string|number  ;

// console.log(typeof(a))
// console.log(typeof(num))

// const func = ((n: number, m: number) => {
//     console.log(n + m);
// })(2, 3);




// type Username = (n: number, m: number) => number;

// const func: Username = (n,m) => {
//     console.log(n,m);
//     return n*m;
// }

// arrays in typescript
// const arr: [number, number,number ] = [23,4,34];

// const arr2:Array<string> = ["yo", "bhai"]


// objects in typescript

type Obj = {
    height: number,
    weight: number,
    gender?: boolean,
} 

const obj: Obj = {
    height: 3432,
    weight: 243,
    gender: false
}

const obj2: Obj = {
    gender: false,
    height: 342,
    weight: 434
}

const obj3: Obj = {
    height: 342,
    weight: 434
}




type FuncType = (n: number, m: number, l?: number) => number;

const func: FuncType = (n, m, l) => {
    if (typeof l === "undefined") return n * m;
    // Add a return statement for the case when `l` is provided
    return n * m * l;
};

func(234, 334); // Returns the product of n and m when l is not provided
