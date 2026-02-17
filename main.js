
 let allproducts=[];

//   show trending products 

const GetTrending = () => {
    const url = "https://fakestoreapi.com/products"
    fetch(url)
        .then(res => res.json())
        .then(data => FirstThreeRateSelect(data))

}


const FirstThreeRateSelect = (datas) => {
    for (let i = 0; i < 3; i++) {
        ShowTrending(datas[i]);

    }

}

const ShowTrending = (datas) => {
    const SelectContainer = document.getElementById("trending-card")

    const CreateDiv = document.createElement("div")

    CreateDiv.innerHTML = `
 
                <div class="card bg-base-100 w-96 h-100 shadow-sm">
                    <figure class="overflow-hidden">
                        <img src=${datas.image}
                             class="w-full h-full"/>
                    </figure>

                    <div class="card-body flex flex-col h-full">
                        <h2 class="flex card-title text-sm justify-between text-left">
                         <p class="text-blue-800 bg-rounded-sm">${datas.category}</p>
                            <div class=""><i class="fa-solid fa-star text-yellow-500"></i> ${datas.rating.rate} (${datas.rating.count})</div>
                        </h2>
                        <p class="text-xl overflow-hidden whitespace-nowrap text-ellipsis">${datas.title}</p>
                        <p class="font-bold pb-2">$ ${datas.price}</p>
                        <div class="card-actions justify-between mt-auto">
                            <div onclick="showModal(${datas.id})" class="badge badge-outline"><i class="fa-regular fa-eye"></i> Details</div>
                            <div class="badge badge-outline bg-blue-600 text-white px-5 py-3"><i
                                    class="fa-solid fa-cart-shopping"></i> Add</div>
                        </div>
                    </div>
                </div>

               
 `;


    SelectContainer.append(CreateDiv);

}

GetTrending();

//  show all products 

const GetProductAll = () => {
    const url = "https://fakestoreapi.com/products"
    fetch(url)
        .then(res => res.json())
        .then(data => {
            allproducts=data;
            ShowProductsAll(data)})


}

const ShowProductsAll = (datas) => {
    const SelectContainer = document.getElementById("product-card")
    SelectContainer.innerHTML = " ";

    for (let i = 0; i < datas.length; i++) {

        const CreateDiv = document.createElement("div")
        CreateDiv.innerHTML = `
 
                <div class="card bg-base-100 w-96 h-100 shadow-sm">
                    <figure class="overflow-hidden">
                        <img src=${datas[i].image}
                             class="w-full h-full"/>
                    </figure>

                    <div class="card-body flex flex-col h-full">
                        <h2 class="flex card-title text-sm justify-between text-left">
                         <p class="text-blue-800 rounded-sm">${datas[i].category}</p>
                            <div class=""><i class="fa-solid fa-star text-yellow-500"></i> ${datas[i].rating.rate} (${datas[i].rating.count})</div>
                        </h2>
                        <p class="text-xl overflow-hidden whitespace-nowrap text-ellipsis">${datas[i].title}</p>
                        <p class="font-bold pb-2">$ ${datas[i].price}</p>
                        <div class="card-actions justify-between mt-auto">
                            <div onclick="showModal(${datas[i].id})" class="badge badge-outline"><i class="fa-regular fa-eye"></i> Details</div>
                            <div class="badge badge-outline bg-blue-600 text-white px-5 py-3"><i
                                    class="fa-solid fa-cart-shopping"></i> Add</div>
                        </div>
                    </div>
                </div>

               
 `;


        SelectContainer.append(CreateDiv);
    }
}

GetProductAll();



document.getElementById("btnMen").addEventListener("click", () => {
    SelectCategory("men's clothing");
});

document.getElementById("btnWomen").addEventListener("click", () => {
    SelectCategory("women's clothing");
});

document.getElementById("btnelec").addEventListener("click", () => {
    SelectCategory("electronics");
});

document.getElementById("btnjewel").addEventListener("click", () => {
    SelectCategory("jewelery");
});





// select and shows categorical producs 



const SelectCategory = async (variable) => {
    const url = "https://fakestoreapi.com/products/categories"
    const res = await fetch(url)
    const data = await res.json()
    data.forEach(element => {
        if (element === variable) {
            GetCategoryProduct(element);
        }
    })


}




const GetCategoryProduct = (category) => {

    const url = `https://fakestoreapi.com/products/category/${category}`
    fetch(url)
        .then(res => res.json())
        .then(data => ShowCategoryProducts(data))

}

const ShowCategoryProducts = (datas) => {

    const SelectContainer = document.getElementById("product-card")
    SelectContainer.innerHTML = " ";

    for (let i = 0; i < datas.length; i++) {

        const CreateDiv = document.createElement("div")
        CreateDiv.innerHTML = `
 
                <div class="card bg-base-100 w-96 h-100 shadow-sm">
                   
                     <div class="overflow-hidden">
                        <img src=${datas[i].image}
                             class="w-full h-full"/>
                     </div>

                    <div class="card-body flex flex-col h-full">
                        <h2 class="flex card-title text-sm justify-between text-left pb-4">
                         <p class="text-blue-800 rounded-sm">${datas[i].category}</p>
                            <div class=""><i class="fa-solid fa-star text-yellow-500">
                            </i> ${datas[i].rating.rate} (${datas[i].rating.count})
                            </div>
                        </h2>
                        <p class="text-xl overflow-hidden whitespace-nowrap text-ellipsis">${datas[i].title}</p>
                        <p class="font-bold">$ ${datas[i].price}</p>
                        <div class="card-actions justify-between mt-auto">
                            <div class="badge badge-outline" onclick="showModal(${datas[i].id})">
                                     <i class="fa-regular fa-eye"></i> Details
                            </div>

                            <div class="badge badge-outline bg-blue-600 text-white px-5 py-3">
                                  <i class="fa-solid fa-cart-shopping"></i> Add 
                            </div>
                        </div>
                    </div>
                </div>

               
 `;


        SelectContainer.append(CreateDiv);
    }
}

SelectCategory();


// show product section

const btnPro = document.querySelectorAll(".btnpro");
const hideAll = document.getElementById("hdnall");
const productSection = document.getElementById("prod-sec");

const showProductsOnly = () => {
  hideAll.classList.add("hidden");
  productSection.classList.remove("hidden");
};

btnPro.forEach(btn => {
  btn.addEventListener("click", showProductsOnly);
});


//  show modal

const showModal = (id) => {
    const product = allproducts.find(p => p.id === id);
    console.log(product);
    if (!product) return;

    const modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = `
        <h3 class="text-lg font-bold">${product.title}</h3>
        <p class="py-4">${product.description}</p>
        <p class="font-bold">Category:<span class="font-normal pl-2">${product.category}<span></p>
        <p class="font-bold">Price:<span class="font-normal pl-2"> $${product.price}</span></p>
        <p class="font-bold">Rating:<span class="font-normal pl-2"> ${product.rating.rate} ( ${product.rating.count} )</span></p>
        <button class="btn btn-primary mt-4">Buy Now</button>
    `;

    document.getElementById("product-modal").showModal();
};