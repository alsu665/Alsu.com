
$('.nav-icon2').on('click', function(){

    $('.menu__ul').toggleClass('active');
    $('.nav-icon2').toggleClass('open');
    $('.contant-block').toggleClass('active-contant');

})

/* const   btnPlusOrMinus = document.querySelectorAll('.product-block__btn');

for (let i = 0; i < btnPlusOrMinus.length; i++) {
    btnPlusOrMinus[i].addEventListener('click', function () {
        plusOrMinus(this);
    })
}

function plusOrMinus(element) {
   let  productBlockNum = document.querySelector('.product-block__num');
   let zero = 0;
    if (element.getAttribute('data-symbol') == '+') {
        zero += 1
        productBlockNum.innerHTML += zero;
    } else if (element.getAttribute('data-symbol') == '-') {
        productBlockNum.innerHTML -= 1;
    }
     
} */


const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');
const summ = document.querySelector('[data-action="summ"]');
const dataCounterPrice = document.querySelector('[data-price]');
let sum1 = summ.innerHTML; 

 

btnMinus.addEventListener('click', function () {

    if (parseInt(counter.innerText) > 1) {
		counter.innerText = --counter.innerText;
        dataCounterPrice.innerHTML = summ.innerHTML * counter.innerText;
	}

});

btnPlus.addEventListener('click', function () {
        counter.innerText = ++counter.innerText;
        dataCounterPrice.innerHTML = sum1 * counter.innerText;
	
}) 