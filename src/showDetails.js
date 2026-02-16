const showDetailsTranding = async(productIds) => {
    mangSppiner(true);
    const res = await fetch(`https://fakestoreapi.com/products/${productIds}`);
    const products = await res.json();

    const detailsCards = document.getElementById("detales_word-tranding");
    detailsCards.innerHTML = `
        <div class="">
            <h2 class="text-2xl font-bold">Tittle: ${products.title}</h2>
        </div>
        <div class="space-y-1">
            <h2 class="font-semibold text-base text-gray-600">Details: ${products.description}</h2>
        </div>
        <div>
            <h2 class="text-2xl font-bold">Price: ${products.price}</h2>
        </div>
       <div class="flex items-center gap-1 text-2xl font-bold">
             <i class="fa-solid fa-star text-yellow-300"></i>
            <div class="flex gap-1">
                <p class="">${products.rating.rate}</p>
            </div>
        </div>
        <div class="grid grid-cols-2 card-actions justify-between">
            <button onclick="" class="btn rounded-xl shadow-2xl px-9 gap-3"><i class="fa-solid fa-bag-shopping"></i></i>Buy Now</button>
            <button class="btn btn-primary rounded-xl shadow-2xl px-9 gap-3"><i class="fa-solid fa-cart-shopping"></i>Add to Cart</button>
        </div>
    `;
    mangSppiner(false);
    document.getElementById("detailes_container-tranding").showModal();
}