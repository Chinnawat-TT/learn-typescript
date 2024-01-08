// An interface 
// interface Person{
//     name : string;
//     age :number
// }

// // Use the type alias in the annotation
// const sayHappyBirthday = ( person : Person) =>{
//     return `Hey ${person.name} , congrats on turning ${age}`
// }

// sayHappyBirthday({name :"Toto",age:30})

// type Point ={
//     x:number
//     y:number
// }

// const pt:Point ={ x:55,y:66}

interface Point {
    x:number
    y:number
}

const pt: Point ={x:123,y:456}

interface Person {
    readonly id:number
    first:string
    last:string
    nickname?:string
    sayHi():string
}

const john:Person ={
    first:"John",
    last:"Doe",
    id:148,
    sayHi:()=>{
        return "Hello"
    }
}

interface Product {
    name :string
    price :number
    applyDiscount(discount:number):number
}

const shoes :Product ={
    name :"nike air max",
    price : 100,
    applyDiscount(discount:number) {
        const newPrice = this.price *(1-discount)
        this.price = newPrice
        return this.price
    },
    
}

console.log(shoes.applyDiscount(0.2))

interface Dog{
    name :string
    age:number

}

interface Dog{
    breed: string
    bark:()=> string
}

const Dang:Dog ={
    name : "Dang",
    age: 5,
    breed: "Thai Ridgeback",
    bark(){
        return "WOOF WOOF"
    }
}

// extend

interface ServiceDog extends Dog {
    job: "bomb" | "guide dog" 
}

const dum: ServiceDog ={
    name :"dum",
    age: 3,
    breed :"German Shepherd",
    bark() {
        return "bark bark"
    },
    job : "bomb"
}

// multiple inheritance
interface Human {
    name : string
}
interface Employee {
    readonly id : number
    email:string
}
interface Engineer extends Human,Employee {
    level :string,
    languages: string[]
}

const tony: Engineer={
    name : "Tony",
    id : 1562,
    email : "tony@gmail.com",
    languages :["JS","Python"],
    level :"senior"
}