let product =[ 
    {
        id:1,
        name: "iphone1222",
        image: "img/testAvi",
        description: "gjne;ybq ntktajy",
        type: "phone",
        prise:20000
    },
    {
           id:1,
        name: "iphone1222",
        image: "img/testAvi",
        description: "gjne;ybq ntktajy",
        type: "phone",
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
        let productHTML =`
            <article class="product"> <img src="${item.image}"
                alt="" class="product-img">
            <h3 class="product-title">${item.image} 1</h3>
            <p class = "product-prise">${item.image}</p>
            <button type="button" class="btn btn-p">123</button>
        </article>
        `
        productsContainer.innerHTML +=productHTML
    })
}
renderProducts(products)