console.log ("📌tapşırıq 1📌")
const ededler = [5, 8, 13, 98, 4, 3, 5, 8, 98];
const unikalEdedler = [...new Set(ededler)];
console.log("Unikal ədədlər:", unikalEdedler)


console.log ("📌tapşırıq 2📌")
const meyveler = ["alma", "kivi", "alma", "armud", "banan", "kivi"];
const ferqliMeyveler = new Set(meyveler);
console.log("Fərqli meyvə sayı:", ferqliMeyveler.size);


console.log ("📌tapşırıq 3📌")
const insanlar = new Map();

insanlar.set("Mədinə", 13);
insanlar.set("Leyla", 15);
insanlar.set("Aylin", 14);

insanlar.set("Leyla", 16);

console.log("Arzu var?", insanlar.has("Azru"));


console.log("Ad və yaşlar:");
insanlar.forEach((yas, ad) => {
  console.log(`${ad} - ${yas} yaş`);
});


console.log ("📌tapşırıq 4📌")
const meyveSay = new Map();

meyveSay.set("alma", 5);
meyveSay.set("banan", 3);
meyveSay.set("armud", 7);
meyveSay.set("banan", 6);
meyveSay.set("kivi", 4);

meyveSay.delete("armud");

console.log("Qalan meyvə sayı:", meyveSay.size); 
