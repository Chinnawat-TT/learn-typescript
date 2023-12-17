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

// destructuring
// let tuple:[number,boolean,string]=[10,true,"OK"]
// let [myNum,myBoo,myStr]=tuple
// console.log(myNum,myBoo,myStr) // 10 true 'OK'