const keys = document.getElementsByTagName("span")
const input = document.getElementById("screen")
const operators = ["+", "-", "*", "/", "^"]
const math = require("mathjs")

for (const key of keys) {
	key.addEventListener("click", async function (e) {
		const inputVal = input.value
		const btnVal = this.textContent

		if (btnVal === "C") {
			input.value = ""
		} else if (btnVal === "⌫") {
			input.value = input.value.slice(0, -1)
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
				btnVal === "¹/ₓ") &&
			input.value === ""
		) {
			input.value = ""
		} else if (btnVal === "=") {
			let equation = inputVal
			const lastChar = equation[equation.length - 1]

			if (operators.includes(lastChar) || lastChar === ".") {
				equation = equation.replace(/.$/, "")
			}

			if (equation) {
				const result = await math
					.evaluate(equation.replace(/π/g, "pi"))
					.toString()
				input.value = result
			}
		} else if (operators.includes(btnVal)) {
			if (btnVal !== "-") {
				const lastChar = inputVal[inputVal.length - 1]

				if (inputVal !== "" && !operators.includes(lastChar)) {
					input.value += btnVal
				} else if (inputVal === "" && btnVal === "-") {
					input.value += btnVal
				}

				if (operators.includes(lastChar) && inputVal.length > 1) {
					input.value = inputVal.replace(/.$/, btnVal)
				}
			} else {
				input.value += btnVal
			}
		} else if (btnVal === ".") {
			input.value += btnVal
		} else if (btnVal === "%") {
			input.value += btnVal
		} else if (btnVal === "x²") {
			input.value += "^2"
		} else if (btnVal === "xʸ") {
			input.value += "^"
		} else if (btnVal === "10ˣ") {
			input.value += "10^"
		} else if (btnVal === "¹/ₓ" && input.value !== "") {
			input.value += "1/"
		} else if (btnVal === "√x" && input.value !== "") {
			if (getPosition(input.value) === 0) {
				input.value = `sqrt(${input.value})`
			} else {
				input.value = `${input.value.slice(
					0,
					getPosition(input.value)
				)}sqrt(${input.value.slice(getPosition(input.value))})`
			}
		} else if (btnVal === "abs" && input.value !== "") {
			if (getPosition(input.value) === 0) {
				input.value = `abs(${input.value})`
			} else {
				input.value = `${input.value.slice(
					0,
					getPosition(input.value)
				)}abs(${input.value.slice(getPosition(input.value))})`
			}
		} else if (btnVal === "log" && input.value !== "") {
			if (getPosition(input.value) === 0) {
				input.value = `log(${input.value})`
			} else {
				input.value = `${input.value.slice(
					0,
					getPosition(input.value)
				)}log(${input.value.slice(getPosition(input.value))})`
			}
		} else if (btnVal === "exp" && input.value !== "") {
			if (getPosition(input.value) === 0) {
				input.value = `exp(${input.value})`
			} else {
				input.value = `${input.value.slice(
					0,
					getPosition(input.value)
				)}exp(${input.value.slice(getPosition(input.value))})`
			}
		} else if (btnVal === "sin" && input.value !== "") {
			if (getPosition(input.value) === 0) {
				input.value = `sin(${input.value})`
			} else {
				input.value = `${input.value.slice(
					0,
					getPosition(input.value)
				)}sin(${input.value.slice(getPosition(input.value))})`
			}
		} else if (btnVal === "cos" && input.value !== "") {
			if (getPosition(input.value) === 0) {
				input.value = `cos(${input.value})`
			} else {
				input.value = `${input.value.slice(
					0,
					getPosition(input.value)
				)}cos(${input.value.slice(getPosition(input.value))})`
			}
		} else if (btnVal === "tan" && input.value !== "") {
			if (getPosition(input.value) === 0) {
				input.value = `tan(${input.value})`
			} else {
				input.value = `${input.value.slice(
					0,
					getPosition(input.value)
				)}tan(${input.value.slice(getPosition(input.value))})`
			}
		} else if (btnVal === "n!" && input.value !== "") {
			input.value += "!"
		} else {
			input.value += btnVal
		}

		e.preventDefault()
	})
}

