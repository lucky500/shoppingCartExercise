// same code in plain JavaScript
// var itemButtons = document.querySelectorAll(".item-add");
var itemButtons = $(".item-add");
var cartTitleToggle = $(".cart-title");

// same code in plain JavaScript
// for (var i = 0; i < itemButtons.length; i++) {
//   // for all buttons, add an onclick event to them
//   itemButtons[i].onclick = function(event) {
//     var itemName = event.target.dataset.item;
//     var itemPrice = event.target.dataset.price;
//
//     // get the value of the quantity input that is associated with our button
//     var quantityElementId = event.target.dataset.quantityid;
//     var quantityInputElement = document.getElementById(quantityElementId);
//     var itemQuantity = quantityInputElement.value;
//
//     addToCart(itemName, itemQuantity, itemPrice);
//   }
// }

itemButtons.click(function(event) {
  var itemName = event.target.dataset.item;
  // var itemImage = event.target.dataset.image;
  var itemPrice = event.target.dataset.price;

  // get the value of the quantity input that is associated with our button
  var quantityElementId = event.target.dataset.quantityid;
  var quantityInputElement = document.getElementById(quantityElementId);
  var itemQuantity = quantityInputElement.value;

  addToCart(itemName, itemQuantity, itemPrice);
});

cartTitleToggle.on('click', function(){
  $("#cart-contents").toggleClass("hide-content");
})
