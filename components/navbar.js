function navbar(){
    return ` <div class="nav-top">
    <div class="nav-float-right">
        <div><i class="fas fa-phone-alt"></i> <p>Call Us :+91-9555461555</p></div>
        <div><i class="fas fa-sign-in-alt"></i> <p>Sign in</p></div>
        <div><i class="fas fa-user"></i> <p>Create Account</p></div>
        <div><i class="fas fa-heart"></i> <p>Whishlist</p></div>
    </div>
</div>

<div class="nav-mid">
    <div class="nav-logo">
        <a href="index.html"><img src="https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/logo.jpg" alt=""> </a>
    </div>
 <div class="nav-search-box">
    <div id="search-box">
        <input type="text" placeholder="Search" id="search-bar">
        <i class="fas fa-search" style="user-select: auto;" id="search-icon"></i>
    </div>

 </div>
    <div class="cart-box">
        <i class="fas fa-shopping-cart" id="cart-icon"><span id="cart-count">0</span></i> <p>Shopping Cart</p>
    </div>
</div>
<div class="nav-bottom">
    <div class="categories">
  
    </div>
</div>`
}

function createDropdown(categories) {

    let categoriesKeyArr = Object.keys(categories);
    console.log(categoriesKeyArr)
    let categories_box = document.querySelector(".categories");

    for(let i=0;i<categoriesKeyArr.length; i++) {

          let category_title = document.createElement("p");
          category_title.setAttribute("class","category")
          category_title.innerText = categoriesKeyArr[i];
          let dropdown_box = document.createElement("div");
          dropdown_box.setAttribute("class",`dropdown${i}`);
          dropdown_box.classList.add("dropdown");
        //   category_title.append(dropdown_box);
          
          

        let categoriesValueObj = categories[categoriesKeyArr[i]]
        let subCategoriesKeyArr= Object.keys(categoriesValueObj)
        console.log(subCategoriesKeyArr)
        
            for(let j=0;j<subCategoriesKeyArr.length;j++) {
                
                let sub_category_box = document.createElement("div");
                let sub_category_title = document.createElement("h3");
                sub_category_title.setAttribute("class","sub-category-title");
                sub_category_title.innerText = subCategoriesKeyArr[j];
                sub_category_box.append(sub_category_title);
                let sub_category_keywords_box = document.createElement("div")
                if(subCategoriesKeyArr[j]=="Brands Of Your Choice"){

                     sub_category_keywords_box.setAttribute("class","brands-section")
                   }
            let subCategoriesValueObj = categoriesValueObj[subCategoriesKeyArr[j]] 
            let keywordsKeyArr = Object.keys(subCategoriesValueObj)
            console.log(keywordsKeyArr)  

                    for(let k=0;k<keywordsKeyArr.length;k++) {
                   


                        let keyword_title  = document.createElement("p");
                        keyword_title.innerText = keywordsKeyArr[k];
                        keyword_title.setAttribute("class","dropdown-keyword-title")

                        let  productArr = subCategoriesValueObj[keywordsKeyArr[k]]
                            if(productArr.length==0) {
                              
                                keyword_title.style.color  = "gray"
                                
                            }  
                        keyword_title.addEventListener("click",()=>{
                          localStorage.setItem("productLocalArr",JSON.stringify(productArr))
                          window.location.href  = "product.html"
                        })

                        sub_category_keywords_box.append(keyword_title)

                    }
                    sub_category_box.append(sub_category_keywords_box)
                    dropdown_box.append(sub_category_box);
            }
            category_title.append(dropdown_box)
            categories_box.append(category_title)

    }

}

export  {navbar,createDropdown}