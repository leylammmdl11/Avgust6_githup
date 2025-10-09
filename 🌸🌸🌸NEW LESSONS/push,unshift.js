// tap1
let fruits = ["apple", "banana", "cherry"];
fruits.push("orange");
fruits.pop();
fruits.unshift("watermelon"); 
fruits.shift();
console.log("Fruits:", fruits);


//tap2
let sentence = "JavaScript is fun";
let words = sentence.split(" "); 
words.push("really");
let newSentence = words.join(" "); 
console.log("Sentence:", newSentence);

let users = ["Ali", "Leyla", "Rashid"];
users.push("Nigar");
users.shift();
let usersString = users.join(", "); 
console.log("Users:", usersString);


// tap3
let toDoList = [];
toDoList.unshift("Wake up");
toDoList.push("Do homework"); 
toDoList.push("Play football"); 
toDoList.pop();
let finalList = toDoList.join(" -> ");
console.log("To-Do List:", finalList);
