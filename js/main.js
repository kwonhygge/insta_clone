const heart = document.querySelector('.heart_btn');
const header = document.querySelector('#header');
const side_box = document.querySelector('.side_box');

heart.addEventListener('click',function(){
  heart.classList.toggle('on');
});

function resizeFunc(){
  if (pageYOffset >= 10){
    let calcWidth = (window.innerWidth * 0.5) + 167;
    side_box.style.left = calcWidth + 'px';
  }
}

function scrollFunc(){
  if (pageYOffset>=10){
    header.classList.add('on');
    side_box.classList.add('on');

    resizeFunc();
  }else{
    header.classList.remove('on');
    side_box.classList.remove('on');
    side_box.removeAttribute('style');
  }
}

window.addEventListener('scroll',scrollFunc);
