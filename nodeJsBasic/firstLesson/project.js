const importedSum = require("./myModule/sum.js")
const importedSubtraction = require("./myModule/subtract")

//When us imported, use the object . sintax and give the method
const res1 = importedSum(2,4);
const res2 = importedSubtraction(2,4);

console.log(res1);

console.log(res2);