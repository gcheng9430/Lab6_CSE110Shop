// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO

  //if the data is not in loca storage, then fetch data

  if (!window.localStorage.getItem('myArray')){
     

       fetch('https://fakestoreapi.com/products')
       .then(response => response.json())
       .then(data=>{

           
          var stringResponse = JSON.stringify(data);
          window.localStorage.setItem('myArray', stirngResponse);
               
          window.localStorage.setItem('cart','[]');

       })

  }
  
 

  var myContainer = document.getElementById("product-list");
  let myCart = JSON.parse(window.localStorage.getItem(localStorage.length-1));

// retrieve data 

  var arr = JSON.parse(window.localStorage.getItem('myArray'));
  for (var r in arr){
  //for each of the item fetched, create a custom product-item and attach to container

    //create the item
    let myItem = document.createElement('product-item');
    myItem.setAttribute('img', r.image);
    myItem.setAttribute('alt', r.title);
    myItem.setAttribute('titleText', r.title);
    myItem.setAttribute('priceText', r.price);
    //if the item is already in the cart
    if (myCart.includes(r.id)){

    }
    //append it to the container 
    myContainer.appendChild(myItem);

  }
});

/*
//add event listener to every button
for (let btn in document.querySelector('button')){
btn.addEventListener(onclick,function(){addOrRemove(btn)});
}

function addOrRemove(btn){
  let count = document.getElementById('cart-count');
  let cart = JSON.parse(window.localStorage.getItem(localStorage.length-1));

  //to add to cart
  if (btn.textContent == 'Add to Cart'){
    count ++;
    btn.textContent = 'Remove from Cart';
    cart.push();
  } else { //to remove from cart
    count --;
    btn.textContent = 'Add to Cart';

  }
}
*/

