const removeActive = () =>{
    const removeBtn = document.querySelectorAll(".lesson-btn");
    // console.log(removeBtn);
    removeBtn.forEach((btn)=> btn.classList.remove("active"));//remove active class
}

const mangSppiner =(sppin)=>{
    if(sppin==true){
        document.getElementById("sppiner").classList.remove("hidden");
        document.getElementById("card-container").classList.add("hidden");
    }else{
        document.getElementById("card-container").classList.remove("hidden");
        document.getElementById("sppiner").classList.add("hidden");
    }
}

const ProdctCatagori = async ()=>{
    mangSppiner(true)
    const url = `https://fakestoreapi.com/products/categories`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);

    const catagoris = document.getElementById("catg-continer");
    catagoris.innerHTML ="";
    const allBtn = document.createElement("a");
    allBtn.className = "btn px-10 rounded-2xl shadow-lg lesson-btn";
    allBtn.innerHTML = "<p>All</p>";
    allBtn.onclick = () =>{
        removeActive();
        allBtn.classList.add("active");
        prodectAll();
    }; 
    catagoris.append(allBtn);

    data.forEach(catgori => {
        // console.log(catgori)
        const btn = document.createElement("a");
        btn.className="btn rounded-2xl shadow-lg lesson-btn"
        btn.onclick =()=> {
            removeActive();
            btn.classList.add("active");
            prodectAll(catgori);
        };
        btn.innerHTML=`
            <p>${catgori}</p>
        `;
        catagoris.append(btn);
    });
      mangSppiner(false)
}
ProdctCatagori();



// {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
//     "rating": {
//         "rate": 3.9,
//         "count": 120
//     }
// }

const prodectAll = async(category = "")=>{

    mangSppiner(true);
    const url =`https://fakestoreapi.com/products`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data)

    const card = document.getElementById("card-container");
    card.innerHTML="";

    // const Filtered = category ? data.filter(p => p.category === category) : data;
    const filtered = category ? data.filter(p => p.category === category) : data;

    filtered.forEach(product => {

        // console.log(product.price);
        
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="card bg-base-100 w-full shadow-sm
                transition-transform duration-300 ease-in-out
                hover:-translate-y-3 hover:shadow-xl">
                <figure class="h-120">
                    <img
                    src="${product.image}"
                    alt="Shoes" />
                </figure>
                <div class="card-body">
                    <div class="flex justify-between items-center">
                        <h4 class="badge badge-sm bg-slate-300 text-blue-700 font-semibold">${product.category}</h4>
                        <div class="flex justify-center items-center gap-1">
                            <i class="fa-solid fa-star text-yellow-300"></i>
                            <div class="flex gap-1">
                                <p>${product.rating.rate}</p>
                                <p>(${product.rating.count})</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p class="text-base font-medium">${product.title}</p>
                        <h2 class="text-xl font-bold">${product.price}</h2>
                    </div>
                    <div class="grid grid-cols-2 card-actions justify-between">
                        <button class="btn rounded-xl shadow-2xl px-9 gap-3"><i class="fa-solid fa-eye"></i> Details</button>
                        <button class="btn btn-primary rounded-xl shadow-2xl px-9 gap-3"><i class="fa-solid fa-cart-shopping"></i> Add</button>
                    </div>
                </div>
            </div>
        `;
        card.append(div);
    });
    mangSppiner(false);
}

const removeNavActive = () =>{
    const removeBtn = document.querySelectorAll(".btn-product");
    // console.log(removeBtn);
    removeBtn.forEach((btn)=> btn.classList.remove("active-nav"));//remove active class
}

const scrollProduct = ()=>{
    const lessonlId = document.getElementById("our-product");
    lessonlId.scrollIntoView({behavior:"smooth"});
}

const contenerHidden = ()=>{
    const hero = document.getElementById("hero-contener");
    hero.classList.add("hidden");

    const chooseConteiner = document.getElementById("choose-conteiner");
    chooseConteiner.classList.add("hidden");

    const trandingContainer = document.getElementById("tranding-container");
    trandingContainer.classList.add("hidden");
}

const conteinerRemovehidden = () =>{
    const ourProduct = document.getElementById("our-product");
    ourProduct.classList.remove("hidden");
    
}

const products = () =>{
    contenerHidden();
    conteinerRemovehidden();
    scrollProduct();
    removeNavActive();
    document.getElementById("product-btn").classList.add("active-nav")
    document.getElementById("product-bt").classList.add("active-nav")
}

const homeHidden = ()=>{
    const hero = document.getElementById("hero-contener");
    hero.classList.remove("hidden");

    const chooseConteiner = document.getElementById("choose-conteiner");
    chooseConteiner.classList.remove("hidden");

    const trandingContainer = document.getElementById("tranding-container");
    trandingContainer.classList.remove("hidden");
}

const homeAddhidden = () =>{
    const ourProduct = document.getElementById("our-product");
    ourProduct.classList.add("hidden");
}

const home = () =>{
    homeHidden();
    homeAddhidden();
    removeNavActive();
    document.getElementById("home-btn").classList.add("active-nav")
    document.getElementById("home-bt").classList.add("active-nav")
}

