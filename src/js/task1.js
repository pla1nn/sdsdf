const key = document.getElementById('key');
const button = document.getElementById('newGame')

const possibleKeys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
let currentKeyIndex = 0;

function rightKey() {
    currentKeyIndex = Math.random() * possibleKeys.length;
    key.textContent = possibleKeys[currentKeyIndex];
}

document.addEventListener('keydown', (e) => {
    if (e.key === possibleKeys[currentKeyIndex]) {
        rightKey();
    } else {
        PNotify.alert({text: 'неправильна клавіша!'});
    }
})

document.addEventListener('keypress', (e) => {
    e.preventDefault();
})

button.addEventListener('click', () => {
    rightKey();
    PNotify.success({text: 'розпочато нову гру!'})
})