let index = 0;
let selector = document.getElementsByClassName('slides');

/*next button*/
function nextSlide(){
  showSlide(++index);
}

/*previous button*/
function prevSlide(){
  showSlide(--index);
}

/*first dot*/
function firstDot(){
  showSlide(index = 0);
}

/*second dot*/
function secondDot(){
  showSlide(index = 1);
}

/*first dot*/
function thirdDot(){
  showSlide(index = 2);
}

/*advances slide*/
function showSlide(x){
  var dots = document.getElementsByClassName("dot");
  if (x > (selector.length - 1)) 
    {
      index = 0;
    } 
  if (x < 0) 
    {
      index = selector.length - 1;
    }
  for (i = 0; i < selector.length; i++) {
      selector[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  selector[index].style.display = "block"; 
  dots[index].className += " active";
}

document.addEventListener("DOMContentLoaded", function(event){
  selector[index].style.display = "block";
});

document.getElementById('next').addEventListener('click', nextSlide)
document.getElementById('prev').addEventListener('click', prevSlide)
document.getElementById('dotOne').addEventListener('click', firstDot)
document.getElementById('dotTwo').addEventListener('click', secondDot)
document.getElementById('dotThree').addEventListener('click', thirdDot)