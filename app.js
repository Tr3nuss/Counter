// variables

let value = 0;

const increment = document.getElementById('increment-btn');
const decrement = document.getElementById('decrement-btn');
const result = document.getElementById('counter-value');
const reset = document.querySelector('#reset');






// EVENTS 




//increment function

increment.addEventListener('click', function() {
    value ++
    result.innerHTML = value;
});


//decrement function

decrement.addEventListener('click', function() {
    value --
    result.innerHTML = value;
});


//reset function

reset.addEventListener('click', reset);

function resetToZero() {
    value = 0;
    result.innerHTML = value;
}





// THE END



