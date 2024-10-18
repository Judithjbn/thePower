// 1.1 Añade un evento click que ejecute un console log con la información del evento del click
const btn = document.getElementById('btnToClick');
btn.addEventListener('click', (event) => {
    console.log(event);
});

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const inputFocus = document.querySelector('.focus');
inputFocus.addEventListener('focus', (event) => {
    console.log(event.target.value);
});

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const inputValue = document.querySelector('.value');
inputValue.addEventListener('input', (event) => {
    console.log(event.target.value);
});
