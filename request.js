let url = "https://fakestoreapi.in/api/products/category?type=appliances";

async function fetchData() {
  const promiseFetch = new Promise((resolve, reject) => {
    setTimeout(async () => {
      const response = await fetch(url);
      let data = response.json();
      resolve(data);
    }, 1000);
  });
  let fetched = await promiseFetch;
  let allProducts = fetched.products;
  console.log(allProducts);

  let productGrid = document.querySelector(".product-grid");

  //  dispalying added item to cart in the log

  function displayData() {
    allProducts.forEach((productData) => {
      productGrid.innerHTML += `
       <div class="product-card">
            <div class="product-image">
               <img src=${productData.image} class="cart-img" alt="" />
            </div>
            <div class="product-category">${productData.category}</div>
            <div class="product-name">${productData.title}</div>
            <div class="product-footer">
              <div class="product-price">$ ${productData.price}</div>
              <button
                class="add-to-cart"
                onclick="addToCart(this, '${productData.title}' )"
              >
                +
              </button>
            </div>
          </div>

      `;
    });
  }

  displayData();
}

fetchData().then(() => {
  console.log("hello");
});
