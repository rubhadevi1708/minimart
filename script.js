const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    image: "https://images.unsplash.com/photo-1678953847562-ac509f09515b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdpcmVsZXNzaGVhZHBob25lfGVufDB8fDB8fHww"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 3499,
    image: "https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 999,
    image: "https://media.istockphoto.com/id/1129572489/photo/portable-bluetooth-speaker.webp?a=1&b=1&s=612x612&w=0&k=20&c=-7LF73ehOdwcQDMXXBtnCuUyIGMRoiaeWsBqTtdpFqs="
  },
  {
    id: 4,
    name: "Laptop Stand",
    price: 599,
    image: "https://images.unsplash.com/photo-1641247530943-6af2b42e5f06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcHN0YW5kfGVufDB8fDB8fHww"
  }
];

let cartCount = 0;
let cartTotal = 0;

function renderProducts() {
  const productList = document.getElementById("productList");

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.price})">Add to Cart</button>
    `;

    productList.appendChild(card);
  });
}

function addToCart(price) {
  cartCount++;
  cartTotal += price;

  document.getElementById("cartCount").textContent = cartCount;
  document.getElementById("cartTotal").textContent = cartTotal;
}

renderProducts();
