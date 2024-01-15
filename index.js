
const btn = document.querySelector('.track');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close_btn');
btn.addEventListener('click',()=>{
    modal.style.display = "block";
    // body.style.background = "#12121280";

});
close.addEventListener('click',()=>{
    modal.style.display = "none";
} ,false);
const sets_images = document.querySelector('.selling_images');
const image = document.querySelectorAll('.selling_img')
function suit(){
image.style.display = "none";
}