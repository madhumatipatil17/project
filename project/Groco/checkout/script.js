
let totalPrice = document.getElementById("totalPrice");
let allimg = document.getElementById("allimg");
  

let basket = JSON.parse(localStorage.getItem("data")) || [];
console.log(basket);

let { id } = basket;
let search = shopItemsData.fruits.find((y) => y.id === id) || [] &&
    shopItemsData.vegitable.find((y) => y.id === id) || [];
let { image, productName, price } = search;


let shoppingCart = document.getElementById("ShoppingCart");

if (!JSON.parse(localStorage.getItem("objects"))) {
    
    let objects = [];
    localStorage.setItem("objects", JSON.stringify(objects));
}

let card = ''

let object = JSON.parse(localStorage.getItem("objects"))
console.log(object)
let orderId = object.length;
orderId += 1;
console.log(orderId)

// let basket = JSON.parse(sessionStorage.getItem("data")) || [];
// console.log(basket)

let cartItems = []

let generateCartItems = () => {
    if (basket.length !== 0) {
        basket.map((x) => {
            let { id, item } = x;
            console.log(item)
           
           let  search = shopItemsData.fruits.find((y) => y.id === id) || [] &&
                shopItemsData.vegitable.find((y) => y.id === id) || [];
            let { img, name, price } = search;
            search['item']=item


            cartItems.push(search)
            console.log(search)

            card += `
            <div id="card">
        <div class="cart-item">
        <div class="product-image">
            <img src="${img}" alt="" width="40%">
        </div>
        <div class="product-details">
            <h3>${name}</h3> <br>
            <span>$ ${price}</span>
            <span>Items: ${item}</span>
        </div>
    </div>
    </div>
    `
        })
    }

    shoppingCart.innerHTML = card



}

generateCartItems();
console.log(cartItems)

let totalAmount = () => {
    let total = localStorage.getItem("totalAmount");
    totalPrice.innerHTML = ` 
          <div  class="productTotal" >
          <div><h5>Total:<span >Tax include</span></h5></div>
          <div><span> $${total}</span></div>
          </div>

     `
}


totalAmount();



function payment() {

    var obj = { cartItems };

    object = [...object, obj]
    console.log(object)
    localStorage.setItem("objects", JSON.stringify(object));
    location.href = '../myorder/index.html'
    console.log("hi")
}


//validation of payment
var email = false

const validateEmail = () =>{
    const getEmail = document.getElementById('email').value
    const email_error = document.getElementById('email_error')
    const email_regex = /^[a-z0-9-.]+@(?=.*gmail)([a-z])+\.(?=.*com)([a-z]){2,3}$/
    console.log(getEmail)


    if(getEmail==''){
        email_error.innerHTML = '*required'
    }else if(email_regex.test(getEmail)===false){
        email_error.innerHTML = '*Please enter valid email'
    }else{
        email_error.innerHTML = ''
        email = true
    }
}

var card_number = false
const card_error = document.getElementById('card_detail')
const validateCardNo = ()=>{
    const getCardNo = document.getElementById('card_number').value
    const card_regex = /^([0-9]{14})$/

    if(getCardNo==''){
        card_error.innerHTML = '*required'
    }else if(card_regex.test(getCardNo)===false){
        card_error.innerHTML = '*Please enter valid number'
    }else{
        card_error.innerHTML = ''
        card_number = true
    }
}

var expire_date = false
const validateDate = () =>{
    const getExpire_date = document.getElementById('expire_date').value
    const expireDate_regex = /(0[1-9]|1[0-2])\/?(([0-9]{2})$)+/g

    if(getExpire_date==''){
        card_error.innerHTML = '*required'
    } else if(expireDate_regex.test(getExpire_date)===false){
        card_error.innerHTML = '*Please enter the valid date'
    }else{
        card_error.innerHTML  = ''
        expire_date = true
    }
}
var cvv = false
const validate_cvv = () =>{
    const get_cvv = document.getElementById('cvv').value
    const cvv_regex = /^[\d]{3}$/

    if(get_cvv==''){
        card_error.innerHTML = '*required'
    }  else if(cvv_regex.test(get_cvv)===false){
        card_error.innerHTML = '*Please enter valid cvv'
    } else{
        card_error.innerHTML = ''
        cvv = true
    }
}
var card_name = false
const validateCard_name = () =>{
    const getcard_name = document.getElementById('card_name').value
    console.log(getcard_name)
    const cardname_error = document.getElementById('cardname_error')
    const cardName_regex = /^([a-zA-Z\s]{3,15})+$/

    if(getcard_name==''){
        cardname_error.innerHTML = '*required'
    }else if(cardName_regex.test(getcard_name)===false){
        cardname_error.innerHTML = "*Please enter valide name"
    } else{
        cardname_error.innerHTML = ''
        card_name = true
    }

    if( email && card_number && expire_date && card_number && card_name ){
        const btn  = document.getElementById('btn')
        var obj = { cartItems };

        object = [ obj]
        object.push(obj)
        console.log(object)
        localStorage.setItem("objects", JSON.stringify(object));
        btn.disabled = false

    }
}

