// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO

  //if the data is not in loca storage, then fetch data
  if (!window.localStorage.getItem(myArray)){
      let data = await fetch('https://fakestoreapi.com/products');
      let response = await data.json();

      var stringResponse = JSON.stringify(response);
      window.localStorage.setItem('myArray', stirngResponse);
  }

 

  var myContainer = document.getElementById("product-list");

// retrieve data 
  var retrieve = JSON.parse(window.localStorage.getItem('myArray'));

  //for each of the item fetched, create a custom product-item and attach to container
  for (let d in retrieve){
    //create the item
    let myItem = document.createElement('product-item');
    myItem.setAttribute('img', r.image);
    myItem.setAttribute('alt', r.title);
    myItem.setAttribute('titleText', r.title);
    myItem.setAttribute('priceText', r.price);
    //append it to the container 
    myContainer.appendChild(myItem);

  }
});


//add event listener to every button
for (let btn in document.querySelector('button')){
btn.addEventListener(onclick,function(){addOrRemove(btn)});
}

function addOrRemove(btn){
  let count = document.getElementById('cart-count');
  //to add to cart
  if (btn.textContent == 'Add to Cart'){
    count ++;
    btn.textContent = 'Remove from Cart';

  } else { //to remove from cart
    count --;
    btn.textContent = 'Add to Cart';

  }
}


