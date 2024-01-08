// let infoMe:{first: string ,last:string,age:number,isLover:boolean} ={first:"ToTo", last:"za",age:30,isLover:true}

// const printName = (person:{first:string ; last:string})=>{
//     return `Name ${person.first} ${person.last}`
// }

// printName({first:"chinnawat",last:"sangrung"})

// function random():{x:number ,y:number}{
//     return {x:Math.random(),y:Math.random() }
// }
// random()


// excess properties
// printName({first:"chinnawat",last:"sangrung",age:30})
// printName(infoMe)


// type alias
// type Person ={
//     name :string
//     age : number
// }

// const sayHappyBirtday =(person : Person) =>{
//     return ` Hey ${person.name} , congrats on turning ${person.age}`
// }
// sayHappyBirtday({name :"toto",age:30})

// type Point={
//     x:number
//     y:number
// }

// let coordinate:Point={x:10,y:20}

// function random():Point{
//     return {x:Math.random(),y:Math.random() }
// }

// function doublePoint( point :Point):Point{
//     return {x:point.x*2 , y:point.y*2}
// }

// nested object

// type Song = {
//     title:string,
//     artist:string,
//     numStreams:number,
//     credits:{producer:string,writer:string}
// }
// function calculatePayout(song : Song):number{
//     return song.numStreams*0.003
// }

// function printSong(song : Song):void{
//     console.log(`${song.title} - ${song.artist}`)
// }

// const mySong={
//     title : "Kuy Rai",
//     artist : "MEAN Band x TIMETHAI",
//     numStreams : 8000000,
//     credits :{
//         producer : "Danai Thongsinthusak, MEAN Band",
//         writer :"HYE, TIMETHAI, Amnart Srisang (ozeeood)"
//     }
// }

// const earnings=calculatePayout(mySong)
// console.log(earnings)
// printSong(mySong)


// // optional Properties
// type Point ={
//     x:number
//     y:number
//     z?:number
// }
// const myPoint: Point ={x:1,y:2}

// // the readonly modifier
// type User = {
//   readonly id:number
//   username : string
// }

// const user:User ={
//     id:555,
//     username : "dogza"
// }

// console.log(user.id)
// user.id 

// // Intersection Type

// type Circle = {
//     radius:number
// }

// type Colorful = {
//     color:string
// }

// type ColorfulCircle = Circle & Colorful;

// const happyFace:ColorfulCircle = {
//     radius : 5,
//     color :"red"
// }

// type Motorcycle ={
//     brand : string
// }

// type Car ={
//     wheel : number
// }

// type InfoVehicle = Motorcycle & Car & { age : number}
// const myMotorcycle:InfoVehicle = {brand : "honda",wheel:4,age:4}