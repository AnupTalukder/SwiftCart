

const GetTrending = () => {
    url = "https://fakestoreapi.com/products"
    fetch(url)
        .then(res => res.json())
        .then(data => FirstThreeRateSelect(data))

}


//0: {
// "id": 1,
// "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// "price": 109.95,
// "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "category": "men's clothing",
// "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
// "rating": {
// "rate": 3.9,
// "count": 120
// }
// },

const FirstThreeRateSelect = (datas) => {
    for (let i = 0; i < 3; i++) {
        ShowTrending(datas[i]);
        // console.log(datas[i]);
    }


}

const ShowTrending = (datas) => {
    const SelectContainer = document.getElementById("trending-card")
    
    const CreateDiv = document.createElement("div")
    CreateDiv.innerHTML = `
 
                <div class="card bg-base-100 w-full max-w-sm shadow-sm">
                    <figure>
                        <img src=${datas.image}
                             width="300" height="400"/>
                    </figure>

                    <div class="card-body h-full">
                        <h2 class="flex card-title text-sm justify-between text-left">
                         <p class="text-blue-800 rounded-sm bg-indigo-100 w-1/2 ">${datas.category}</p>
                            <div class=""><i class="fa-solid fa-star text-yellow-500"></i> ${datas.rating.rate} (${datas.rating.count})</div>
                        </h2>
                        <p class="pb-3 text-xl overflow-hidden whitespace-nowrap text-ellipsis">${datas.title}</p>
                        <p class="font-bold pb-2">$ ${datas.price}</p>
                        <div class="card-actions justify-between">
                            <div class="badge badge-outline"><i class="fa-regular fa-eye"></i> Details</div>
                            <div class="badge badge-outline bg-blue-600 text-white px-5 py-3"><i
                                    class="fa-solid fa-cart-shopping"></i> Add</div>
                        </div>
                    </div>
                </div>

               
 `;


 SelectContainer.append(CreateDiv);

  }



GetTrending();