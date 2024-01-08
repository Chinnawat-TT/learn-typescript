// // Creating a Tuple with its type definition
// let myTuple : [number , string]

// //✅CAN assing it values per its specs
// myTuple =[10,'Typescript is fun']

// //❌CAN'T assign it values of a dif structure
// myTuple =['Typescript is fun',10]

const color: [number,number,number] = [255,0,255]

type HTTPResponse =[number,string]

const goodResponse: HTTPResponse =[200,"OK"]

const responses : HTTPResponse[] =[[404,"Not Found"],[200,"OK"]]


// Enums 
// Numberic Enums
// enum Responses {
//     no, //1
//     yes, //2
//     maybe //3
// }
// enum Responses {
//     no = 2, //2
//     yes, //3
//     maybe //4
// }
// enum Responses {
//     no =2, //2
//     yes=10, //10
//     maybe=24 //24
// }

// String Enums
// enum Responses {
//     no="No", 
//     yes="Yes", 
//     maybe="Maybe" 
// }

// Heterogenous Enums
// enum Responses {
//     no=0, 
//     yes=1, 
//     maybe="Maybe" 
// }

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

const myStatus = OrderStatus.DELIVERED

function isDelivered(status:OrderStatus){
    return status ===OrderStatus.DELIVERED
}

isDelivered(OrderStatus.RETURNED)

enum ArrowKeys {
    UP ="up",
    DOWN ="down",
    LEFT = "left",
    RIGHT = "right"
}