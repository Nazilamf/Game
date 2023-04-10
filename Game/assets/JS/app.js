let nemo = document.querySelector('.nemoo')

let shark = document.querySelector('.sharkk')
let gameover = document.querySelector('#gameover')

w = document.body.clientWidth;
h = document.body.clientHeight;

window.addEventListener('resize', function () {
    w = document.body.clientWidth;
    h = document.body.clientHeight;
})

document.addEventListener('keydown', move);


function move(e) {
    let key = e.key;
    let x = nemo.offsetLeft;
    let y = nemo.offsetTop;



    if (key == 'ArrowRight') {
        if (x < w - 150) {
            nemo.style.left = x + 5 + 'px';
        }

    }

    if (key == 'ArrowDown') {
        if (y < h - 150) {
            nemo.style.top = y + 5 + 'px';
        }

    }

    if (key == 'ArrowLeft') {
        if (x > 0) {
            nemo.style.left = x - 5 + 'px';
        }

    }

    if (key == 'ArrowUp') {
        if (y > 0) {
            nemo.style.top = y - 5 + 'px';
        }

    }
    const rect1 = shark.getBoundingClientRect()
    console.log(rect1)
    const rect = nemo.getBoundingClientRect();
    console.log(rect)




    if (rect.top == rect1.top ||
        rect.left == rect1.left ||
        rect.bottom >= rect1.bottom ||
        rect.right >= rect1.right) {
            const node = document.createElement("h1");
            const textnode = document.createTextNode("GAME OVER");
            node.appendChild(textnode)
            gameover.appendChild(node);
    
    }
}

