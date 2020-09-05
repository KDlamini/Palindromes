const input = document.querySelector('#input');
const result = document.querySelector('.result');
const submit =  document.querySelector('.submit');

function palindrome() {
    let text = input.value;
    let arr = [];

    for(let i = 0; i < text.length; i++) {

        if (text[i].match(/^[A-Za-z]+$/)) {
            arr.push(text[i]);
        }
    }

    let str = arr.join("").toLowerCase();
    let reversedStr = arr.reverse().join("").toLowerCase();

    if(str == reversedStr) {
        result.value = true;
    } else {
        result.value = false;
    }
}

submit.addEventListener('click', palindrome);