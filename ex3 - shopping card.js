// 1- List of products in the shop
const PRODUCTS = [
  { id: 1, name: "Apple", price: 2.5 },
  { id: 2, name: "Banana", price: 1.5 },
  { id: 3, name: "Orange", price: 3 },
  { id: 4, name: "Rice", price: 1.5 },
  { id: 5, name: "Chocolate", price: 3 },
];

// 2- Shopping cart
let SHOPPING_CART = [
  { id: 1, quantity: 2 },
  { id: 3, quantity: 1 },
];

/**
 * Gets the total amount of the current shopping cart.
 */
function getCartTotalAmount() {
  let result = 0;
  
  for (const cartItem of SHOPPING_CART) {
    // Find the product details in the PRODUCTS array to get the price
    const product = PRODUCTS.find(p => p.id === cartItem.id);
    if (product) {
      result += product.price * cartItem.quantity;
    }
  }
  
  return result;
}

/**
 * Adds a product to the shopping cart.
 * If exists: increment quantity. If not: add new item.
 */
function addProductToCart(productId) {
  const cartItem = SHOPPING_CART.find(item => item.id === productId);

  if (cartItem) {
    // CASE 1: Increment quantity
    cartItem.quantity++;
  } else {
    // CASE 2: Add new item with quantity 1
    SHOPPING_CART.push({ id: productId, quantity: 1 });
  }
}

/**
 * Removes a product from the shopping cart.
 * If quantity > 1: decrement. If quantity == 1: remove item.
 */
function removeProductFromCart(productId) {
  const itemIndex = SHOPPING_CART.findIndex(item => item.id === productId);

  // If the product does NOT exist, the index will be -1; we do nothing.
  if (itemIndex !== -1) {
    if (SHOPPING_CART[itemIndex].quantity > 1) {
      // CASE 1: Decrement quantity
      SHOPPING_CART[itemIndex].quantity--;
    } else {
      // CASE 2: Remove the item from the array
      SHOPPING_CART.splice(itemIndex, 1);
    }
  }
}

// --------------------------------------------------------
// TESTS ZONE
console.log(getCartTotalAmount()); 
addProductToCart(1);

console.log(JSON.stringify(SHOPPING_CART) + "\n");
addProductToCart(2);

console.log(JSON.stringify(SHOPPING_CART) + "\n");
removeProductFromCart(1);

console.log(JSON.stringify(SHOPPING_CART) + "\n");
removeProductFromCart(2);

console.log(JSON.stringify(SHOPPING_CART) + "\n");

// --------------------------------------------------------

console.log("Total Amount:", getCartTotalAmount()); // Should be 8

addProductToCart(1);
console.log("After add(1):", JSON.stringify(SHOPPING_CART)); 

addProductToCart(2);
console.log("After add(2):", JSON.stringify(SHOPPING_CART)); 

removeProductFromCart(1);
console.log("After remove(1):", JSON.stringify(SHOPPING_CART)); 

removeProductFromCart(2);
console.log("After remove(2):", JSON.stringify(SHOPPING_CART));