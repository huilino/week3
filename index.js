// create an array

// let fruits = ['Apple' , 'Banana']
// console.log(fruits.length);

// // Access array item using index position

// let first = fruits[0]
// console.log(first);
// let last = fruits[fruits.length - 1]
// console.log(last);

// // Loop over an Array
// fruits.forEach(function(item, index, array){
//     console.log(item, index);
// })

// // Add an item to the end of Array
// let newLength = fruits.push('orange');
// console.log(fruits)

//Add elements to array - push method 
// const fruits =[]
// fruits.push('banana', 'apple', 'peach')
// console.log(fruits.length); // output 3

let fruit =['Apple' , 'pear', 'grape'];
let animal = ['deer','elk','javalina','dog'];
// let index = 0;
// while(index < fruit.length){
//     console.log(fruit[index]);
//     index++;
// }
for(let i=0; i < fruit.length || i < animal.length ; i++){
    if(i < fruit.length){
        console.log(fruit[i]);
    }
    if(i < animal.length){
        console.log(animal[i]);
    }
}




// // // Using splice method (remove the element)
let months=['Jan' , 'March', 'April', 'June'];
// console.log(months.splice(1 , 2, 'Apple',));
// console.log(months); //return - element left after being splice
//  console.log(months.splice(2 , 0, 'Apple','pear'));
// //  return [] since nothing is being removed(o)
//  console.log(months);
// //  output ['Jan','March','Apple','pear','April', 'June']

// let animals=['chicken','cow','pig'];
// animals.push('cat','dog');
// console.log(animals);

months.sort();
console.log(months);
