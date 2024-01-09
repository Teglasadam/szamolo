const minus = document.querySelector(".negative");
const plus = document.querySelector(".positive");
const numberText = document.querySelector(".number");
let number = 0;


minus.addEventListener("click", function() {
    number--;
    numberText.innerHTML = number;
})

plus.addEventListener("click", function() {
    number++;
    numberText.innerHTML = number;
})