const header = document.querySelector('#header');
const side_box = document.querySelector('.side_box');
const variableWidth = document.querySelectorAll('.contents_box .contents');
const delegation = document.querySelector('.contents_box');

function delegationFunc(e){
  let elem = e.target;
  console.log(e.target);

  while(!elem.getAttribute('data-name')){
    elem = elem.parentNode;

    if (elem.nodeName === 'BODY'){
      elem=null;
      return;
    }
  }

  if (elem.matches('[data-name="heartbeat"]')){

    $.ajax({
      type:'POST',
      url:'data/like.json',
      data:37,
      dataType:'json',
      success: function(response){
        let likecount = document.querySelector('#like-count37');
        likecount.innerHTML = "좋아요" + response.like_count + "개";
      }
    })

  }else if (elem.matches('[data-name="bookmark"]')) {

  }else if (elem.matches('[data-name="share"]')) {

  }else if (elem.matches('[data-name="more"]')) {

  }
  elem.classList.toggle('on');
}
function resizeFunc(){
  if (pageYOffset >= 10){
    let calcWidth = (window.innerWidth * 0.5) + 167;
    side_box.style.left = calcWidth + 'px';
  }
  if (matchMedia('screen and (max-width:800px)').matches){

    for(let i=0; i<variableWidth.length; i++){
      variableWidth[i].style.width = window.innerWidth -20 + 'px';

    }
  }else{
    for(let i=0; i<variableWidth.length; i++){
      if(window.innerWidth>600){
        variableWidth[i].removeAttribute('style');
      }

    }
  }

}

function scrollFunc(){
  if (pageYOffset>=10){
    header.classList.add('on');

    if(side_box){
      side_box.classList.add('on');
    }

    resizeFunc();
  }else{
    header.classList.remove('on');
    if(side_box){
      side_box.classList.remove('on');
      side_box.removeAttribute('style');
    }
  }
}

if(delegation){
  delegation.addEventListener('click',delegationFunc);
}

window.addEventListener('resize',resizeFunc);
window.addEventListener('scroll',scrollFunc);
