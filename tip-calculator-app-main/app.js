const billInput = document.querySelector('#bill-input');
const nopInput = document.querySelector('#nop-input');
const totalTip = document.querySelector('#total-tip');
const personTip = document.querySelector('#person-tip');
const alertP = document.querySelector('#alert-p');
const customTip = document.querySelector('#tip-input');

let tipRate = 0;


// Buttons
const radios = document.getElementsByName('percent');
const resetBtn = document.querySelector('.reset'); 



// Functions
function tipCalculator(){
    if (nopCheck()){
        let total = (parseInt(billInput.value) / 100) * tipRate;       
        let person = (total / parseInt(nopInput.value));
        if (nopInput.value === "" || billInput.value === "") {
            person = 0;
            total = 0;
        }
        totalTip.innerHTML = `$${total.toFixed(2)}`;
        personTip.innerHTML = `$${person.toFixed(2)}`;
    }       
}

function reset(){
    billInput.value = "";
    nopInput.value = "";
    totalTip.innerHTML = `$0.00`;
    personTip.innerHTML = `$0.00`;
    customTip.value = "";
    tipRate = 0;
    nopInput.classList.remove('reject');
    alertP.innerHTML = "";
    for (let item of radios) {
        item.parentElement.classList.remove('selected');
    }
}

function nopCheck(){
    if (nopInput.value !== "0") {
        nopInput.classList.remove('reject');
        alertP.innerHTML = "";
        return true;
    }
        
    nopInput.classList.add('reject');
    alertP.innerHTML = "Can't be zero";
    return false;  
}

function removeCheckedRadio(){
    for (let item of radios) {
        item.parentElement.classList.remove('selected');
        item.checked = false;
    }
    tipRate = 0;
}

function customTipCalculator(){
    tipRate = parseInt(customTip.value);
    tipCalculator();
}



// Event Listeners
billInput.addEventListener('input', tipCalculator);
nopInput.addEventListener('input', tipCalculator);
customTip.addEventListener('click', removeCheckedRadio);
customTip.addEventListener('input', customTipCalculator);

radios.forEach(btn => btn.addEventListener('click', function(){
    for (let item of radios) {
        if (item.checked) {
            item.parentElement.classList.add('selected');
            tipRate = parseInt(item.value);
        } else {
            item.parentElement.classList.remove('selected');
        }
    }
    customTip.value = "";
    tipCalculator();
}))


resetBtn.addEventListener('click', reset);