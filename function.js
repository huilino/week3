function someReally (){
 return 'hi'; //  body
}
let age = prompt('How old are you? ');
console.log(age);
// prompt accept input and argument and returns value

// pass function as an argument
console.log(someReally());

// functions can accept arguments, in the function definition they are called paremeters.
function printFormat(message){
     console.log("(" + message+ ")"); //output (Hello!)
}
printFormat("Hello!");

function addNumbers(numberOne, numberTwo){  //numberOne,numberTwo is parameter
    return numberOne + numberTwo;
}
let sum=addNumbers(1,2); //we are passing 1 and 2 in the parameter
let sum1=addNumbers(4,5);
console.log(sum);
console.log(sum1); 
console.log(addNumbers(5,6));

// Boolean value
function isGreaterThan100(num){
    return num>100 ;
}
let a = isGreaterThan100(200);
console.log(isGreaterThan100(101));
console.log(isGreaterThan100(95));
console.log(a);

let b = 'blue';
let var1 = b.toLowerCase();
function isBlue(var1){
    return var1.toLowercase() === 'blue';
}
console.log(isBlue(b));


// Create an anoymous function, function without an identifier
function anonFunc() {
    console.log("From annoFunc");
}
anonFunc();

// Intermediate Array
// Write a function that accepts an array of number 
// and return the highest number in the array
function getHighestNumber(arr){
    let highestNumber = 0;
    for (let i=0 ; i < arr.length; i++){
        if(arr[i] > highestNumber){
            highestNumber = arr[i];
        }
    }
    return highestNumber;
}
console.log(getHighestNumber([10, 200, 3]));
console.log(getHighestNumber([100, 1, -1]));
console.log(getHighestNumber([1, 2, -3]));


