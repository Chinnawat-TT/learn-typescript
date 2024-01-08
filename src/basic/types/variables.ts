

let movieTitle : string = "Ironman"
movieTitle = "Captain america"
// movieTitle = 9
movieTitle.toUpperCase()
// movieTitle.tolLowerCase()

let myGirlFriend :number =0
myGirlFriend += 1
// myGirlFriend = "nothing"

let gameOver : boolean = false
gameOver = true
// gameOver ="true"

null
undefined

let nothing:null = null
let foo :undefined = undefined

// Type Inference
let statusMe = "I'm ok"
statusMe ="I'm fine"
// statusMe = true

let isFunny = false
isFunny = true
// isFunny = "true"

// Any Type
let something : any = "hello"
something = 555
something = true
something = null
something = undefined
something = {id:1,userName :"admin"}
something = [{id:1,userName :"admin"}]

const pets = ["Dog","Cat","Fish","Bird"]

let foundPet ;
for(let pet of pets){
    if (pet === "Dog"){
        foundPet = "Dog"
    }
}
// foundPet = 555
// foundPet = true
// foundPet = null

