var items = [
  {
    "id": "p0",
    "name": "The Big Poster",
    "image": "http://i.imgur.com/AqTWB8U.jpg",
    "cost": 35
  },
  {
    "id": "p1",
    "name": "The Matrix Poster",
    "image": "http://i.imgur.com/uVmGml6.jpg",
    "cost": 20
  },
  {
    "id": "p2",
    "name": "Deadpool Poster",
    "image": "http://i.imgur.com/N8eHzn2.jpg",
    "cost": 25
  },
  {
    "id": "t0",
    "name": "Green Day T-shirt",
    "image": "http://i.imgur.com/jDPAn3i.jpg",
    "cost": 15
  },
  {
    "id": "t1",
    "name": "Red Hot Chili Peppers T-shirt",
    "image": "http://i.imgur.com/WlZ5sNc.jpg",
    "cost": 15
  },
  {
    "id": "t2",
    "name": "Beatles T-shirt",
    "image": "http://i.imgur.com/N5CHzbJ.jpg",
    "cost": 15
  }
];

var itemsContainerElement = $(".items-container");

// for each element in out items array
// append the appropriate HTML to our shopping page
$.each(items, function(index, item) {
  itemsContainerElement.append(createItemElement(item["id"], item["name"], item["image"], item["cost"]));
});

function createItemElement(itemId, itemName, itemImage, itemCost) {
  var itemElement =
    "<div class=\"item-container col-sm-1 col-md-3 col-lg-3 col-xl-3 clearfix\">" +
    "<div class=\"item-thumbnail\">" + itemName + "</div>" +
    "<div><img src=\"" + itemImage + "\" class=\"img\">" + "</div>" +
    "<div class=\"item-price-quantity\">" +
    "<span class=\"item-price\">$" + itemCost + "</span>" +
    "<label>Qty: </label><input class=\"item-quantity\" id=\"" + itemId + "\" type=\"number\" value=\"1\"></input>" +
    "</div>" +
    "<div class=\"options-container\">" +
    "<button data-quantityid=\"" + itemId + "\" data-price=\"" + itemCost + "\" data-item=\"" + itemName + "\" class=\"item-add btn btn-success\">Add To Cart</button>" +
    "<hr>" + 
    "</div>" +
    "</div>";
  // return the string of HTML we just created
  // and configured using out item data
  return itemElement;
}