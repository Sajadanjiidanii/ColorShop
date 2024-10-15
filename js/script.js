const $ = document;

/// start append products in html ///

const NewProducts = $.getElementById("NewProducts");
const NewProductsArry = [
    {id : 1 ,category : "لوازم هنری" , name : "پالت" , pricy : 100 , img : "imgs/New Products/Product_1.png"},
    {id : 2 ,category : "ابزار و لوازم" , name : "ورق طلا" , pricy : 165 , img : "imgs/New Products/Product_2.png"},
    {id : 3 ,category : "ظروف خام" , name : "گلدان بتنی" , pricy : 200 , img : "imgs/New Products/Product_3.png"},
    {id : 4 ,category : "ظروف خام" , name : "گلدان بتنی" , pricy : 200 , img : "imgs/New Products/Product_4.png"},
];

const bestSellerItem = $.getElementById("bestsellerItem");
const bestSellerArry = [
    {id : 1 ,category : "رنگ" , name : "رنگ هنری سبز" , pricy : 120 , img : "imgs/New Products/Product_5.png"},
    {id : 2 ,category : "رنگ" , name : "رنگ هنری صورتی" , pricy : 120 , img : "imgs/New Products/Product_6.png"},
    {id : 3 ,category : "اسپری" , name : "اسپری زرد" , pricy : 150 , img : "imgs/New Products/Product_7.png"},
    {id : 4 ,category : "محصولات اپوکسی" , name : "جوهر الکلی" , pricy : 100 , img : "imgs/New Products/Product_8.png"},
];

const otherItem = $.getElementById("otherItem");
const otherItemArry = [
    {id : 1 ,category : "لوازم هنری" , name : "پالت" , pricy : 100 , img : "imgs/New Products/Product_1.png"},
    {id : 2 ,category : "ابزار و لوازم" , name : "ورق طلا" , pricy : 165 , img : "imgs/New Products/Product_2.png"},
    {id : 3 ,category : "ظروف خام" , name : "گلدان بتنی" , pricy : 200 , img : "imgs/New Products/Product_3.png"},
    {id : 4 ,category : "ظروف خام" , name : "گلدان بتنی" , pricy : 200 , img : "imgs/New Products/Product_4.png"},
    {id : 5 ,category : "رنگ" , name : "رنگ هنری سبز" , pricy : 120 , img : "imgs/New Products/Product_5.png"},
    {id : 6 ,category : "رنگ" , name : "رنگ هنری صورتی" , pricy : 120 , img : "imgs/New Products/Product_6.png"},
    {id : 7 ,category : "اسپری" , name : "اسپری زرد" , pricy : 150 , img : "imgs/New Products/Product_7.png"},
    {id : 8 ,category : "محصولات اپوکسی" , name : "جوهر الکلی" , pricy : 100 , img : "imgs/New Products/Product_8.png"},
];

NewProductsArry.forEach(function(Product){
    NewProducts.insertAdjacentHTML("beforeend" , "<li><div id=" + Product.category + " onclick=\"goCart(event)\"><img class=\"ProductsImg\" src=\""+ Product.img +"\" alt=\"ProductsImg\"><p class=\"ProductsName\">"+ Product.name +"</p><p class=\"price\">"+ Product.pricy +" تومان</p></div></li>");
});
bestSellerArry.forEach(function(Product){
    bestSellerItem.insertAdjacentHTML("beforeend" , "<li><div id=" + Product.category + " onclick=\"goCart(event)\"><img class=\"ProductsImg\" src=\""+ Product.img +"\" alt=\"ProductsImg\"><p class=\"ProductsName\">"+ Product.name +"</p><p class=\"price\">"+ Product.pricy +" تومان</p></div></li>");
});
otherItemArry.forEach(function(Product){
    otherItem.insertAdjacentHTML("beforeend" , "<li><div id=" + Product.category + " onclick=\"goCart(event)\"><img class=\"ProductsImg\" src=\""+ Product.img +"\" alt=\"ProductsImg\"><p class=\"ProductsName\">"+ Product.name +"</p><p class=\"price\">"+ Product.pricy +" تومان</p></div></li>");
});

/// end append products in html ///

function goCart(event){
    let parentTarget = event.target.parentElement;
    let categoryTarget = parentTarget.id;
    let imgTarget = parentTarget.firstChild.src;
    let nameTarget = parentTarget.firstChild.nextElementSibling.innerHTML;
    let pricyTarget = parentTarget.lastChild.innerHTML;
    localStorage.setItem("productInfo",JSON.stringify({category :  categoryTarget , name : nameTarget , pricy : pricyTarget , img : imgTarget}));
    location.href = "https://sajadanjiidanii.github.io/Purchase-page/";
}

/// start create slider ///
const slider = $.getElementById("slider-img");
let sliderImgs = ["imgs/slider img/Paint-Cans.jpg","imgs/slider img/Paint-Cans1.jpg","imgs/slider img/Paint-Cans2.jpg","imgs/slider img/Paint-Cans3.jpg","imgs/slider img/Paint-Cans4.jpg","imgs/slider img/Paint-Cans5.jpg",];
setInterval(function(){
    slider.src = sliderImgs[0];
    sliderImgs.push(sliderImgs[0]);
    sliderImgs.splice(0,1);
},5000);
/// end create slider ///

/// sign in chacke ///

const loginSignup = $.querySelector("#login-signup");
const logIn = $.querySelector("#login");
const signUp = $.querySelector("#signup");
localStorage.setItem("ShowName","Yes");

function exitAccount(){
    userAccount.style.display = "none";
    exitAccountBtn.style.display = "none";
    logIn.style.display = "inline";
    signUp.style.display = "inline";
    localStorage.setItem("ShowName","No");
}

function signChack(){
    let isName = localStorage.getItem("Name");
    let userName = localStorage.getItem("Name");
    let showUser = localStorage.getItem("ShowName");

    if( isName ){
        if( showUser == "Yes"){
            logIn.style.display = "none";
            signUp.style.display = "none";
            loginSignup.insertAdjacentHTML("afterbegin","<span id=\"userAccount\">" + userName + "</span><span id=\"exitAccountBtn\"> / خروج </span>");
            const userAccount = $.querySelector("userAccount");
            const exitAccountBtn = $.querySelector("#exitAccountBtn");
            exitAccountBtn.addEventListener("click",exitAccount);
        }
    }
};

window.addEventListener("load",signChack);
