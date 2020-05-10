// Variables

const select = document.querySelector("#type");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answernum1 = document.querySelector("#answernum1");
const answernum2 = document.querySelector("#answernum2");
const answerunit1 = document.querySelector("#answerunit1");
const answerunit2 = document.querySelector("#answerunit2");

const calculatebtn = document.querySelector("#calculate");
const resetbtn = document.querySelector("#reset");

// Functions

function displayInput() {
    input1.value = ""
    input2.value = ""
    switch (select.value) {
        case "circle":
            input1.placeholder = "Radius";
            input2.classList.add("hidden");
            break;
        case "triangle":
            input1.placeholder = "Height";
            input2.placeholder = "Base";
            input2.classList.remove("hidden");
            break;
        case "square":
            input1.placeholder = "Length";
            input2.classList.add("hidden");
            break;
        case "rect":
            input1.placeholder = "Length"
            input2.placeholder = "Width"
            input2.classList.remove("hidden");
            break;
        case "pent":
            input1.placeholder = "Side"
            input2.placeholder = "Apothem"
            input2.classList.remove("hidden");
            break;
        case "hex":
            input1.placeholder = "Side"
            input2.placeholder = "Apothem"
            input2.classList.remove("hidden");
            break;
    }
}

function calculate() {
    let size1 = parseFloat(input1.value)
    let size2 = parseFloat(input2.value)
    let validity;

    if (isNaN(size1)) {
        validity = false;
    } else if (select.value !== "circle" && select.value !== "square" && isNaN(size2)) {
        validity = false;
    } else {
        validity = true;
    }

    if (!validity) { 
        answer1.innerText = "Please type in a number";
        answernum1.innerText = ""
        answerunit1.innerText = ""
        answer2.innerText = ""
        answernum2.innerText = ""
        answerunit2.innerText = ""
    } 
    
    else if (validity) {
        let output1;
        let output2;
        switch (select.value) {
            case "circle":
                output1 = Math.pow(size1, 2) * Math.PI;
                output2 = size1 * 2 * Math.PI
                break;
            case "triangle":
                output1 = (size1 * size2) / 2;
                output2 = null
                break;
            case "square":
                output1 = Math.pow(size1, 2);
                output2 = size1 * 4
                break;
            case "rect":
                output1 = size1 * size2;
                output2 = size1 * 2 + size2 * 2
                break;
            case "pent":
                output1 = size1 * size2 / 2 * 5;
                output2 = size1 * 5
                break;
            case "hex":
                output1 = size1 * size2 / 2 * 6;
                output2 = size1 * 6
                break;
        }

        if (output2 === null) {
            output2 = 0
        }

        answernum1.innerText = output1.toFixed(2);
        answernum2.innerText = output2.toFixed(2);
        answer1.innerText = "Area: "
        answer2.innerText = "Perimeter: "
        answerunit1.innerText = " square units"
        answerunit2.innerText = " units"
    }
}

function reset() {
    input1.value = "";
    input2.value = "";
    answer1.innerText = "";
    answer2.innerText = "";
    answernum1.innerText = "";
    answernum2.innerText = ""
    answerunit1.innerText = ""
    answerunit2.innerText = ""
}

// Event Listeners

window.addEventListener("load", displayInput)
select.addEventListener("change", displayInput);
calculatebtn.addEventListener("click", calculate);
resetbtn.addEventListener("click", reset);