var items = [
  {
    "id": "p0",
    "name": "The Big Poster",
    "cost": 35
  },
  {
    "id": "p1",
    "name": "The Matrix Poster",
    "cost": 20
  },
  {
    "id": "p2",
    "name": "Deadpool Poster",
    "cost": 25
  },
  {
    "id": "t0",
    "name": "Green Day T-shirt",
    "cost": 15
  },
  {
    "id": "t1",
    "name": "Red Hot Chili Peppers T-shirt",
    "cost": 15
  },
  {
    "id": "t2",
    "name": "Beatles T-shirt",
    "cost": 15
  }
];

var itemsContainerElement = $(".items-container");

// for each element in out items array
// append the appropriate HTML to our shopping page
$.each(items, function(index, item) {
  itemsContainerElement.append(createItemElement(item["id"], item["name"], item["cost"]));
});

function createItemElement(itemId, itemName, itemCost) {
  var itemElement =
    "<div class=\"item-container\">" +
    "<div class=\"item-thumbnail\">" + itemName + "</div>" +
    "<div class=\"item-price-quantity\">" +
    "<span class=\"item-price\">$" + itemCost + "</span>" +
    "<br><br>" +
    "<label>Quantity</label><input class=\"item-quantity\" id=\"" + itemId + "\" type=\"number\" value=\"1\"></input>" +
    "</div>" +
    "<div class=\"options-container\">" +
    "<button data-quantityid=\"" + itemId + "\" data-price=\"" + itemCost + "\" data-item=\"" + itemName + "\" class=\"item-add\">Add To Cart</button>" +
    "</div>" +
    "</div>";
  // return the string of HTML we just created
  // and configured using out item data
  return itemElement;
}
