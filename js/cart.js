// this is where all our cart items will go
var cart = {};

// get a reference to our output html element
var output = document.querySelector("#cart-contents");

// this function outputs a newline a string to our output html element
function outputValue(value) {
  // the jQuery equivalent of:
  // output.innerHTML = output.innerHTML + "<br>" + value;
  $("#cart-contents").append("<br>" + value);
}

function outputBoldValue(value) {
  outputValue("<span class=\"heavy-text\">"+value+"</span>");
}

// this function will output a new string to the shopping cart
function shoppingQuantity(cartQuantity){
  $(".cart-title").html("");
  $(".cart-title").append("Shopping Cart (" + cartQuantity + ")");
}

// pre-written functions from homework 3

function addToCart(item, quantity, cost){
  // add the item to our list
  cart[item] = {};

  var itemObject = cart[item];

  itemObject["quantity"] = quantity;
  itemObject["cost"] = cost;
  // clear and update the log
  printCartList();
}

function removeFromCart(item){
  // check if the item is even in our list
  if (cart[item] != undefined) {
    // delete the item from our list
    delete cart[item];
    // clear and update the log
    printCartList();
  } else {
    // let the user know that the item isn't in our list
    alert("Error: That item isn't in your shopping list");
  }
}

function printCartList(){
  // clear our output html element
  output.innerHTML = "";

  var subTotal = 0;

  // quantityTotal
  var quantityTotalCart = 0;


  for (cartKey in cart) {
      var itemTotal = cart[cartKey]["quantity"] * cart[cartKey]["cost"];

      // to make the quantity a number instead of value of an array
      var quantityTotal = cart[cartKey]["quantity"]*1;
      // print your cart item to the output
      outputValue(cartKey + ": " + "$" + itemTotal + " (" + cart[cartKey]["quantity"] + ")");

      subTotal += itemTotal;

      quantityTotalCart += quantityTotal;
  }

  // to add the quantity Total in the cart
  console.log(quantityTotalCart);
  shoppingQuantity(quantityTotalCart);

  // print your subTotal to the output
  outputValue("Sub-total : "+ "$" + subTotal);

  printTaxAndShipping(subTotal);
}

function printTaxAndShipping(subTotal) {
  var taxRate = 0.0625;
  var shipping = 0;

  var tax = subTotal * taxRate;

  // print tax to the output
  outputValue("Tax: $" + tax);

  if(subTotal < 100) {
    shipping = 15;
  }

  // print shipping to the output
  outputValue("Shipping: $" + shipping.toFixed(2));

  printTotal(subTotal, tax, shipping);
}

function printTotal(subTotal, tax, shipping) {
  var total = subTotal + tax + shipping;

  // print total the output
  outputBoldValue("Total: $" + total.toFixed(2));
}
