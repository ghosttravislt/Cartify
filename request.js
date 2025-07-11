let url = "https://fakestoreapi.com/products";

async function fetchData() {
  const promiseFetch = new Promise((resolve, reject) => {
    setTimeout(async () => {
      const response = await fetch(url);
      let data = response.json();
      resolve(data);
    }, 100);
  });
  let fetched = await promiseFetch;
  let productGrid = document.querySelector(".product-grid");

  //  dispalying added item to cart in the log

  function displayData() {
    fetched.forEach((productData) => {
      let cartData = {
        cartName: `${productData.title}`,
        cartImage: `${productData.image}`,
        cartPrice: `${productData.price}`,
        cartCategory: `${productData.category}`,
      };

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
