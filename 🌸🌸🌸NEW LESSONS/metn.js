let text = "Salam.Necesen";
let index = 0;

for (let i = 0; i < text.length; i++) {
  if (text[i] !== ".") continue;
  index = i;
}

console.log(index);
