/** UTILITY TYPES */
// The Utility types let you manipulate or create variations of types (objects, unions, etc.) in a clean, type-safe way.

/**  1.Partial<Type> */
// It makes all the properites of object optional
type Student = {
    rollNo:number,
    name:string,
    class:number,
    section:string,
    attendance:boolean
}

const studentDetails : Student =  {
    rollNo:47,
    name:"Hemanth",
    class:12,
    section:"B",
    attendance:true
}

type StudentTwo = Partial<Student>

const studentTwoDetial : StudentTwo = {
    rollNo:46,
    name:"Naveen"
}

/** 2.Required <Type> */
// If first types has optional propeties defined then also it makes required.

type Actor = {
    name:string,
    totalMovies:number,
    hit?:number,
    flop?:number,
    overall:string
}

const actorDeatils : Actor = {
    name:"Prabhas",
    totalMovies:25,
    overall:"Industry Hit"
}

type AllDetails  = Required <Actor>

const actorAllDetails : AllDetails = {
    name:"Mahesh Babu",
    totalMovies:38,
    hit:30,
    flop:8,
    overall:"BlocakBuster"
}

/** Readonly <Type> */
// It makes all the properties Read only

type  Cricketer  = {
    name:string,
    batting:string,
    hundres:number
}

const virat : Cricketer = {
    name:"virat kholi",
    batting:"right-hand",
    hundres:100
}
// virat.fiftys = "78"  unable to write this property
console.log("Cricketer Details: ", virat)

/** Pick <Type> */
// Extract the subset properties from the original defined one.

type Ganer = {
    name:string,
    totalGames:number,
    favOne:string,
    stream:boolean
}

type NoobGamer = Pick<Ganer, "totalGames" | "stream">

const noobGamerVal : NoobGamer ={
    totalGames:3,
    stream:false,
}

/** Omit <Types> */
// Removes specific key/properties from the types

type User ={
    id:string,
    name:string,
    email:string,
    gender:string
}

type newUser = Omit<User, "gender">

const newUserVal : newUser = {
    id:"045r89w4",
    name:"sakshi",
    email:"sakshi@amazon.com"
}
console.log("New User Details: ", newUserVal)

/** NonNullable */
// Removes null and undefined form type

type Input = string | null | undefined

type PureVal = NonNullable <Input>

const receivedVal: Input = "success"
// const sendVal:PureVal = null     // Type 'null' is not assignable to type 'string'.
console.log("Received : ", receivedVal)