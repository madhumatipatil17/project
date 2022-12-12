let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];  //getting the items from the ls or empty arraya

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {  //maping the data.js items one by one
      let { id, name, price, desc, img } = x;    //here we are defing items
       let search = basket.find((x) => x.id === id) || [];  //all value storing in x no need to take x.name in litarals so it will get updating by is using search
      return `
    <div id=product-id-${id} class="item">
        <img width="220" src=${img} alt="">
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2>$ ${price} </h2>
            <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">
              ${search.item === undefined ? 0 : search.item}   
              </div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join(""));   //to join and remove coma
};

generateShop();

let increment = (id) => {
  let selectedItem = id;  //by taking id we are incrementing and decrementing
  let search = basket.find((x) => x.id === selectedItem.id);    //seach function is for weather the item is exist or not if exit only it will increse find is for object is exit or not

  if (search === undefined) {  // if finf the thingd only it will print ..if  the serach is undefined dont find the things we searcjh only we push the object
    basket.push({      //so pusing two things id and item those stored in basket
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  // console.log(basket);
  update(selectedItem.id);   //only item exit then it will update no is keep updating for every click
  localStorage.setItem("data", JSON.stringify(basket));  //key and object
};
let decrement = (id) => { 
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;  //every time when serach is undefined do nothing
  else if (search.item === 0) return;     //wehn item comes to zero it will not work so only given zero
  else {
    search.item -= 1;
  }
  update(selectedItem.id);    //decremeing is updating
  basket = basket.filter((x) => x.item !== 0);  //a arraya it will store  all the data from the store ..objects with which dosnt have a zero on the item  whic is having zero item filwert will remove that
  // console.log(basket);
  localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;  //id from 66th line
  calculation(); //trigering the things
};

let calculation = () => { //adding all number
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);  ''  //to add all the number  // x, y are pervious number other is next number ..o is defaul t number it will start from 0 claculation
};

calculation();   //invoking so that after refreshing nu will stay same likw tgat
