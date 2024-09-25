/** CLASS */
// In OOPs a class is blue print which is used to create objects.
// It name should start with capital letter and subsequent also capital letter.
class Persons {
    name:string;
    gender:string;
    hobbies:string[];

    constructor(name:string, gender:string, hobbies:string[]){
        this.name=name,
        this.gender=gender,
        this.hobbies=hobbies
    }
    // methods
    greet(){
        console.log(`Hi ${this.name} welcome, we like your hobbies ${this.hobbies.join(",")}`)
    }

    totalSalary(exp:number, skills:number):number{
        let sal = exp*skills*1000
        return sal
    }
}

// instance of class or object
const p1=new Persons("Dhanu", "male", ["reading", "drawing"])
p1.greet()
console.log("Person1: ", p1)
const p2=new Persons("prakash", "male", ["cricket", "swimming"])
console.log("Person2: ", p2)

let res:number = p2.totalSalary(5,8)
console.log("Person salary: ", res)
