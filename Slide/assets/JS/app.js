

let slideImages = [

    './assets/style/image/1.jpg',
    './assets/style/image/2.jpg',
    './assets/style/image/3.jpg',
    './assets/style/image/4.jpg',
    './assets/style/image/5.jpg'
]



let image = document.querySelector('#slider img')
let currentSlide = 0;
image.setAttribute('src', slideImages[currentSlide])

let dots = document.querySelectorAll('#slider .dots')


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

    const dots = document.querySelector('#slider .dots');
    if (slideImages.length > dots.childNodes.length) {
        const dot = document.createElement('div');
        dot.innerHTML = '<div> </div>'
        dot.classList.add('dot')
        dots.appendChild(dot);
    }
}


for (var i = 0; i < dots.length; i++) {
    (function(index){
        dots[i].onclick = function () {
            if (index !== currentSlide) {
                document.querySelector('.dot .current').classList.remove('current');
                this.classList.add('#slider .current');
                document.querySelector('.active').classList.remove('.active');
                slideImages[currentSlide].classList.add('.active');
                currentSlide = index;
            }
        }
    })(i)
   
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

