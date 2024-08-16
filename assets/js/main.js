document.querySelectorAll(".content-item").forEach(item => item.addEventListener('mouseenter',function(){
    let img = item.querySelector("img").src;
    console.log(img)
    document.getElementById("main_img").src =img
  }))
  




  const TopHeaderHeight = document.querySelector('.header').offsetHeight;

document.documentElement.style.setProperty('--top-header-height',`${TopHeaderHeight}px`)