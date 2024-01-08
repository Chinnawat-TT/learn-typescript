
function square(num:number){
    return num*num
}
console.log(square(5))

// function greet(person:string){
//     return `Hi there,${person}`
// }
console.log(greet("ToTo"))

const doSomething = (person : string, age:number ,isFunny:boolean) =>{
    return {name:person,age,isFunny}
}

let infoMyfriend =doSomething("non",29,false)
console.log(infoMyfriend)

// default parameter
function sayHello(person:string = "ToTo"){
    return `Hi there,${person}`
}

sayHello()

// function return types

const addNum =(x:number ,y:number):number=>{
    return x+y
}

function sayHi(person:string):string{
   return  `Hi there,${person}`
}

let nummm= 555
let strrr= "hi"

function random(num:number){
    if(Math.random() < 0.5){
        return num.toString()
    }
    return num
}

// anonymous functions

// const colors = ["red","blue","black"]

// colors.map(el => el.toUpperCase())

// console.log(colors)

// void dont return anything

const annoyUser =(num:number):void=>{
    for(let i =0; i<num ; i++){
        console.log("Hi !!!")
    }
}

console.log(annoyUser(3))