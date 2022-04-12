import "./index.css";
import "./app.css";

const dV = document.getElementById("detailView");
const bV = document.getElementById('bottleView');
const toggleBtn = document.getElementById('toggle');

toggleBtn.onclick = function() {
  if(window.getComputedStyle(dV, null).getPropertyValue("display") !== 'none' && window.getComputedStyle(bV, null).getPropertyValue("display") == 'none' ) {
    dV.style.display = "none";
    bV.style.display = "block";
  } else {
    dV.style.display ="block";
    bV.style.display = "none";
  }
 }


async function appendDataDetailView() {
  const response = await fetch('https://flapotest.blob.core.windows.net/test/ProductData.json');
  const json = await response.json();
  // console.log(json[0].name);
  let mainContainer = document.getElementById('listProductsDV');

  for(let i = 0; i < json.length; i ++) {
    let div = document.createElement("div");
    div.classList.add('product')
    div.innerHTML = '<img class="productImage" src="' + json[i].articles[0].image + '">' + 
                    '<div id = "productBody" class="productBody">' +
                    '<div class="productName">' + json[i].name + '</div>' +
                    '<div class="productPrice">'+ json[i].articles[0].price + '</div>' +
                    '</div>';
    mainContainer.appendChild(div);
  }
}
appendDataDetailView();


async function appendDatabottleView() {
  const response = await fetch('https://flapotest.blob.core.windows.net/test/ProductData.json');
  const json = await response.json();
  // console.log(json[0].name);
  let mainContainer = document.getElementById('listProductsBv');

  for(let i = 0; i < json.length; i ++) {
    let div = document.createElement("div");
    div.classList.add('product')
    div.innerHTML = '<img class="productImage" src="' + json[i].articles[0].image + '">' + 
                    '<div id = "productBody" class="productBody">';
                    '</div>';
    mainContainer.appendChild(div);
  }
}
appendDatabottleView();
