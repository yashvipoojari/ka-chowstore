let cart = JSON.parse(localStorage.getItem("cart")) || [];

fetch("products.json")
.then(res => res.json())
.then(data => {
showProducts(data);
});

function showProducts(data){
let container = document.getElementById("products");
if(!container) return;

container.innerHTML = "";

data.forEach(p => {
let card = document.createElement("div");
card.className = "card";

```
card.innerHTML = `
  <img src="${p['Primary Image']}">
  <h3>${p['Title']}</h3>
  <p>${p['Sale Price']}</p>
  <button onclick='viewProduct(${JSON.stringify(p)})'>View</button>
  <button onclick='addToCart(${JSON.stringify(p)})'>Cart</button>
`;

container.appendChild(card);
```

});
}

function viewProduct(p){
localStorage.setItem("product", JSON.stringify(p));
window.location.href = "product.html";
}

function addToCart(p){
cart.push(p);
localStorage.setItem("cart", JSON.stringify(cart));
alert("Added to cart");
}
