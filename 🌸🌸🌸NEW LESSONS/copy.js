const original = [6, 9, 45, 98, 34];
const copy = [...original]; 
for (let i = 0; i < copy.length; i++) {
  copy[i] = copy[i] * 2;
}
console.log("Orijinal massiv:", original); 
console.log("Surət (ikiqat edilmiş):", copy);
