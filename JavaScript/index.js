let result = document.getElementById("calc")
let firstNumber = null
let operator = null

function btnClick(value) {
    if (!isNaN(Number(value)))
        result.value += value;
}

function btnOperator(a) {
    firstNumber = Number(result.value)
    operator = a
    result.value =""
}

function btnClear(value) {
    result.value = ""
}

function btnResult() {
    let secondNumber = Number(result.value)
    let finalResult = 0
    if (operator === "+") {
        finalResult = firstNumber + secondNumber
    }
    else if (operator === "-") {
        finalResult = firstNumber - secondNumber
    }
    else if (operator === "*") {
        finalResult = firstNumber * secondNumber
    }
    else if (operator === "/") {
        finalResult = firstNumber / secondNumber
    }
    result.value = finalResult}
