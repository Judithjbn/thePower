const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const emojis = ["😊", "😘", "😁", "👍", "😍", "😒", "🤣"];

const emojisDiv = document.querySelector(".insert-emoji-here");

const printDivs = (selectorFather, array) => {
    const div = document.querySelector(selectorFather);

    div.innerHTML = "";

    for(const element of array){
        const p = document.createElement("p");
        p.textContent = element;
        div.appendChild(p);
    }
}

printDivs(".insert-num-here", numbers);
printDivs(".insert-emoji-here", emojis);

const input = document.querySelector("input");
const button = document.querySelector("button");

const insertData = () => {
    if (isNaN(parseInt(input.value)) === true) {
        emojis.push(input.value);
        printDivs(".insert-emoji-here", emojis);
} else {
    numbers.push(parseInt(input.value));
    printDivs(".insert-num-here", numbers);
}
}

button.onclick= insertData;