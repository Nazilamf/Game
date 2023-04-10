

let slideImages = [

    './assets/style/image/1.jpg',
    './assets/style/image/2.jpg',
    './assets/style/image/3.jpg',
    './assets/style/image/4.jpg'
]



let image = document.querySelector('#slider img')
let currentSlide = 0;
image.setAttribute('src', slideImages[currentSlide])

let dots = document.querySelectorAll('#slider .dots .dot')

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

function Autoplay() {
    currentSlide++;

    if (currentSlide === slideImages.length) {
        currentSlide = 0;
    }
    image.src = slideImages[currentSlide]
}

next.onclick = function () {
    Autoplay()

}

prev.onclick = function () {
    currentSlide--;
    if (currentSlide === - 1) {
        currentSlide = slideImages.length - 1
    }
    image.src = slideImages[currentSlide]
}

// setInterval(() => {
//     Autoplay()
// }, 2000);



function currentSlider(n) {
    image.src = slideImages[n]
  }

function showSlides() {
    let i;
    let dots = document.querySelectorAll('#slider .dots .dot')
   
    for (i = 0; i < slideImages.length; i++) {
        slideImages[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slideImages[currentSlide-1].style.display = "block";  
    dots[currentSlide-1].className += " active";

    
  }
