function salamVer(ad) {
  console.log("Salam, " + ad + "!");
}

function kvadrat(num) {
  return num * num;
}


function cem(a, b) {
  return a + b;
}

function enBoyuk(a, b) {
  return a > b ? a : b;
}

function cutYoxsaTek(num) {
  return num % 2 === 0 ? "Cüt" : "Tək";
}


function faktorial(n) {
  let hasil = 1;
  for (let i = 1; i <= n; i++) {
    hasil *= i;
  }
  return hasil;
}


function boyukHerfleYaz(str) {
  return str
    .split(" ")
    .map(soz => soz.charAt(0).toUpperCase() + soz.slice(1))
    .join(" ");
}


salamVer("Leyla");              
console.log(kvadrat(5));        
console.log(cem(4, 6));         
console.log(enBoyuk(7, 3));     
console.log(cutYoxsaTek(8));    
console.log(cutYoxsaTek(5));    
console.log(faktorial(5));        
console.log(boyukHerfleYaz("leyla javascript oyrenir")); 

