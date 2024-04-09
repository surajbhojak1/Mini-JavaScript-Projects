let arr = [
    { name: "Dolphing", image: "https://images.unsplash.com/photo-1707343846292-56e4c6abf291?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "shark", image: "https://images.unsplash.com/photo-1707343846292-56e4c6abf291?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "killer fish", image: "https://images.unsplash.com/photo-1707343846292-56e4c6abf291?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "electrical wale", image: "https://images.unsplash.com/photo-1707343846292-56e4c6abf291?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

function showimages() {

    let clutter = "";
    arr.forEach(function (obj) {
        clutter += `<div class="box">
    <img class="cursor-pointer" src="${obj.image}" alt="image">
     <div class="caption">${obj.name}</div>
    </div>`
    })
    
    document.querySelector(".container").innerHTML = clutter;
};

function searchinput(){
    let searcharea = document.querySelector("#searchinput")

        searcharea.addEventListener("focus",function(){
            document.querySelector(".overlay").style.display = "block"
        });

        searcharea.addEventListener("blur",function(){
            document.querySelector(".overlay").style.display = "none"
        });

        searcharea.addEventListener("input",function(){
           const filterarr = arr.filter( obj => obj.name.toLowerCase().startsWith(searcharea.value));

           let clutter = "";
           filterarr.forEach(function(obj){
            
            clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
               <h3 class="font-semibold">${obj.name}</h3>
        </div>`;

           })
           document.querySelector(".searchdata").style.display = "block";
           
           document.querySelector(".searchdata").innerHTML = clutter;

        });
};


searchinput();
showimages();









