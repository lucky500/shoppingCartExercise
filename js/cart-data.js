var items = [
  {
    "id": "p0",
    "name": "The Big Poster",
    "image": "https://s-media-cache-ak0.pinimg.com/736x/8b/55/30/8b5530268ad5eb995e209f997e38cec5.jpg",
    "cost": 35
  },
  {
    "id": "p1",
    "name": "The Matrix Poster",
    "image": "http://fashionretailnews.com/I/2016/05/astounding-luxury-house-designs-and-floor-plans-ultimanota-luxury-also-luxury-house-photos-architectures-photo-luxury-house-designs.jpg",
    "cost": 20
  },
  {
    "id": "p2",
    "name": "Deadpool Poster",
    "image": "http://www.dupontregistry.com/portal08/images/Homes-LuxuryHome1.jpg",
    "cost": 25
  },
  {
    "id": "t0",
    "name": "Green Day T-shirt",
    "image": "http://www.idesignarch.com/wp-content/uploads/Contemporary-Luxury-Home-LA_1.jpeg",
    "cost": 15
  },
  {
    "id": "t1",
    "name": "Red Hot Chili Peppers T-shirt",
    "image": "http://www.zillow.com/blog/files/2010/09/Spelling-Manor1.jpg",
    "cost": 15
  },
  {
    "id": "t2",
    "name": "Beatles T-shirt",
    "image": "http://picmia.com/img/773128.jpg",
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
    "<div class=\"item-container img\">" +
    "<div class=\"img\"><img src=\"" + itemImage + "\" class=\"img\">" + "</div>" +
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
