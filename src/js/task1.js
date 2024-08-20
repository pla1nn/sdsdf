import { alert, success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';


const key = document.getElementById('key');
const button = document.getElementById('newGame')

const possibleKeys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
let currentKeyIndex = 0;

// function rightKey() {
//     currentKeyIndex = Math.random() * possibleKeys.length;
//     key.textContent = possibleKeys[currentKeyIndex];
// }

// document.addEventListener('keydown', (e) => {
//     if (e.key === possibleKeys[currentKeyIndex]) {
//         rightKey();
//     } else {
//         PNotify.alert({text: 'неправильна клавіша!'});
//     }
// })

// document.addEventListener('keypress', (e) => {
//     e.preventDefault();
// })

// button.addEventListener('click', () => {
//     rightKey();
//     PNotify.success({text: 'розпочато нову гру!'})
// })

key.textContent = possibleKeys[currentKeyIndex];

document.addEventListener('keypress', (e) => {
    e.preventDefault();
})

button.addEventListener('click', newGame);

function newGame() {
    currentKeyIndex = 0;
    key.textContent = possibleKeys[currentKeyIndex];
    alert({
        text: 'start the game',
        delay: 666,
    })
}

document.addEventListener('keydown', (e) => {
    if (e.key === possibleKeys[currentKeyIndex]) {
        success({
            text: 'you  guessed',
            delay: 666,
        })
        currentKeyIndex += 1;
        if (currentKeyIndex < [possibleKeys.length]) {
            key.textContent = possibleKeys[currentKeyIndex];
        } else {
            alert({
                text: 'you won',
                delay: 666,
            })
        }
    } else {
        error({
            text: 'you failed',
            delay: 666,
        })
    }
})