const h1 = document.querySelector('h1');
const h4 = document.querySelector('h4');
const paymentToggle = document.querySelector('#plan-toggle');
const pageviewSlider = document.querySelector('#pageviewRange'); 

const pageviewOptions = {   
    "1": ["10K", 8],
    "2": ["50K", 12],
    "3": ["100K", 16],
    "4": ["500K", 24],
    "5": ["1M", 36]    
}


let paymentPlan = "month";
let startPlan = pageviewOptions["1"];
h1.innerHTML = `$${startPlan[1].toFixed(2)}` + `<small>/month</small>`;
h4.innerHTML = `${startPlan[0]} PAGEVIEWS`;


const changePlan = function(){
    const plan = pageviewOptions[pageviewSlider.value];
    let price = plan[1];
    if (paymentToggle.checked) {
        let discount = (price / 100) * 25; 
        price -= discount;
    }
    h1.innerHTML = `$${price.toFixed(2)}` + `<small>/month</small>`;
    h4.innerHTML = `${plan[0]} PAGEVIEWS`;
}


const pageviewSliderBackground = function() {
    let rate = (pageviewSlider.value - 1)  * 25;
    let color = `linear-gradient(to right, var(--strong-cyan) ${rate}%, var(--light-grayish-blue) ${rate}%)`
    pageviewSlider.style.background = color;
}
paymentToggle.addEventListener('change', changePlan);
pageviewSlider.addEventListener('mousemove', changePlan);
pageviewSlider.addEventListener('input', pageviewSliderBackground);


