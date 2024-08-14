document.querySelectorAll(".content-item").forEach(item => item.addEventListener('mouseenter',function(){
    let img = item.querySelector("img").src;
    console.log(img)
    document.getElementById("main_img").src =img
  }))
  