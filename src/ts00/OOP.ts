// class Point{
//     x: any;
//     y: any;
//     readonly z: string = "hello"
//     constructor(x:number = 0,y:number = 0){
//         this.x = x;
//         this.y = y;
//     }
// }
// let newPoint = new Point(10,20);
// console.log(newPoint.y)

// class Point{
//     // Overloads
//     constructor(x:string,y:string);
//     constructor(s:string);
//     constructor(xs: any ,y?:any){

//     }
// }

// class Point{
//     _x:number=0;
//     get x():number{
//         this._x +=1
//         return this._x
//     }

//     set x(value:number){
//         this._x = value
//     }
// }

// const p = new Point()
// console.log(p.x)

class Person {
    name:string ="";
    constructor(name:any){
        this.name=name
    }
    sayHi(){
        console.log(`Hi, I'm ${this.name}`)
    }
}
class Employee extends Person{
    salary: number = 0;
    constructor(name:any,salary:number){
        super(name)
        this.salary =salary
    }
    sayHi() {
        super.sayHi();
        console.log(`Salary: ${this.salary}`)
    }
}
const person = new Employee('John',30000)

person.sayHi()