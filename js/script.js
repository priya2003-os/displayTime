const BTN = document.querySelector('button');
const CONTENT = document.querySelector('#content');
const animate = document.querySelector('#displayTime')
BTN.addEventListener('click', function () {
    CONTENT.textContent = "Hello World";
});

function displayTime() {
    let date = new Date();
    let second = date.getSeconds();

    const content = date.toLocaleTimeString('fr');
    animate.innerHTML = content;


    let secondes = second % 3 === 0;
    if (secondes) {
        animate.classList.add('animate');
    } else {
        animate.classList.remove('animate');
    }


}


setInterval(displayTime, 1000);

