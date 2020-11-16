const hearts = document.querySelectorAll(".heart_btn");
const header = document.querySelector("#header");
const sidebox = document.querySelector(".side_box");

const resizeFunc = () => {
    if(pageYOffset>=10){
    let calcWidth = (window.innerWidth * 0.5) + 170;
    sidebox.style.left = calcWidth + "px";
    }
}

const scrollFunc = () => {
    if(pageYOffset>=10){
        header.classList.add("on");
        sidebox.classList.add("on");
        resizeFunc();
    }else{
        header.classList.remove("on");
        sidebox.classList.remove("on");
        sidebox.removeAttribute("style");
    }
}

hearts.forEach(heart => {
    heart.addEventListener("click",function(){
        heart.classList.toggle("on");
    })
});

window.addEventListener("scroll",scrollFunc);