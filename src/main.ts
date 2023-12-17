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
