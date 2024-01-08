// funcion with a union type parameter
// const guessAge = (age:number | string)=> {
//     return "Your age is: "+ age
// }

// // CAN pass a number or a string !
// guessAge(30)
// guessAge("28")
// // CAN'T pass something else
// guessAge({age:32})

// let age : number | string =21 
// age = 23
// age ="24"

// type Point ={
//     x:number
//     y:number
// }

// type Loc = {
//     lat : number
//     long : number
// }

// let coordinates : Point | Loc = { x: 1 , y:5}
// coordinates ={ lat: 321.123 ,long:234.435}

// function printAge(age:number | string):void {
//     console.log(`You are ${age} year old`)
// }

// function calculateTax(price :number |string , tax :number){
//     if (typeof price === "string"){
//        price= parseFloat(price.replace("bath",""))
//     }
//     return price * tax
// }

// console.log(calculateTax(50,0.7))
// console.log(calculateTax("50bath",0.7))

// unios types and array

// const nums:number[] =[1,2,3]
// const stuff : any[] = [1,2,3,4,true, "asdfg", {}] //❌
// const stuff: (number | string)[] = [1,2,3 ,"sadfa"] //✅

// const coords : (Point | Loc)[] = []
// coords.push({ lat: 321.123 ,long:234.435})
// coords.push({x:142 , y:115})


// literal Types

// function with a literal+union type parameter
// const giveAnswer = (answer: "yes" | "no" | "maybe")=>{
//     return `The answer is ${answer}`
// }

// // ✅CAN provider one of the literals in the union
// giveAnswer("no")

// // ❌CAN'T provider anything else
// giveAnswer("oh boy I'm not sure")


let zero : 0 = 0
let mood: "Happy" | "Sad" = "Happy"
mood = "Sad"

type DayOfWeek = "Monday" 
| "Tuesday" 
| "Wednesday"
| "Thursday"
| "Friday"
| "Saturday"
| "Sunday"

let today : DayOfWeek ="Monday"