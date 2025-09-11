const flowers = [
  {
    name: "Rose",
    price: "$40",
    image: "https://i.pinimg.com/736x/6b/45/f0/6b45f04e2860ba8d504c79cdff1043ae.jpg"
  },
  {
    name: "Lavender",
    price: "$35",
    image: "https://i.pinimg.com/736x/80/61/f0/8061f0bf55650468e3cd0cc9d5baa94c.jpg"
  },
  {
    name: "Tulip",
    price: "$40",
    image: "https://i.pinimg.com/736x/d1/1e/ba/d11eba27ab677a8a922627296ed6cf33.jpg"
  },
  {
    name: "Lilac",
    price: "$30",
    image: "https://i.pinimg.com/736x/b6/4d/ab/b64dab16f460cfd8ccba44aefe69d9b6.jpg"
  },
  {
    name: "Sakura",
    price: "$35",
    image: "https://i.pinimg.com/1200x/ce/66/c0/ce66c0cda994c6d67fb6f0ed07067177.jpg"
  },
  {
    name: "Sweet Pea",
    price: "$30",
    image: "https://i.pinimg.com/1200x/12/7d/2f/127d2fb91a22ea69c79abb249b12f4c1.jpg"
  },
  {
    name: "hydrangea",
    price: "$35",
    image: "https://i.pinimg.com/736x/b2/b1/fa/b2b1faf7a923f604ec6ad3207a99ee67.jpg"
  }
];

const main = document.querySelector('.main');

flowers.forEach(flower => {
  const card = document.createElement('div');
  card.className = 'card';

card.innerHTML = `
  <span class="favorite">♡</span>
  <img src="${flower.image}" alt="${flower.name}">
  <div class="name">${flower.name}</div>
  <div class="price">${flower.price}</div>
  <a href="buy.html"><button class="buy-btn">View</button></a>
`;




  main.appendChild(card);
});