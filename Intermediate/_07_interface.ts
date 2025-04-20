/** Interface */
// Used to describe object shapes. More "class-like" and supports things like extension and declaration merging.

// extends
interface Person {
    name:string,
    age:number,
    address?:string
}

interface Professor extends Person{
    expert:string,
    exp:number
}

//Merging
interface Product{
    id:string,
    name:string,
    cost:number
}
interface Product{
    available:boolean,
    delivery:string
}

function productDetails(prod:Product){
    if(!prod.available){
        return "Product is not available."
    }
    const str = `Product name is ${prod.name} comes at a cost of ${prod.cost} and `+
    `delivery type is ${prod.delivery}`
    return str
};

const prod = {
    id:"u57845d",
    name:"GamePad controller",
    cost:3100,
    available:true,
    delivery:"cod"
};
const prodRes = productDetails(prod)
console.log(prodRes);