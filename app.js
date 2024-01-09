const minus = document.querySelector(".negative");
const plus = document.querySelector(".positive");
const numberText = document.querySelector(".numberText");
let number = 0;
let x;


let check = () => {
	if (x == 0) {
		numberText.style.color = "black";
	} else if (x == -1) {
		numberText.style.color = "red";
	} else if (x == 1) {
		numberText.style.color = "green";
	}
};

minus.addEventListener("click", function () {
	number--;
	x = Math.sign(number);
	numberText.innerHTML = number;
	check();
	return x;
});

plus.addEventListener("click", function () {
	number++;
	x = Math.sign(number);
	numberText.innerHTML = number;
	check();
	return x;
});
