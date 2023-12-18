class Infomation {
    name : string =''
    age : number =0

    sayHi(){
        return "Hi ! I'm "+ this.name + " and " + this.age + " years old "
    }
}

const user : any = new Infomation()
user.name = "chinnawat"
user.age = 30
console.log(user.sayHi())