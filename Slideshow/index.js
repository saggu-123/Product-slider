const data = [
    {
        id : 1, 
        img : "https://i.pinimg.com/236x/66/75/24/66752400471369a08adde2ab638da982.jpg",
        content: "Content  Image-1 ",
        price: "Rs786",
        off : "15% off",
    },
    {
        id : 2, 
        img : "https://i.pinimg.com/236x/50/fa/4b/50fa4ba8cb734298afe56a9248975658.jpg",
        content: "Content Image-2 ",
        price: "Rs434",
        off : "20% off",
    },
    {
        id : 3, 
        img : "https://i.pinimg.com/236x/4b/2f/9b/4b2f9be786a9dbe31f00a363734e580c.jpg",
        content: "Content Image-3",
        price: "Rs323",
        off : "10% off",
    },
   
];
const img = document.getElementById('main-image');
const content = document.getElementById('content');
const price = document.getElementById('price');
const off = document.getElementById('off');

const prev_btn = document.getElementById("prevbtn");
const next_btn = document.getElementById("nextbtn");
let currentitem = 0;
window.addEventListener('DOMContentLoaded' , function (){
  showImages();
});
function showImages(){
    const item = data[currentitem];
    img.src = item.img;
   content.textContent = item.content;
   price.textContent = item.price;
   off.textContent = item.off;
   
};

prev_btn.addEventListener('click', function (){
    currentitem--;
    if(currentitem < 0){
        currentitem = data.length - 1 ;
      }
    showImages(currentitem);
   
    });
next_btn.addEventListener('click', function (){
     currentitem++;
        if(currentitem > data.length - 1){
            currentitem = 0;
         }
 showImages(currentitem);
});