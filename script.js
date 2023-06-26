const increaseBtn = document.querySelector('#increaseButton');
const decreaseBtn = document.querySelector('#decreaseButton');
const valueDisplay = document.querySelector('.content h2');
let value = 0;

increaseBtn.addEventListener('click',function(){
    value++;
    valueDisplay.textContent = value;
})

decreaseBtn.addEventListener('click',function(){
    value--;
    valueDisplay.textContent = value;
})