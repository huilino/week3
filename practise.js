
function myFunction(){
    for (let i=0 ; i <100 ; i++){
        console.log(i);
    }
}
myFunction();

let num1 = 5;
let num2 = 5;
function multiply(){
   
    return num1*num2 ; //if return have to console.log to print out
}
console.log(multiply());

let getArea=function(width, height){
    return width*height;

}
console.log(getArea(3,4));

let array1=[1,4,9,16];
// pass a function to map
let map1 = array1.map(x => x*2);
console.log(map1);
