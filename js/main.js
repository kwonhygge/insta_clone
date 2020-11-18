const hearts = document.querySelectorAll(".heart_btn");
const header = document.querySelector("#header");
const sidebox = document.querySelector(".side_box");
const variableWidth = document.querySelectorAll(".contents_box .contents");

const resizeFunc = () => {
    if(pageYOffset>=10){
    let calcWidth = (window.innerWidth * 0.5) + 170;
    sidebox.style.left = calcWidth + "px";
    }
    if(matchMedia('screen and (max-width: 800px').matches){

        
        for(let i=0; i<variableWidth.length; i++){
            variableWidth[i].style.width = window.innerWidth - 20 + "px";
        }
    
    
    }else{
       
        for(let i=0; i<variableWidth.length; i++){
            variableWidth[i].removeAttribute("style");
        } 
        
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
window.addEventListener("resize",resizeFunc);
window.addEventListener("scroll",scrollFunc);