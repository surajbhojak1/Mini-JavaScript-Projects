let products = [
    { name: "Boat Headphone", image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "10000", headline: "Spark The Feel" },
    { name: "iphone15", image: "https://images.unsplash.com/photo-1695619575474-9b45e37bc1e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "55000", headline: "Dynamic Display" },
    { name: "Wire", image: "https://images.unsplash.com/photo-1518181835702-6eef8b4b2113?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "3000", headline: "Current" },
    { name: "Coke", image: "https://images.unsplash.com/photo-1596803244618-8dbee441d70b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "300", headline: "Coka Cola Tu.." },
    { name: "Pillow", image: "https://plus.unsplash.com/premium_photo-1664300639940-9ee2bbc1bd1d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "1500", headline: "Feel like Boo.. Booo..." },
    { name: "Fair & Lovely", image: "https://images.unsplash.com/photo-1562179350-5755161976cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "150", headline: "Choriyan te liye" },
];

let popularproducts = [
    { name: "Earbuds", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "10000", headline: "Bass Boom" },
    { name: "LCD Smart Tv", image: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "55000", headline: "Theater Bolte" },
    { name: "Jwallerys", image: "https://images.unsplash.com/photo-1559560864-854edd2b01e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "3000", headline: "Beaty..." },
    { name: "Bedsheets", image: "https://plus.unsplash.com/premium_photo-1675537843200-78c1a0ea1736?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "300", headline: "Colorfull" },

];

let cart = []


function showproduct(){
    let clutter = ""
    products.forEach(function(obj,index) {
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
            <img class="w-full h-full object-cover"  src="${obj.image}" />
        </div>
        <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">${obj.name}</h1>
            <div class="flex justify-between w-full items-center mt-2">
                   <div class="w-1/2">
                    <h3 class="font-semibold opacity-20">${obj.headline}</h3>
                       <h4 class="font-semibold mt-2">&#8377;${obj.price}</h4>
                </div>
                <button data-index="${index}" class="add" class="w-10 h-10 rounded-full  bg-[#4A4563] text-yellow-400"><i class="add"
                data-index="${index}"
                           class="ri-add-line "></i></button>
               </div>
            </div>
            </div>`
    });
   
    document.querySelector(".products").innerHTML = clutter;
};


function showpopular(){
    let clutter =  ""
    popularproducts.forEach(function(obj){
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
     <img class="w-full h-full object-cover" src="${obj.image}" />
        </div>
     <div class="data py-2 w-full">
         <h1 class="leading-none font-semibold">${obj.name}</h1>
         <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${obj.headline}</h4>
         <h4 class="mt-3 font-semibold text-zinc-500">&#8377;${obj.price}</h4>
     </div>
 </div> `
    })
    document.querySelector(".populars").innerHTML = clutter;
}

function addcart(){
    document.querySelector(".products").addEventListener
    ("click",function(details){
        if(details.target.clasName.contains("add")){
            cart.push(details.target.dataset.index)
        }
    })
}

addcart()
showpopular();
showproduct();









