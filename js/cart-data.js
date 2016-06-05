var items = [
  {
    "id": "p0",
    "name": "U2 - War  - 1983",
    "image": "http://i.imgur.com/f4HUDCM.jpg",
    "cost": 35
  },
  {
    "id": "p1",
    "name": "The Smiths - Singles - 1995",
    "image": "http://i.imgur.com/82hGY6m.jpg",
    "cost": 20
  },
  {
    "id": "p2",
    "name": "The Rolling Stones - Beggars Banquet - 1968",
    "image": "http://i.imgur.com/03jTyhZ.jpg",
    "cost": 25
  },
  {
    "id": "t0",
    "name": "The Cure  - Staring at the Sea - 1986",
    "image": "http://i.imgur.com/gzEvzta.jpg",
    "cost": 15
  },
  {
    "id": "t1",
    "name": "The Clash - London Calling  - 1979",
    "image": "http://i.imgur.com/gtAsvEM.jpg",
    "cost": 15
  },
  {
    "id": "t2",
    "name": "Beatles  - Abbey Road - 1969",
    "image": "http://i.imgur.com/5wAe4WQ.jpg",
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