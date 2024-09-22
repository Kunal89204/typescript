// let surname: string | number;

// surname = 'hellow'
// surname = 243523



// one way of defining types
type Username = string | number


// function myfunc(a: Username, b: Username): number {
//     console.log(a, b)
//     return 0;
// }
// myfunc(2, 3)


// another way of defining types
type Username2 = (a: number, b: number) => number;


const myfunc: Username2 = (a, b) => {
    console.log(a, b)
    return 0
}
myfunc(2, 3)

// arrays

const arr: number[] = [22, 3, 42, 4, 2354, 32];
const arr2: Array<number> = [22, 3, 42, 4, 2354, 32];

const arrstring: string[] = ['hello wrodl']
const arrstring2: Array<string> = ['hello wrodl']


const arr5: Array<number | string> = ['kunal', 'khandelwal', 3, 4]


// tuple
const array6: [number, number, string] = [2, 2, 'ff']

// objects

const obj: {
    height: number;
    weight: number;
    gender?: boolean
} = {
    height: 34,
    weight: 43,
}


type myobjtype = {
    nambo: string;
    surname: string;
    rollno?: number;
    func: () => void;
    newobj: {
        newnambo: string
    }
}

const obj2: myobjtype = {
    nambo: 'kunal',
    surname: 'khandelwal',
    func: () => {
        return 'hello world how are you i am fine what about you i don'
    },
    newobj: {
        newnambo: 'kahtri'
    }
}

console.log(obj2.func(), obj2.newobj.newnambo)



// Functions -> Rest Operator
type FuncType = (...m: number[]) => number[]

const funcy: FuncType = (...m) => {
    return m;
}

funcy(1, 2, 3, 4, 5, 7, 8)








// Functions wiht objects

type GetDataType = (product: { names: string, stock: number, price: number }) => void


const getData: GetDataType = (product) => {
    console.log(product)
}

const productOne = { names: 'Kunal', stock: 45, price: 43 }
getData(productOne)


// Classes

// class Player {
//    height: 300;
//     weight: 345;


//     constructor(height: number, weight: number) {
//         this.height = height;
//         this.weight = weight
//     }
// }


// const abhi = new Player(100, 150)


// Type assertion

const a = document.getElementById('btn')as HTMLElement

a.onclick











