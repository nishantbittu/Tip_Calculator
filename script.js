let billValue = document.querySelector('.billvalue');
let totalVal = document.querySelector('.totaltxtval');
// let accessValue =0;

function displayValue(){
    let newBill=Number(billValue.value);
    totalVal.textContent = newBill;
    if(newBill === 0 || newBill < 0){
        totalVal.textContent = "$0.00";
    }
}


// function calPer(percentValue){
//     let inputValue = accessValue;
//     console.log(accessValue);
//     let calPerValue = inputValue*percentValue;
//     return calPerValue/100;
// }

// console.log(calPer(5));
const amount = document.querySelector('.amt');
let btn= document.querySelectorAll('.tipvalper');



let [first,second,third,fourth,fifth,custom] = btn;

first.addEventListener('click',function(){
    let inputValue = (Number(billValue.value));
    let calPerValue = (inputValue*5)/100;
    amount.textContent = calPerValue;
    totalVal.textContent = calPerValue+inputValue;
    first.classList.add('btnclr');
    second.classList.remove('btnclr');
    third.classList.remove('btnclr');
})

second.addEventListener('click',function(){
    let inputValue = (Number(billValue.value));
    let calPerValue = (inputValue*10)/100;
    amount.textContent = calPerValue;
    totalVal.textContent = calPerValue+inputValue;
    second.classList.add('btnclr');
    first.classList.remove('btnclr');
    third.classList.remove('btnclr');
})

third.addEventListener('click',function(){
    let inputValue = (Number(billValue.value));
    let calPerValue = (inputValue*15)/100;
    amount.textContent = calPerValue;
    totalVal.textContent = calPerValue+inputValue;
    third.classList.add('btnclr');
})

fourth.addEventListener('click',function(){
    let inputValue = (Number(billValue.value));
    let calPerValue = (inputValue*25)/100;
    amount.textContent = calPerValue;
    totalVal.textContent = calPerValue+inputValue;
    fourth.classList.add('btnclr');
    third.classList.remove('btnclr');
})

fifth.addEventListener('click',function(){
    let inputValue = (Number(billValue.value));
    let calPerValue = (inputValue*50)/100;
    amount.textContent = calPerValue;
    totalVal.textContent = calPerValue+inputValue;
    fifth.classList.add('btnclr');
    third.classList.remove('btnclr');
})

custom.addEventListener('click',function(){
    let inputValue = (Number(billValue.value));
    let calPerValue = (inputValue*10)/100;
    amount.textContent = calPerValue;
})