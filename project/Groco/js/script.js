let searchForm = document.querySelector('.search-form');


let product=document.getElementById("products");
let product1=document.getElementById("products1");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let productsShow=()=>{
  let card=""
  shopItemsData.fruits.map((product)=>{
 card+=` <div class="swiper-slide box " id=product-id-${product.id} >
 <img src="${product.img}" alt="">
 <h3>${product.name}</h3>
 <div class="price"> $4.99/- - 10.99/- </div>
 <div class="stars">
     <i class="fas fa-star"></i>
     <i class="fas fa-star"></i>
     <i class="fas fa-star"></i>
     <i class="fas fa-star"></i>
     <i class="fas fa-star-half-alt"></i>
 </div>
 <span class="btn" onclick="increment(${product.id})">add to cart</span>
</div>`

  })
  product.innerHTML=card;
}


let vegitableProducts=()=>{
  let card=""
  shopItemsData.vegitable.map((product)=>{
 card+=` <div class="swiper-slide box " id=product-id-${product.id} >
 <img src="${product.img}" alt="">
 <h3>${product.name}</h3>
 <div class="price"> $4.99/- - 10.99/- </div>
 <div class="stars">
     <i class="fas fa-star"></i>
     <i class="fas fa-star"></i>
     <i class="fas fa-star"></i>
     <i class="fas fa-star"></i>
     <i class="fas fa-star-half-alt"></i>
 </div>
 <span class="btn" onclick="increment(${product.id})">add to cart</span>
</div>`

  })
  product1.innerHTML=card;
}

vegitableProducts();
productsShow();

let increment = (id) => {
  let search = basket.find((x) => x.id === id);

  if (search === undefined) {
    basket.push({
      id: id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  // console.log(basket);
  update(id);
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  // let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();






var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 4000,
        
    },
    
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      748: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 4000,
        
    },
    
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      748: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
    },
});





const name = localStorage.getItem('name')

const user = document.getElementById('user')

// const getEleme = document.querySelector('#home')
// console.log(getEleme)

if(name == null){
    // getEleme.href = '../login/login.html'
    // ./login/login.html
}else
{
    // getEleme.href = ''
    const getName = name.split("@")[0]
    user.innerHTML = `welcome ${getName}`
    document.getElementById('login').innerHTML="logout"
}




