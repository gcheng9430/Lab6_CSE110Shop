// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO

  //if the data is not in loca storage, then fetch data

  async function callMe(url){
    const response = await fetch(url);
    var data = await response.json();
    return data;
  }
  
  if (!window.localStorage.getItem(myArray)){
      let data = callMe('https://fakestoreapi.com/products');

      //loop through each object 
      for (var one in data){
      var stringResponse = JSON.stringify(one);
      window.localStorage.setItem(one.id, stirngResponse);
      }
  }
  
  if (!window.localStorage.getItem('cart')){
    window.localStorage.setItem('cart','[]');
  }
 

  var myContainer = document.getElementById("product-list");

// retrieve data 
for (var i= 0, len = localStorage.length-1; i<len;i++)}{
  var r = JSON.parse(window.localStorage.getItem(localStorage.key(i)));

  //for each of the item fetched, create a custom product-item and attach to container

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


