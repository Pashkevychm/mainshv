let products =[ 
    {
        id:1,
        name: "iphone17 pro",
        image: "https://istop.ua/wp-content/uploads/2023/11/apple-airpods-max-silver-mgyj3.1000x1000.jpeg",
        description: "gjne;ybq ntktajy",
        type: "phone",
        prise:20000
    },
    {
        id:1,
        name: "airpods pro",
        image: "https://swipe.ua/content/images/32/536x536l50nn0/83139999207797.png",
        description: "gjne;ybq ntktajy",
        type: "headphone",
        prise:20000
    },
];
let cart =[];
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
                <button type="button" class="btn btn-p">Додати до кошику</button>
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
    let product = products.find(p => p.id == productId);
    if(product){
        cart.push(product);
        alert("товар додано" + product.name)
    }
}

let productsMap = {
    "всі": "all",
    "телефон":"pohone",
    "навушники":"headphone"
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
        let productCard = event.target.closeset('products')
        let productId = parseInt(productCard.dataset.id)
        addToCard(productId)
    }
})

renderProducts(products)
stupFilterButtons()