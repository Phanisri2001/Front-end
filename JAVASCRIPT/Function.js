//Array
//declare a number array
let numberArray=[10,20,30,40]
console.log(numberArray);

//for-of-loop
console.log("Initial array");
console.log(numberArray);

//push
numberArray.push(100,200)
console.log("After Inserting at End");
console.log(numberArray);

//unshift
numberArray.unshift(5,9)
console.log("After Inserting at Start");
console.log(numberArray);

//splice
numberArray.splice(2,0,3)
console.log("After Inserting Inbetween");
console.log(numberArray);

//pop
numberArray.pop(200)
console.log("Removing last element");
console.log(numberArray);

//shift
numberArray.shift(10)
console.log("Removing first element");
console.log(numberArray);