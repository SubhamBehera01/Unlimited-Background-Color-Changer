//create random color

const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const body = document.querySelector('body');

let changeTimer;

const startChangingColor = () => {
    const backGround = () => {
        body.style.backgroundColor = randomColor();
    } 
    if (!changeTimer) {
        changeTimer = setInterval(backGround, 1000);
    }
}
const stopChangingColor = () => {
    clearInterval(changeTimer);
    changeTimer = null;
}

start.addEventListener('click', startChangingColor);
stop.addEventListener('click', stopChangingColor);

