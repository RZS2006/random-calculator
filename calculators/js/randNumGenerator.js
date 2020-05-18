// Variables

const coinbtn = document.querySelector("#coin");
const dicebtn = document.querySelector("#dice")

const min = document.querySelector("#min");
const max = document.querySelector("#max");
const decimal = document.querySelector("#decimal");
const amount = document.querySelector("#amount");
const output = document.querySelector("#output");

const generatebtn = document.querySelector("#generate");
const resetbtn = document.querySelector("#reset");

// Functions

const generate = () => {
    let minNum = parseFloat(min.value);
    let maxNum = parseFloat(max.value);
    let decNum, amoNum;

    if (decimal.value === "") {
        decNum = 0;
    } else {
        decNum = parseInt(decimal.value);
    }

    if (amount.value === "") {
        amoNum = 1;
    } else {
        amoNum = parseInt(amount.value);
    }

    if (isNaN(minNum) || isNaN(maxNum) || isNaN(decNum) || isNaN(amoNum)) {
        output.innerText = "Please type in a number";
        return
    }

    if (decNum > 20 || decNum < 0) {
        output.innerText = "Decimal is over 20 or under 0";
        return
    }

    if (amoNum > 100 || amoNum < 0) {
        output.innerText = "Amount is over 100 or under 0";
        return
    }

    let outputArr = [];

    for (let i = 0; i < amoNum; i++) {
        let randomNum = (Math.random () * (maxNum-minNum) + minNum);
        outputArr.push(randomNum.toFixed(decNum))
    }

    output.innerText = outputArr.join("; ")
}

const reset = () => {
    min.value = "";
    max.value = "";
    decimal.value = "";
    amount.value = "";
    output.innerText = "";
}

// Event Listeners

coinbtn.addEventListener("click", () => {
    min.value = "1";
    max.value = "2";
    decimal.value = "";
    amount.value = "";
})

dicebtn.addEventListener("click", () => {
    min.value = "1";
    max.value = "6"
    decimal.value = "";
    amount.value = "";
})

generatebtn.addEventListener("click", generate);
resetbtn.addEventListener("click", reset);