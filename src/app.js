import feedCaterpillar from './feed-caterpillar.js';
const fruitButtons = document.querySelectorAll('.fruit');
const caterpillar = document.getElementById('caterpillar');

for(let i = 0; i < fruitButtons.length; i++) {
    const fruitButton = fruitButtons[i];

    fruitButton.addEventListener('click', () => {
        feedCaterpillar(fruitButton.value, caterpillar);    
    });
}
