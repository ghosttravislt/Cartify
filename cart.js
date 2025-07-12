let cartURL = "https://fakestoreapi.com/products";

async function cartFetch() {
  let fetchedCart = new Promise((res, rej) => {
    setTimeout(async () => {
      let cartResponse = await fetch(cartURL);
      let cartData = cartResponse.json();
      res(cartData);
    }, 1000);
  });

  let fetchedDataCart = await fetchedCart;
  console.log(fetchedDataCart);
}

cartFetch();
