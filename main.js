let cartItems = [];
let cartCount = 0;

function addToCart(button, productName, price) {
  // Add item to cart
  cartItems.push({
    name: productName,
    price: price,
    id: Date.now(),
  });

  cartCount++;

  // Update cart count
  const cartCountElement = document.getElementById("cartCount");
  cartCountElement.textContent = cartCount;
  cartCountElement.classList.add("bounce");

  // Show notification
  const notification = document.getElementById("notification");
  notification.textContent = `${productName} added to cart!`;
  notification.classList.add("show");

  // Style button as added
  button.classList.add("added");
  button.innerHTML = "✓";

  // Reset button after 2 seconds
  setTimeout(() => {
    button.classList.remove("added");
    button.innerHTML = "+";
  }, 2000);

  // Hide notification after 3 seconds
  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);

  // Remove bounce animation
  setTimeout(() => {
    cartCountElement.classList.remove("bounce");
  }, 600);

  console.log("Cart items:", cartItems);
  console.log("Total items:", cartCount);
}

// Add some hover effects
document.querySelectorAll(".product-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-8px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});
