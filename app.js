const result = document.getElementById('result');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');

let value = 0;

minus.addEventListener('click', () => {
    value ++;
    result.innerHTML = value;
});

plus.addEventListener('click', () => {
    value --;
    result.innerHTML = value;
});


