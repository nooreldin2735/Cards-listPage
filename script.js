var buts = {
  "but-cart-1": 0,
  "but-cart-2": 0,
  "but-cart-3": 0,
  "but-cart-4": 0,
  "but-cart-5": 0,
  "but-cart-6": 0,
  "but-cart-7": 0,
  "but-cart-8": 0,
  "but-cart-9": 0,
};

function buttonClicked(id) {
  var button = document.getElementById(id);
  button.className = "but-after-buy";
  button.innerHTML = `
  <img onclick=Decrementby('${id}') class='left-part-but-image' src='assets/images/icon-decrement-quantity.svg'> 
  <p id='data-quant+${id}' >
  ${buts[id]}
  </p> 
  
  <img class='left-part-but-image' onclick=Incermentbuy('${id}')  src='assets/images/icon-increment-quantity.svg' >`;
}
function Incermentbuy(id) {
  buts[id] = buts[id] + 1;
  var pdata = document.getElementById(`data-quant+${id}`);
  pdata.innerText = `${buts[id]}`;
  console.log(buts);
}
function Decrementby(id) {
  if (buts[id] != 0) {
    buts[id] = buts[id] - 1;
    var pdata = document.getElementById(`data-quant+${id}`);
    pdata.innerText = `${buts[id]}`;
    console.log(buts);
  }
}
