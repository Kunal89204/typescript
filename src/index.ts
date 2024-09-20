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



// Functions






