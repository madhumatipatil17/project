let label = document.getElementById("total");    //calling from cart.html for checkout button
let ShoppingCart = document.getElementById("shop");   //for card

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");    //for getting number in cart
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
//when we are having data on basket
let generateCartItems = () => {
  if (basket.length !== 0) {    //not = 0 run this code or run next code
    return (ShoppingCart.innerHTML = basket             //basket is arraya will carry all the selected vslues
      .map((x) => {
        let { id, item } = x;        //id and item will store in x
        let search = shopItemsData.fruits.find((y) => y.id === id) || [] && shopItemsData.vegitable.find((y) => y.id === id) || []; //we are seaching  what are the id having in basket that we are matchung from data .js
        let { name } = search  //so we can give only name insted of search
        return `
      <div class="cart-item">
        <img width="100"  src=${search.img} alt="" />
        <div class="details">

          <div class="title-price-x">
              <h4 class="title-price">
                <p>${name}</p>
                <p class="cart-item-price">$ ${search.price}</p>
              </h4>
              <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
          </div>

          <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">${item}</div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>

          <h3>$ ${item * search.price}</h3>   //mutliplay by price
        </div>
      </div>
      `;
      })
      .join(""));
    //not having anything in basket
  } else {
    ShoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2 class='empty'>Cart is Empty</h2>
    <a href="../index.html">
      <button class="HomeBtn">Back to home</button>
    </a>
    `;
  }
};

generateCartItems();

let increment = (id) => {
  let = id;
  let search = basket.find((x) => x.id === id);

  if (search === undefined) {
    basket.push({
      id: id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  generateCartItems();
  update(id);
  localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
  let = id;
  let search = basket.find((x) => x.id === id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(id);
  basket = basket.filter((x) => x.item !== 0);
  generateCartItems();    //rerender the card with update dversion
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};


//removing item by clicking x mark

let removeItem = (id) => {   //using that unqi id deleting
  let = id;
  // console.log(.id);
  basket = basket.filter((x) => x.id !== id); //filtering out data remove the itm 0 remove tha item from cart and update in local s
  generateCartItems();          //it will remove in screen also 
  TotalAmount();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
};

let clearCart = () => {
  basket = [];      //it will empty the items
  generateCartItems();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));   //keepinh here to updte the local storagea
};

let TotalAmount = () => {
  if (basket.length !== 0) {         //when we have data in local storage
    let amount = basket
      .map((x) => {
        let { item, id } = x;       //destructinging the x 
        let search = shopItemsData.fruits.find((y) => y.id === id) || [] && shopItemsData.vegitable.find((y) => y.id === id) || []

        return item * search.price;    //total price of indivisual cares
      })
      .reduce((x, y) => x + y, 0);     //all the amout is adding   x is previous nno and y is next no
    localStorage.setItem("totalAmount", amount)
    // console.log(amount);
    label.innerHTML = `
    <h2 class='text'>Total Bill : $ ${amount}</h2>
    <button class="checkout" onclick="payment()">Checkout</button>
    <button onclick="clearCart()" class="removeAll">Clear Cart</button>

    `;
  } else return;   //when we have no data in local storage
};

TotalAmount();

function payment() {
  location.href = '../checkout/index.html'
}
