let a = ''; // First number
let b = ''; // Second number
let sign = ''; // operation sign
let finish = false;

const digit = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const action = ['-', '+', 'X', '/'];

// screen
const out = document.querySelector('.calc-screen p');

function clearAll () {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    // no button pressed
    if(!event.target.classList.contains('btn')) return;
    // pressed button ac
    if(event.target.classList.contains('ac')) return;
    
    out.textContent = '';
    // get pressed button
    const key = event.target.textContent;
    // if key 0-9 is pressed
    if (digit.includes(key)) {
        if (b =='' && sign === '') {
        a+=key;
        console.table(a, b , sign);
        out.textContent = a;
        }
        else if (a!=='' && b!=='' && finish) {
            b = key;
            finish = false
            out.textContent = b;

        }
        else {
            b += key;
            out.textContent = b;
        }
        console.table(a, b , sign);
        return;
    }
    
    // if the + - / X key is pressed
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.table(sign);
        return;
    }

    // pressed =
    if (key === '=') {
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                if (b === '0') {
                    out.textContent = 'Error';
                    a='';
                    b='';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
        }
        finish = true
        out.textContent = a;
        console.table(a, b , sign);
    }
} 
