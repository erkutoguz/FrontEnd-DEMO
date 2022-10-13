const backCard = document.querySelector('.second-card');
const frontCard = document.querySelector('.first-card');
const btn = document.querySelector('#submit');
const result = document.querySelector('#selected-p');
const rates = document.querySelectorAll('.checked');

let selectedValue = 1; 

btn.addEventListener('click', () => {
    backCard.classList.remove('back-card');
    frontCard.classList.add('back-card');
    result.innerText = `You selected ${selectedValue} out of 5`
})



function check(){
    for (let rate of rates) {
        if (rate.checked){
            rate.parentElement.classList.add('clicked');
        } else {
            rate.parentElement.classList.remove('clicked');
        }
    }
    if (this.checked) {
        selectedValue = parseInt(this.parentElement.innerText);
    }
}
rates.forEach((rate) => {
    rate.addEventListener('click', check)
})
