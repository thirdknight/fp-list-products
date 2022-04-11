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
    let img = document.createElement("img");
    div.innerHTML = '<img src="' + json[i].articles[0].image + '">' + '</br>' +
                    json[i].name + '</br>' +
                    json[i].articles[0].price +  '</br></br>';
                    
  
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