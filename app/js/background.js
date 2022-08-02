const keys = document.getElementsByTagName("span");
const input = document.getElementById("screen");
const operators = ["+", "-", "*", "/", "^"];
const math = require("mathjs");

for (const key of keys) {
	key.addEventListener("click", async function (e) {
		const inputVal = input.value;
		const btnVal = this.textContent;

		if (btnVal === "C") {
			input.value = "";
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
				btnVal === "tan" ||
				btnVal === "n!" ||
				btnVal === "±" ||
				btnVal === "¹/ₓ") &&
			input.value === ""
		) {
			input.value = "";
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
		} else if (operators.includes(btnVal)) {
			if (btnVal !== "-") {
				const lastChar = inputVal[inputVal.length - 1];

				if (inputVal !== "" && !operators.includes(lastChar)) {
					input.value += btnVal;
				} else if (inputVal === "" && btnVal === "-") {
					input.value += btnVal;
				}

				if (operators.includes(lastChar) && inputVal.length > 1) {
					input.value = inputVal.replace(/.$/, btnVal);
				}
			} else {
				input.value += btnVal;
			}
		} else if (btnVal === ".") {
			input.value += btnVal;
		} else if (btnVal === "%") {
			input.value += btnVal;
		} else if (btnVal === "x²") {
			input.value += "^2";
		} else if (btnVal === "xʸ") {
			input.value += "^";
		} else if (btnVal === "10ˣ") {
			input.value += "10^";
		} else if (btnVal === "¹/ₓ" && input.value !== "") {
			input.value = `1/(${input.value})`;
		} else if (btnVal === "√x" && input.value !== "") {
			input.value = `sqrt(${input.value})`;
		} else if (btnVal === "abs" && input.value !== "") {
			input.value = `abs(${input.value})`;
		} else if (btnVal === "log" && input.value !== "") {
			input.value = `ln(${input.value})`;
		} else if (btnVal === "exp" && input.value !== "") {
			input.value = `exp(${input.value})`;
		} else if (btnVal === "sin" && input.value !== "") {
			input.value = `sin(${input.value})`;
		} else if (btnVal === "cos" && input.value !== "") {
			input.value = `cos(${input.value})`;
		} else if (btnVal === "tan" && input.value !== "") {
			input.value = `tan(${input.value})`;
		} else if (btnVal === "n!" && input.value !== "") {
			input.value = `${input.value}!`;
		} else if (btnVal === "±" && input.value !== "") {
			input.value = `-${input.value}`;
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

	console.log(code);

	if (
		code.startsWith("Numpad") &&
		event.getModifierState("NumLock") === false
	) {
		return;
	}

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
	}

	if (
		!operators.includes(lastChar) &&
		(code == "Minus" || code == "NumpadSubtract")
	) {
		input.value += "-";
	}

	if (
		(inputVal != "" &&
			!operators.includes(lastChar) &&
			(code == "KeyX" || code == "NumpadMultiply")) ||
		(code == "Digit8" && event.shiftKey)
	) {
		input.value += "*";
	}

	if (
		inputVal != "" &&
		!operators.includes(lastChar) &&
		(code == "Slash" || code == "IntlRo" || code == "NumpadDivide")
	) {
		input.value += "/";
	}

	if (code == "Period" || code == "NumpadDecimal" || code == "NumpadComma") {
		input.value += ".";
	}

	if (
		event.shiftKey == true &&
		inputVal != "" &&
		!operators.includes(lastChar) &&
		code == "Quote"
	) {
		input.value += "^";
	}

	if (code == "KeyE") {
		input.value += "e";
	}

	if (
		inputVal != "" &&
		!operators.includes(lastChar) &&
		code == "Digit5" &&
		event.shiftKey
	) {
		input.value += "%";
	}

	if (event.shiftKey == false && (code == "NumpadEnter" || code == "Enter")) {
		document.querySelector(".eval").click();
	}

	if (code == "Delete") {
		input.value = "";
	}

	if (code == "Backspace") {
		input.value = input.value.slice(0, -1);
	}
});
