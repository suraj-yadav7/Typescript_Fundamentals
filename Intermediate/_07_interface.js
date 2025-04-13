/** Inteface */
// Used to describe object shapes. More "class-like" and supports things like extension and declaration merging.
function productDetails(prod) {
    if (!prod.available) {
        return "Product is not available.";
    }
    var str = "Product name is ".concat(prod.name, " comes at a cost of ").concat(prod.cost, " and ") +
        "delivery type is ".concat(prod.delivery);
    return str;
}
;
var prod = {
    id: "u57845d",
    name: "GamePad controller",
    cost: 3100,
    available: true,
    delivery: "cod"
};
var prodRes = productDetails(prod);
console.log(prodRes);
