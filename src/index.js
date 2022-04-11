// import { logo } from "./logo";
import "./index.css";
import "./app.css";

async function appendData() {
  const response = await fetch('https://flapotest.blob.core.windows.net/test/ProductData.json');
  const json = await response.json();
  // console.log(json[0].name);
  // console.log(json[0].articles[0].price)
  // console.log(json[0].articles[0].image)

  let mainContainer = document.getElementById('data');

  for(let i = 0; i < json.length; i ++) {
    let div = document.createElement("div");
    div.classList.add('product')
    
    div.innerHTML = '<img class="productImage" src="' + json[i].articles[0].image + '">' + 
                    '<div class="productName">' + json[i].name + '</div>' +
                    '<div class="productPrice">'+ json[i].articles[0].price + '</div>';
                    
  
    mainContainer.appendChild(div);
    // var obj = json[i];
    // console.log(obj.name)
    // console.log(obj.articles[0].price)
    // console.log(obj.articles[0].image)

    
  }
}

appendData();


// document.body.appendChild(component());
// document.body.appdendChild()
// document.body.appendChild(logo());