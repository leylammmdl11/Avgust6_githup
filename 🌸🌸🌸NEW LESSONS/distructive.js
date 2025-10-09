const number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];


const [first, second, ...otherNums] = number;

console.log(first);  
console.log(second);  
console.log(otherNums);  

//tap 2


const numbers = [12, 45, 7, 89, 23, 56, 7799, 33, 67, 10];
const maxNum = Math.max(...numbers);
console.log(maxNum); 