/* Keyboard support */

document.addEventListener("keydown", async (event) => {
	const { code } = event
	const inputVal = input.value
	const lastChar = inputVal[inputVal.length - 1]

	if (
		code.startsWith("Numpad") &&
		event.getModifierState("NumLock") === false
	) {
		return
	}

	if (
		event.shiftKey == false &&
		(code.startsWith("Numpad") || code.startsWith("Digit")) &&
		"0123456789".includes(code.slice(-1)) &&
		!event.getModifierState("AltGraph")
	) {
		input.value += code.slice(-1)
	}

	if (
		inputVal != "" &&
		!operators.includes(lastChar) &&
		(code == "Equal" || code == "NumpadAdd")
	) {
		input.value += "+"
	}

	if (
		!operators.includes(lastChar) &&
		(code == "Minus" || code == "NumpadSubtract")
	) {
		input.value += "-"
	}

	if (
		(inputVal != "" &&
			!operators.includes(lastChar) &&
			(code == "KeyX" || code == "NumpadMultiply")) ||
		(code == "Digit8" && event.shiftKey)
	) {
		input.value += "*"
	}

	if (
		inputVal != "" &&
		!operators.includes(lastChar) &&
		(code == "Slash" ||
			code == "IntlRo" ||
			code == "NumpadDivide" ||
			(event.getModifierState("AltGraph") && code == "KeyQ"))
	) {
		input.value += "/"
	}

	if (
		inputVal != "" &&
		!operators.includes(lastChar) &&
		event.getModifierState("AltGraph") &&
		code == "Digit2"
	) {
		input.value += "^2"
	}

	if (code == "Period" || code == "NumpadDecimal" || code == "NumpadComma") {
		input.value += "."
	}

	if (
		event.shiftKey == true &&
		inputVal != "" &&
		!operators.includes(lastChar) &&
		code == "Quote"
	) {
		input.value += "^"
	}

	if (
		event.shiftKey == true &&
		inputVal != "" &&
		!operators.includes(lastChar) &&
		code == "Digit2"
	) {
		input.value = `sqrt(${input.value})`
	}

	if (
		event.shiftKey == true &&
		inputVal != "" &&
		!operators.includes(lastChar) &&
		code == "Digit1"
	) {
		input.value += "!"
	}

	if (event.shiftKey == true && code == "Digit9") {
		input.value += "("
	}

	if (
		event.shiftKey == true &&
		inputVal != "" &&
		!operators.includes(lastChar) &&
		code == "Digit0"
	) {
		input.value += ")"
	}

	if (code == "KeyR") {
		input.value += "1/"
	}

	if (code == "KeyE") {
		input.value += "e"
	}

	if (code == "KeyP") {
		input.value += "π"
	}

	if (code == "KeyS") {
		input.value = `sin(${input.value})`
	}

	if (code == "KeyT") {
		input.value = `tan(${input.value})`
	}

	if (code == "KeyC") {
		input.value = `cos(${input.value})`
	}

	if (code == "KeyA") {
		input.value = `abs(${input.value})`
	}

	if (code == "KeyL") {
		input.value = `ln(${input.value})`
	}

	if (code == "KeyX") {
		input.value += "10^"
	}

	if (code == "KeyK") {
		input.value = `exp(${input.value})`
	}

	if (code == "KeyI") {
		input.value += "i"
	}

	if (
		inputVal != "" &&
		!operators.includes(lastChar) &&
		code == "Digit5" &&
		event.shiftKey
	) {
		input.value += "%"
	}

	if (event.shiftKey == false && (code == "NumpadEnter" || code == "Enter")) {
		document.querySelector(".eval").click()
	}

	if (code == "Delete") {
		input.value = ""
	}

	if (code == "Backspace") {
		input.value = input.value.slice(0, -1)
	}
})

function getPosition(string) {
	for (let i = string.length; i >= 0; i--) {
		if (operators.includes(string[i])) {
			return i + 1
		} else if (i == 0) {
			return 0
		}
	}
}
