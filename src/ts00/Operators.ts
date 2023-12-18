
// Unary operator
// let x: number = 5
// x++ 
// console.log(x) // 6

// Binary operator
// let a: number = 1, b: number = 2
// let c: number = a + b 
// console.log(c) // 3

// Ternary operator
// let a: number = 5
// console.log(a > 5 ? 'greater than 5' : 'less than or equal to 5') //less than or equal to 5

// ------- Arithmetic Operators ---------
// +  Addition operator บวก
// let a: number = 1, b: number = 2
// let c: number = a + b 
// console.log(c) // 3

// -  Subtraction operator ลบ
// let a: number = 2, b: number = 1
// let c: number = a - b 
// console.log(c) // 1

// /  Division operator หาร
// let a: number = 10, b: number = 5
// let c: number = a / b 
// console.log(c) // 2

// *  Multiplication operator คูณ
// let a: number = 2, b: number = 10
// let c: number = a * b 
// console.log(c) // 20

// %  Modulus operator หารเอาเศษ
// let a: number = 3, b: number = 9
// let c: number = a % b 
// console.log(c) // 3

// ++  Increment operator 
// let a: number = 5
// a++ 
// console.log(a) // 6

// --  Decrement operator
// let a: number = 4
// a-- 
// console.log(a) // 3


// ------  Comparison (Relational) Operators -----
// ==  equal operator
// let a: number = 3,
// b: number = 3
// if (a == b) console.log('equal')

//=== identical operator
// let a: number = 3,
// b: number = 3
// if (a === b) console.log('identical')

//!=  Not equal operator
// let a: number = 3,
// b: number = 2
// if (a != b) console.log('not equal')

//!==  Not identical  operator
// let a: number = 3,
// b: number = 2
// if (a !== b) console.log('not identical')

//>  Greater than operator
// let a: number = 3,
// b: number = 2
// if (a > b) console.log('greater than')

//>=  Greater than or equal operator 
// let a: number = 3,
// b: number = 3
// if (a >= b) console.log('greater than or equal to')

//<  Less than operator
// let a: number = 3,
// b: number = 2
// if (b < a) console.log('less than')

//<=  Less than or equal operator
// let a: number = 3,
// b: number = 3
// if (a <= b) console.log('less than or equal to')


// ------ Logical Operators ------
//&& AND operator
// console.log(false && true) // false

//|| OR operator
// console.log(false || true) // true

//! NOT operator
// console.log(!false) // true


// ------ Bitwise Operators ------
// let a:number= 5; // 0101 in binary
// let b:number = 3; // 0011 in binary

//& Bitwise AND operator
// console.log(a & b); // 0001 (AND)

//| Bitwise OR operator
// console.log(a | b); // 0111 (OR)

//^ Bitwise XOR operator
// console.log(a ^ b); // 0110 (XOR)

//<< Bitwise Left Shift operator
// console.log(a << 1); // 1010 (Left Shift)

//>> Bitwise Right Shift operator
// console.log(a >> 1); // 0010 (Right Shift)

//~  Bitwise NOT operator
//console.log(~a); // 1010 (Complement)


// ------ Assignment Operators ------
//= Assign operator
// let a: number = 5 

//+= Add and assign operator 
// let a: number = 5,
// b: number = 10
// b += a // b = b + a
// console.log(b) // 15

//-= Subtract and assign operator 
// let a: number = 5,
// b: number = 10
// b -= a // b = b - a
// console.log(b) // 5

//*= Multiply and assign operator 
// let a: number = 5,
// b: number = 10
// b *= a // b = b * a
// console.log(b) // 50

// /= Divide and assign operator
// let a: number = 5,
// b: number = 10
// b /= a // b = b / a
// console.log(b) // 2

// %= Modulus and assign operator 
// let a: number = 5,
// b: number = 11
// b %= a // b = b % a
// console.log(b) // 1


// ------ Ternary/conditional Operator ------
/*

expression1 ? expression2 : expression3

or

if (expression1 === True) expression2
else expression3

*/

// let x: number = 4
// let y: number = x > 3 ? x : 0 // y = 4
// console.log(y) // 4


// ------ Concatenation Operator ------ 
// let str: string = 'hello' + ' world!' // + or concatenation
// console.log(str) // hello world!


// ------ Type Operator ------
// in operator
// let Name = {
//     firstName: 'John',
//     lastName: 'Doe',
// }
// console.log('firstName' in Name) // true

// typeof operator
// let a: string = 'something'
// console.log(typeof a) // string

// delete operator
// let info:{ firstName?: string ,lastName?: string } = {
//     firstName:'John',
//     lastName: 'Doe',
// }
// delete info["firstName"]
// console.log(info) //info = {lastName: "Doe"}