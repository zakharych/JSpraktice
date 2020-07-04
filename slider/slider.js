const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const items = document.querySelector('#items');

var right = 0;
leftBtn.addEventListener('click', function () {

    if ('click' && right < 500) {
        right = right + 100;
        console.log(right);
    }
    let right__action = right + "px";
    items.style.right = right__action;
});

rightBtn.addEventListener('click', function () {

    if ('click' && right > 0) {
        right = right - 100;
        console.log(right);
    }

    let right__action = right + "px";
    items.style.right = right__action;
});
;