let webElements = {
    buttons: document.querySelectorAll(".btn"),
    firstInput: document.querySelector(".firstInput"),
    secondInput: document.querySelector(".secondInput"),
};

webElements.buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        text = e.target.innerHTML;
        switch (text) {
            case '+':
            case '-':
            case '*':
            case '/':
                if (secondInputNotEmpty()) {
                    webElements.firstInput.innerHTML = ` ${webElements.secondInput.innerHTML} ${text}`
                    webElements.secondInput.innerHTML = '';
                }
                break;
            case '=':
                equalsBtn(webElements.firstInput.innerHTML, webElements.secondInput.innerHTML);
                break;
            case 'C':
                webElements.secondInput.innerHTML = '';
                webElements.firstInput.innerHTML = '';
                break;
            case '⌫':
                if (webElements.secondInput.innerHTML.length != 1) {
                    webElements.secondInput.innerHTML = webElements.secondInput.innerHTML.slice(0, -1);
                } else {
                    webElements.secondInput.innerHTML = '0';
                }
                break;
            case '.':
                if (!webElements.secondInput.innerHTML.includes('.')) {
                    webElements.secondInput.innerHTML += e.target.innerHTML;
                }
                break;
            case '+/-':
                if (secondInputNotEmpty()) {
                    webElements.secondInput.innerHTML = `-${webElements.secondInput.innerHTML}`
                }
                break;
            case '%':
                if (secondInputNotEmpty()) {
                    webElements.secondInput.innerHTML = webElements.secondInput.innerHTML / 100;
                }
                break;
            default:
                webElements.secondInput.innerHTML += e.target.innerHTML;
                break;
        }
    })
});

function equalsBtn(firstNumberAndSign, secondNumber) {
    //get number from a whole string
    let firstNumber = +firstNumberAndSign.split('').filter(a => isFinite(a) || a === '.').join('');
    if (firstNumberAndSign[1] === '-') {
        firstNumber *= -1;
    }
    webElements.firstInput.innerHTML += ` ${webElements.secondInput.innerHTML} =`;
    let answ;
    if (firstNumberAndSign.includes('+')) {
        answ = firstNumber + +secondNumber;
    } else if (firstNumberAndSign.includes('-')) {
        answ = firstNumber - secondNumber;
    } else if (firstNumberAndSign.includes('*')) {
        answ = firstNumber * secondNumber;
    } else if (firstNumberAndSign.includes('/')) {
        answ = firstNumber / secondNumber;
    } else {
        answ = firstNumber + +secondNumber;
    }
    if (+answ % 0.000001 != 0) {
        answ = (Math.round(answ * 100_000_000)) / 100_000_000;
    }
    webElements.secondInput.innerHTML = answ;
}

function secondInputNotEmpty() {
    return webElements.secondInput.innerHTML !== '';
}