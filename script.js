/* ===================== Navbar ====================== */
let navbar = document.getElementById("navbar");
window.addEventListener("scroll" , function(){
    navbar.classList.toggle("sticky" , scrollY > 0);
})
/* ===================== Love Button ====================== */
const loveIcon = document.querySelectorAll('.love_icon');
loveIcon.forEach((icon) => {
    icon.onclick=function(){
        icon.classList.toggle('liked');
    }
});
/* ===================== scroll to top ====================== */
let back = document.querySelector(".backToTop");
window.onscroll = function(){
    if(window.scrollY >= 100){
        back.style.display="block";
        back.style.bottom="15px";
        back.style.transform="translateY(0px)";
        back.style.transition="0.5s";
    }else{
        back.style.transform="translateY(100px)";
    }
}
/* ===================== Added To Cart Button =====================*/
let cartBtn = document.querySelector(".cart-btn");
let addProduct = document.querySelector(".add-product");
cartBtn.addEventListener("click" , function(){
    addProduct.classList.add("active");
});
/* ================================================= */


let queryString=window.location.search;
let urlparams=new URLSearchParams(queryString);

urlIdParameter=urlparams.get('id');
console.log(urlIdParameter);
const homeProducts=[
    {
    image:'./Images/img_1.jpg',
    },
    {
    image:'./Images/img_6.jpg',
    },
    {
        image:'./Images/img_7.jpg',
    },
    {
    image:'./Images/img_9.jpg',
    },
    {
    image:'./Images/img_13.jpg',
    },
    {
    image:'./Images/img_10.jpg',
    },
    {
    image:'./Images/img_5.jpg',
    },
    {
    image:'./Images/img_18.jpg',
    },
    {
    image:'./Images/img_14.jpg',
    },
    {
    image:'./Images/img_20.jpg',
    },
    {
    image:'./Images/img_19.jpg',
    },
    {
    image:'./Images/img_21.jpg',
    },
    {
    image:'./Images/img_28.jpg',
    },
    {
    image:'./Images/img_30.jpg',
    },
    {
    image:'./Images/img_25.jpg',
    },
    {
    image:'./Images/img_26.jpg',
    },
    {
    image:'./Images/img_22.jpg',
    },
    {
    image:'./Images/img_29.jpg',
    },
    {
    image:'./Images/img_31.jpg',
    },
    {
    image:'./Images/img_32.jpg',
    },
    {
    image:'./Images/img_33.jpg',
    },
    {
    image:'./Images/img_34.jpg',
    },
    {
    image:'./Images/img_35.jpg',
    },
    {
    image:'./Images/img_36.jpg',
    }
]
let productImage = document.getElementById("item");
console.log(productImage);
productImage.src=homeProducts[urlIdParameter].image;