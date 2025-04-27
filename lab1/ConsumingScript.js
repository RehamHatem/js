//local variables are not accessible outside function’s block.
// console.log(value1 , value2 , value3)

//Call the function with 3 values then print the return
console.log(printVariables(1,2,3));

//Try to call the function with less than 3 parameters
console.log(printVariables(3,5));

//What if you call the function with too many parameters ?
console.log(printVariables(3,5,6,7));

// console.log the values localVar and testingVar.??
// console.log(localVar);   //Error: not defined
console.log(testingVar);  //print 5

//call the function and try to print localVar and testingVar?
printVariables(1,2,3);
// console.log(localVar); //un defined
console.log(testingVar);  //5

//--------------------------------------------------------------------------------------------------

console.log(summation(1,2));
console.log(summation(1));  //NaN
console.log(summation("reham")); 