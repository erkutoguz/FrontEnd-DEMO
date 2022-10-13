// https://api.adviceslip.com/advice

const btn = document.querySelector('#generate-advice');
const h5 = document.querySelector('#advice-number');
const p = document.querySelector('#advice');



const printData = (adviceNumber, advice) => {
    h5.innerText = `ADVICE #${adviceNumber}`;
    p.innerText = `“${advice}”`;
}

const getData = async () => {
    try{
    const res = await axios.get('https://api.adviceslip.com/advice');
    const data = res.data;
    const adviceNumber = data.slip.id;
    const advice = data.slip.advice;
    printData(adviceNumber, advice);
    } catch (e) {
        h5.innerText = "ADVICE ERROR";
        p.innerText = "Can not reach the advice";
    }    
}

btn.addEventListener('click', getData);

