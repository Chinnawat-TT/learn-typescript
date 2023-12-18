// Simple Type
// Main primitives = boolean , number ,string
// Less common primitives = bigint , symbol

// Type Assignment 1.Explicit 2. Implicit

// 1. Explicit กำหนดแบบชัดเจน
let firstName: string ="Chinnawat";
let Age:number = 30;
let married :boolean = true;

// 2. Implicit กำหนดแบบ "ในๆ"
let lastName = "Sangrung";


// Special Type = any, unknown, never,undefined & null

// // any "ใดๆ"
// let array: any = [];
// array = {};
// // เปลี่ยนค่า type ได้ไม่ error

// unknown เหมือน any แต่เป็นทางเลือดที่ดีกว่า
// let array: unknown = [];
// array = {};
// เปลี่ยนค่า type ได้ไม่ error

// never
// let x:never ="toto"
// let x:never =555
// let x:never =true
// มันจะโยน error ออกมา 

// undefined & null ค่าว่างเปล่าที่ยังไม่ได้กำหนด
// let a: undefined =undefined;
// let b: null = null ;

// TypeScript Arrays

// const names:string[]=[]; 
// names.push("toto")
// // names.push(9) // ทำไม่ได้จะ error เเจ้งเตือน typeข้อมูลไม่ตรง
// console.log(names)

// readonly ใช้เพื่อป้องกันการเเก้ไขข้อมูล
// const names: readonly string[]=["toto"]; 
// names.push("OK") // push ข้อมูลเข้ามาไม่ได้
// console.log(names) // toto

// const num: readonly number[]=[1,2,3,4]; 
// console.log(num) // [1,2,3,4]

// Define our Tuple ตำแหน่ง index ต้องตรงกับประเภทของ type
// let tuple:[number,boolean,string]
// tuple=[10,true,"OK"]

// let tuple: readonly [number,boolean,string]
// tuple=[10,true,"OK"]
// tuple.push("Typescript") // readonly เท่านั้น

// // กำหนดชื่อได้
// let tuple:[myNum:number,myBoo:boolean,myStr:string]=[10,true,"OK"]

// Destructuring
// let tuple:[number,boolean,string]=[10,true,"OK"]
// let [myNum,myBoo,myStr]=tuple
// console.log(myNum,myBoo,myStr) // 10 true 'OK'

// TypeScript Object types

// const motorcycle :{type:string,model:string,year:number}={
//   type:"Honda",
//   model:"Wave125",
//   year:2023
// }

// Typescript Enums

// ค่า default เริ่มที่ 0
// enum Employees{
//   Id, // 0
//   FirstName, //1
//   LastName, //2
//   age, // 3
//   Position // 4
// }

// console.log(Employees.age) // 3

// สามารถกำหนดค่าเริ่มต้นได้ 
// enum Employees{
//   Id = 1, // 1
//   FirstName, //2
//   LastName, //3
//   age, // 4
//   Position // 5
// }

// console.log(Employees.age) // 4

// enum StatusCode {
//   NotFound =404,
//   Success = 200,
//   Accepted = 202,
//   BadRequest = 400
// }

// console.log(StatusCode.Success) // 200

// enum CarLists {
//   firstCar = "Toyota",
//   secondCar = "Honda",
//   thirdCar = "Mazda"
// }

// console.log(CarLists.firstCar) // Toyota

// Type Aliases ตั้งนานเเฝง, ตั้ง customs name ให้กับ type

// type CarYear = number;
// type CarType = string;
// type CarModel = string;

// type Car ={
//   year: CarYear,
//   type : CarType,
//   model : CarModel
// }

// const carYear : CarYear =2023;
// const carType : CarType = "Isuzu"
// const carModel : CarModel = "Dmax"
// const car: Car = {
//   year : carYear,
//   type :carType,
//   model : carModel
// }

// Typescript Interfaces   ใช้ได้กับชนิดข้อมูลชนิด object เท่านั้น

// interface Rectangle {
//   height : number,
//   width : number
// }

// interface ColoredRectangle extends Rectangle {
//   color : string
// }

// const rectangle : ColoredRectangle ={
//   height :20,
//   width :10,
//   color : "red"
// }

// Union Types แปลไทย "หรือ"

// function statusCode(code : string | number){
//   console.log(`My status code is ${code}`)
// }

// statusCode(404);
// statusCode("404");

// Functions

function getTime(): number {
  return new Date().getTime()
}

// function void จะไม่ return ค่าใดๆ
function printHello(): void {
  console.log("Hello")
}

// optional parameter ? 
// defalut parameter
// function multiply(a:number, b:number,c?:number,d:number=10) {
//   return a * b  + d
// }

// ตั้งชื่อให้กับ parameter และกำหนด Type ให้กับ parameter
// function divide({ divided, divisor}:{divided:number,divisor:number}){
//   return divided / divisor
// }

// rest parameter
// function add(a:number , b:number, ...arr: number[]){

// }

// Typescript Casting เขียน type แทนที่ type , overwrite ให้กับตัวเเปร
// as

// let y : unknown ="hello"
// console.log((y as string).length)

// let someVar : unknown ="hello"
// console.log((<string>someVar).length)

// Typescript Classes

// class Person {
//   private name : string;

//   public constructor(name : string){
//     this.name = name
//   }

//   public getName():string {
//     return this.name
//   }
// }

// const person = new Person("toto");
// console.log(person.getName())

// Typescript Generics

// function identity<T>(value:T):T{
//   return value
// }

// const result = identity<number>(123)
// console.log(result)
// console.log(typeof result)
// const resultStr = identity<string>("I love typescript")
// console.log(resultStr)
// console.log(typeof resultStr)