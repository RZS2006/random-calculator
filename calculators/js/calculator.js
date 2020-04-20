// Variables

const previous = document.querySelector(".previous")
const current = document.querySelector(".current")

const numbersBtns = document.querySelectorAll(".number")
const operatorsBtns = document.querySelectorAll(".operator")
const decimalBtn = document.querySelector(".decimal")
const equalsBtn = document.querySelector(".equals")
const allclearBtn = document.querySelector(".allclear")
const backspaceBtn = document.querySelector(".backspace")
const answerBtn = document.querySelector(".answer")

let currentVal = ""
let previousVal = ""
let inputArr = []
let answer;
let equalsPressed = false

current.innerHTML = "0"
previous.innerHTML = previousVal

//Functions

const append = (num) => {
    if (equalsPressed) {
        allclear()
    }

    if (currentVal.length >= 18) {
        alert("Cannot enter more than 18 digits.")
        return
    }

    currentVal += num.toString()
    current.innerHTML = currentVal

    equalsPressed = false
}

const operation = (oper) => {
    if (equalsPressed) {
        currentVal = answer
        inputArr = []
        previousVal = ""
    }

    if (currentVal === "") {
        return
    }

    inputArr.push(currentVal)
    previousVal += currentVal
    currentVal = ""

    switch (oper) {
        case "+":
            inputArr.push("+")
            previousVal += "+"
            break;
        case "-":
            inputArr.push("-")
            previousVal += "-"
            break;
        case "×":
            inputArr.push("*")
            previousVal += "×"
            break;
        case "÷":
            inputArr.push("/")
            previousVal += "÷"
            break;
    }

    current.innerHTML = "0"
    previous.innerHTML = previousVal

    equalsPressed = false
}

const allclear = () => {
    currentVal = ""
    previousVal = ""
    inputArr = []
    answer = undefined

    current.innerHTML = "0"
    previous.innerHTML = previousVal
}

const backspace = () => {
    if (equalsPressed) {
        shift()
    }

    currentVal = currentVal.slice(0, -1)

    if (currentVal === "") {
        current.innerHTML = "0"
        return
    }

    current.innerHTML = currentVal
}

const appendDecimal = () => {
    if (equalsPressed) {
        allclear()
    }

    if (!currentVal.includes(".")) {
        currentVal += "."
        current.innerHTML = currentVal
    }

    equalsPressed = false
}

const compute = () => {
    if (currentVal === "") {
        return
    }

    inputArr.push(currentVal)
    previousVal += currentVal
    currentVal = ""

    let arrStr = inputArr.join("")
    answer = eval(arrStr)

    current.innerHTML = answer
    previous.innerHTML = previousVal

    equalsPressed = true
}

const shift = () => {
    if (!answer) {
        return
    }

    currentVal = answer.toString()
    previousVal = ""
    inputArr = []
    
    current.innerHTML = currentVal
    previous.innerHTML = previousVal

    equalsPressed = false
}

//Event Listeners

numbersBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        append(btn.innerText)
    })
})

operatorsBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        operation(btn.innerText)
    })
})

decimalBtn.addEventListener("click", appendDecimal)
equalsBtn.addEventListener("click", compute)
allclearBtn.addEventListener("click", allclear)
backspaceBtn.addEventListener("click", backspace)
answerBtn.addEventListener("click", shift)