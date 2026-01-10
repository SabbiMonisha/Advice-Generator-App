const adviceID = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');
const diceBtn = document.getElementById('dice-btn');

async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice', { cache: 'no-store' });
    const data = await res.json();
    adviceID.textContent = data.slip.id;
    adviceText.textContent = `"${data.slip.advice}"`;
}

diceBtn.addEventListener('click', getAdvice);

// load initial advice
getAdvice();
