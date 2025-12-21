
let products =[ 
    {
        id:1,
        name: "iPhone17 pro",
        image: "https://swipe.ua/content/images/32/536x536l50nn0/83139999207797.png",
        description: "",
        type: "phone",
        prise:88000
    },
    {
        id:2,
        name: "airpods pro",
        image: "https://istop.ua/wp-content/uploads/2023/11/apple-airpods-max-silver-mgyj3.1000x1000.jpeg",
        description: "",
        type: "headphone",
        prise:29999
    },
       {
        id:3,
        name: "Apple Watch",
        image: "https://images.prom.ua/6953708158_w640_h640_smart-godinnik-apple-watch.jpg",
        description: "",
        type: "clock",
        prise:13000
    }
];
let cart =JSON.parse(localStorage.getItem('cart')) || [];

let productsContainer = document.querySelector(".products-div")
let btnGroup = document.querySelector(".btn-group")

function renderProducts(items){
    productsContainer.innerHTML =""
    if (items.length == 0){
        productsContainer.innerHTML = '<p> товарів не знайдено</p>'
        return;

    }
    items.forEach(function(item){
        let productHTML =`\
            <article class="card" data-id="${item.id}">
                <article class="product"> <img src="${item.image}"
                    alt="" class="product-img">
                <h3 class="product-title">${item.name} 1</h3>
                <p class = "product-prise">${item.description}</p>
                <button type="button" class="btn btn-p add-to-cart-btn">Додати до кошику</button>
            </article>
        `
        productsContainer.innerHTML +=productHTML
    })
}
function applyFiles(categoryType){
    if(categoryType == "all"){
        renderProducts(products)
    }else {
        let filteredProducts = products.filter(product => product.type == categoryType);
        renderProducts(filteredProducts)
    }
}
function addToCard(productId){
    let cartProduct = cart.find(p => p.id == productId);
    if(cartProduct){
        cartProduct.quantity +=1;
    }
    else {
        let product = products.find (p => p.id == productId);
        cart.push({...product,quantity: 1});
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("товар додано")
}
let productsMap = {
    "всі": "all",
    "телефон":"phone",
    "навушники":"headphone",
}

function stupFilterButtons(){
    for (let button of btnGroup.children) {
        button.addEventListener("click", function(){
            let category = productsMap[button.innerHTML]
            applyFiles(category)
        })
    }
}

productsContainer.addEventListener("click", function(event){
    if (event.target.classList.contains('add-to-cart-btn')) {
        let productCard = event.target.closest('.card')
        let productId = parseInt(productCard.dataset.id)
        addToCard(productId)
    }
})

renderProducts(products)
stupFilterButtons()