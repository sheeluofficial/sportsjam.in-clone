
function carousel() {
    return `  <div class="left-arrow">
    <i class="fas fa-chevron-left"></i>
</div>

    <img src="" alt="" id="carousel-img"> 
    <div class="right-arrow">
        <i class="fas fa-chevron-right"></i>
    </div>`
}

function carouselScript() {
    
let images = [
    "assets/1.jpg",
    "assets/2.jpg",
    "assets/3.jpg",
    "assets/4.jpg",
    "assets/5.jpg",
    "assets/6.jpg",
    "assets/7.jpg"
    ];

let index = 1;

setInterval(()=>{
    index = (index + 1)%images.length;
    carousel_img(images,index)
},6000);
carousel_img(images,0);

function carousel_img(images,index) {
let img = document.getElementById("carousel-img");
img.setAttribute("src",images[index]);
 }

 let left_arrow   = document.querySelector(".left-arrow");
 let right_arrow  = document.querySelector(".right-arrow");

 left_arrow.addEventListener("click",()=>{
     if(index==0) {
index=images.length-1;
     } else{
         index--;
     }
  
      carousel_img(images,index);
 }) 
 right_arrow.addEventListener("click",()=>{
     index = (index +1 )%images.length;
      carousel_img(images,index);
 }) 

}

export {carousel,carouselScript}