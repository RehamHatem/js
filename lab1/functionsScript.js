//Try to call the function before definition line?
console.log(printVariables(1,2,3));
// console.log(localVar);
// console.log(testingVar);

//array
function printVariables(value1,value2,value3){

    // Define var localVar=3; testingVar=5; inside the function’s
    // block Before calling the function try to console.log the values
    // localVar and testingVar.??
    
    var localvar=3;
    testingVar=5;

    return [value1,value2,value3];
}
//using arguments
// function printVariables(value1,value2,value3){
//     return arguments;
// }

// Then solve the problem of undefined variables
// function printVariables(value1=0,value2=0,value3=0){
//     return arguments;
// }


// Repeat step 1 but define the function as function expression
var printVariables= function(value1,value2,value3){
    return [value1,value2,value3];
};

//--------------------------------------------------------------------------------------------------

function summation(x,y){
    return x+y;
}

//solve this problem using ES6 feature.
function summation(x,y){
    if(isNaN(y)){
        y=0;
    }
    return x+y;
}

// Solve this problem using your logic

// function summation(x,y){
//     result=x+y;
//     if(isNaN(result)){
//         result=0;
//     }
//     return result;
// }
