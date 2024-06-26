let number: number

number = 24434343

let newnum: number
newnum = 42355


type myobjtype = {
    name: string,
    age: number
}

interface myobj {
    name: string,
    age: number
}

const obj: myobj = {
    name: "kunal", 
    age: 123
}


type Username = Array<string | number>

let myarr: Username = ['1', '2', 3255]

type mytype = (a: number, b: number) => number

const myfunc: mytype = (a, b) => {
    console.log(a + b)
    return 0;
}



console.log(myarr)

const btn = document.getElementById("heading") as HTMLHeadingElement

btn.onclick