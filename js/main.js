const hearts = document.querySelectorAll(".heart_btn");

hearts.forEach(heart => {
    heart.addEventListener("click",function(){
        heart.classList.toggle("on");
    })
});
