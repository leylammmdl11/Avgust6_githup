  const flowers = {
    tulip: {
      name: "Tulip",
      price: "35$",
      description: "A soft bouquet of pink and white tulips with baby’s breath flowers – the perfect gift for any occasion. Wrapped in pastel pink satin, it radiates elegance and warmth.",
      image: "https://i.pinimg.com/736x/d1/1e/ba/d11eba27ab677a8a922627296ed6cf33.jpg",
      stars: 3
    },
    rose: {
      name: "Rose",
      price: "40$",
      description: "Classic red roses wrapped in golden paper – perfect for romantic gestures or celebrations.",
      image: "https://i.pinimg.com/736x/ba/b4/fb/bab4fbc519cd2b37617097b105d5017e.jpg",
      stars: 5
    },
    daisy: {
      name: "Daisy",
      price: "28$",
      description: "Cheerful bouquet of white daisies – fresh, light, and perfect for any happy occasion.",
      image: "https://i.pinimg.com/564x/c4/ae/7b/c4ae7b5cc18271e79d3844e065c69e87.jpg",
      stars: 4
    }
  };

  const urlParams = new URLSearchParams(window.location.search);
  const flowerKey = urlParams.get('flower') || 'tulip';
  const flower = flowers[flowerKey];

  if (flower) {
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelector('.details h2').textContent = flower.name;
      document.querySelector('.price').textContent = flower.price;
      document.querySelector('.description').textContent = flower.description;
      document.querySelector('.image-box img').src = flower.image;

      const starsContainer = document.querySelector('.stars');
      starsContainer.innerHTML = '';
      for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.textContent = i <= flower.stars ? '★' : '☆';
        if (i <= flower.stars) star.classList.add('active');
        starsContainer.appendChild(star);
      }
    });
  }

