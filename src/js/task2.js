const box1 = document.getElementById('1');
const box2 = document.getElementById('2');
const box3 = document.getElementById('3');
const box4 = document.getElementById('4');

const intervalId = setInterval(animateBoxes, 1000);

function animateBoxes() {
    box1.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    box2.style.height = `${Math.random() * 200}px`
    box2.style.width = `${Math.random() * 200}px`
    box3.style.transform = `translate(${Math.random() * 50}px, ${Math.random() * 50}px)`
    box4.style.transform = `scale(${Math.random() * 1.3})`
    box4.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
}