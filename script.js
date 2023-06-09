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
        title:"T shirt 100% Cotton",
        price:85,
        Available:5,
        image:'./Images/img_1.jpg',
    },
    {
        title:"T shirt 100% Cotton",
        price:95,
        Available:9,
        image:'./Images/img_6.jpg',
    },
    {
        title:"T shirt 100% Cotton",
        price:100,
        Available:7,
        image:'./Images/img_7.jpg',
    },
    {
        title:"T shirt 100% Cotton",
        price:150,
        Available:3,
        image:'./Images/img_9.jpg',
    },
    {
        title:"High Waist Trouser",
        price:110,
        Available:3,
        image:'./Images/img_13.jpg',
    },
    {
        title:"Skirts Women",
        price:150,
        Available:14,
        image:'./Images/img_10.jpg',
    },
    {
        title:"T shirt 100% Cotton",
        price:120,
        Available:3,
        image:'./Images/img_5.jpg',
    },
    {
        title:"T shirt 100% Cotton",
        price:130,
        Available:9,
        image:'./Images/img_18.jpg',
    },
    {
        title:"T shirt 100% Cotton",
        price:110,
        Available:3,
        image:'./Images/img_14.jpg',
    },
    {
        title:"Crochet Scarf",
        price:150,
        Available:13,
        image:'./Images/img_20.jpg',
    },
    {
        title:"High Waist Trouser",
        price:120,
        Available:15,
        image:'./Images/img_19.jpg',
    },
    {
        title:"Crochet Scarf",
        price:130,
        Available:3,
        image:'./Images/img_21.jpg',
    },
    {
        title:"Rolex Watches",
        price:85,
        image:'./Images/img_28.jpg',
    },
    {
        title:"Rolex Watches",
        price:95,
        Available:4,
        image:'./Images/img_30.jpg',
    },
    {
        title:"Rolex Watches",
        price:100,
        Available:10,
        image:'./Images/img_25.jpg',
    },
    {
        title:"Rolex Watches",
        price:150,
        Available:2,
        image:'./Images/img_26.jpg',
    },
    {
        title:"Heart Bracelet",
        price:35,
        Available:11,
        image:'./Images/img_22.jpg',
    },
    {
        title:"Summer Bracelet",
        price:25,
        image:'./Images/img_29.jpg',
    },
    {
        title:"Gold Ring",
        price:45,
        image:'./Images/img_31.jpg',
    },
    {
        title:"Gold Ring",
        price:15,
        image:'./Images/img_32.jpg',
    },
    {
        title:"Baseball Caps",
        price:15,
        image:'./Images/img_33.jpg',
    },
    {
        title:"Baseball Caps",
        price:30,
        image:'./Images/img_34.jpg',
},
{
        title:"Baseball Caps",
        price:20,
        image:'./Images/img_35.jpg',
},
{
        title:"Baseball Caps",
        price:50,
        image:'./Images/img_36.jpg',
    }
]
let productImage = document.getElementById("item");
let productTitle = document.getElementById("product-title");
let productPrice = document.getElementById("product-price");
let productAvailable = document.getElementById("product-availbilty");

productImage.src=homeProducts[urlIdParameter].image;
productPrice.textContent=`$ ${homeProducts[urlIdParameter].price}`;
productTitle.textContent=homeProducts[urlIdParameter].title;
productAvailable.textContent=`Avalibility & Stock : ${homeProducts[urlIdParameter].Available}`;

/* =============================================================== */
let itemSize = document.querySelectorAll(".item-size");
itemSize.forEach((item) => {
    item.addEventListener("click" , ()=>{
        removeActive();
        item.classList.add("active");
    })
})

let removeActive = ()=>{
    itemSize.forEach((item) => {
        item.classList.remove("active");
    })
}

