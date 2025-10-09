const original = [1, 2, 3, 4, 5];
const copy = [...original]; 
for (let i = 0; i < copy.length; i++) {
  copy[i] = copy[i] * 2;
}
console.log("Orijinal massiv:", original); 
console.log("Surət (ikiqat edilmiş):", copy);
