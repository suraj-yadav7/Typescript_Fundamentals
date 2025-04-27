/** UTILITY TYPES */
// The Utility types let you manipulate or create variations of types (objects, unions, etc.) in a clean, type-safe way.
var studentDetails = {
    rollNo: 47,
    name: "Hemanth",
    class: 12,
    section: "B",
    attendance: true
};
var studentTwoDetial = {
    rollNo: 46,
    name: "Naveen"
};
var actorDeatils = {
    name: "Prabhas",
    totalMovies: 25,
    overall: "Industry Hit"
};
var actorAllDetails = {
    name: "Mahesh Babu",
    totalMovies: 38,
    hit: 30,
    flop: 8,
    overall: "BlocakBuster"
};
var virat = {
    name: "virat kholi",
    batting: "right-hand",
    hundres: 100
};
// virat.fiftys = "78"  unable to write this property
console.log("Cricketer Details: ", virat);
var noobGamerVal = {
    totalGames: 3,
    stream: false,
};
var newUserVal = {
    id: "045r89w4",
    name: "sakshi",
    email: "sakshi@amazon.com"
};
console.log("New User Details: ", newUserVal);
var receivedVal = "success";
// const sendVal:PureVal = null     // Type 'null' is not assignable to type 'string'.
console.log("Received : ", receivedVal);
