const minus = document.querySelector(".negative");
const plus = document.querySelector(".positive");
const numberText = document.querySelector(".numberText");
let number = 0;


minus.addEventListener("click", function() {
    number--;
    numberText.innerHTML = number;
    if (number === 0) {
        numberText.style.color = "black";
    }
    else if (number <= 0) {
        numberText.style.color = "red";
    }
    else if (number >= 0) {
        numberText.style.color = "green";
    }
    console.log(number);
})

plus.addEventListener("click", function() {
    number++;
    numberText.innerHTML = number;
    if (number === 0) {
        numberText.style.color = "black";
    }
    else if (number <= 0) {
        numberText.style.color = "red";
    }
    else if (number >= 0) {
        numberText.style.color = "green";
    }
    console.log(number);
})
