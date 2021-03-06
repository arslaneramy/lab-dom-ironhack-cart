// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price  = Number(product.querySelector(".price span").innerHTML)
  const quantity = Number(product.querySelector(".quantity input").value)

  let subtotal = price * quantity;
  product.querySelector(".subtotal span").innerHTML = subtotal;

  return subtotal;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.


  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2 and 3

  let total = 0;
  let newProducts = document.getElementsByClassName('product');

  for (let newProduct of newProducts) {
    total += updateSubtotal(newProduct);
  }
  let finalTotalDisplay = document.querySelector('#total-value span');
  finalTotalDisplay.innerText = total;
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

