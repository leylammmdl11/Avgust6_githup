let name = "Leyla";

function logGreeting() {
  console.log(name + " is a JS developer");
}

logGreeting();


XXX


let id = prompt('məhsul id daxil edin:');

switch (id) {
  case '1':
    alert('Mövcud 10 ədəd.');
    break;
  case '2':
    alert('Mövcud 256 ədəd.');
    break;
  case '3':
    alert('53 ədəd mövcuddur.');
    break;
  case '4':
    alert('Mövcud 3 ədəd.');
    break;
  default:
    alert('Mövcud deyil');
}


XXX



let input = prompt("Cinsinizi daxil edin (M və ya F):");
let gender;

if (input === "M") {
  gender = "male";
} else if (input === "F") {
  gender = "female";
} else {
  gender = "Naməlum";
}

console.log("Gender: " + gender);