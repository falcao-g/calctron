const keys = document.getElementsByTagName("span");
const input = document.getElementById("screen");
const operators = ["+", "-", "*", "/", "^"];
const math = require("mathjs");

let decimalAdded = true;

for (const key of keys) {
	key.addEventListener("click", async function (e) {
		const inputVal = input.value;
		const btnVal = this.textContent;

		if (btnVal === "C") {
			input.value = "";
			decimalAdded = true;
		} else if (
			(btnVal === "√" ||
				btnVal === "√x" ||
				btnVal === "xʸ" ||
				btnVal === "%" ||
				btnVal === "x²" ||
				btnVal === "abs" ||
				btnVal === "exp" ||
				btnVal === "log" ||
				btnVal === "sin" ||
				btnVal === "cos" ||
				btnVal === "tan") &&
			input.value === ""
		) {
			input.value = "";
			decimalAdded = true;
		} else if (btnVal === "=") {
			let equation = inputVal;
			const lastChar = equation[equation.length - 1];

			if (operators.includes(lastChar) || lastChar === ".") {
				equation = equation.replace(/.$/, "");
			}

			if (equation) {
				const result = await math
					.evaluate(equation.replace(/π/g, "pi"))
					.toString();
				input.value = result;
			}

			decimalAdded = false;
		} else if (operators.includes(btnVal)) {
			const lastChar = inputVal[inputVal.length - 1];

			if (inputVal !== "" && !operators.includes(lastChar)) {
				input.value += btnVal;
			} else if (inputVal === "" && btnVal === "-") {
				input.value += btnVal;
			}

			if (operators.includes(lastChar) && inputVal.length > 1) {
				input.value = inputVal.replace(/.$/, btnVal);
			}

			decimalAdded = true;
		} else if (btnVal === ".") {
			if (decimalAdded == true) {
				input.value += btnVal;
				decimalAdded = false;
			}
		} else if (btnVal === "%") {
			if (decimalAdded == true) {
				input.value += btnVal;
				decimalAdded = false;
			}
		} else if (btnVal === "x²") {
			input.value += "^2";
			decimalAdded = false;
		} else if (btnVal === "xʸ") {
			input.value += "^";
			decimalAdded = false;
		} else if (btnVal === "√x" && input.value !== "") {
			input.value = `sqrt(${input.value})`;
			decimalAdded = false;
		} else if (btnVal === "abs" && input.value !== "") {
			input.value = `abs(${input.value})`;
			decimalAdded = false;
		} else if (btnVal === "log" && input.value !== "") {
			input.value = `ln(${input.value})`;
			decimalAdded = false;
		} else if (btnVal === "exp" && input.value !== "") {
			input.value = `exp(${input.value})`;
			decimalAdded = false;
		} else if (btnVal === "sin" && input.value !== "") {
			input.value = `sin(${input.value})`;
			decimalAdded = false;
		} else if (btnVal === "cos" && input.value !== "") {
			input.value = `cos(${input.value})`;
			decimalAdded = false;
		} else if (btnVal === "tan" && input.value !== "") {
			input.value = `tan(${input.value})`;
			decimalAdded = false;
		} else {
			input.value += btnVal;
		}

		e.preventDefault();
	});
}

/* Keyboard support */

document.addEventListener("keydown", async (event) => {
	const { code } = event;
	const inputVal = input.value;
	const lastChar = inputVal[inputVal.length - 1];

	if (
		event.shiftKey == false &&
		(code.startsWith("Numpad") || code.startsWith("Digit")) &&
		"0123456789".includes(code.slice(-1))
	) {
		input.value += code.slice(-1);
	}

	if (
		inputVal != "" &&
		!operators.includes(lastChar) &&
		(code == "Equal" || code == "NumpadAdd")
	) {
		input.value += "+";
		decimalAdded = true;
	}

	if (
		!operators.includes(lastChar) &&
		(code == "Minus" || code == "NumpadSubtract")
	) {
		input.value += "-";
		decimalAdded = true;
	}

	if (
		(inputVal != "" &&
			!operators.includes(lastChar) &&
			(code == "KeyX" || code == "NumpadMultiply")) ||
		(code == "Digit8" && event.shiftKey)
	) {
		input.value += "*";
		decimalAdded = true;
	}

	if (
		inputVal != "" &&
		!operators.includes(lastChar) &&
		(code == "Slash" || code == "IntlRo" || code == "NumpadDivide")
	) {
		input.value += "/";
		decimalAdded = true;
	}

	if ((code == "Period" || code == "NumpadDecimal") && decimalAdded == true) {
		input.value += ".";
		decimalAdded = false;
	}

	if (code == "KeyE") {
		input.value += "e";
		decimalAdded = false;
	}

	if (
		inputVal != "" &&
		!operators.includes(lastChar) &&
		code == "Digit5" &&
		event.shiftKey
	) {
		input.value += "%";
		decimalAdded = true;
	}

	if (
		inputVal != "" &&
		!operators.includes(lastChar) &&
		code == "Digit6" &&
		event.shiftKey
	) {
		input.value += "^";
		decimalAdded = true;
	}

	if (event.shiftKey == false && (code == "NumpadEnter" || code == "Enter")) {
		document.querySelector(".eval").click();
	}

	if (code == "Delete") {
		input.value = "";
		decimalAdded = true;
	}

	if (code == "Backspace") {
		input.value = input.value.slice(0, -1);
	}
});
