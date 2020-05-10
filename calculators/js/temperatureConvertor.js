// Variables

const select = document.querySelector("#type");
const input = document.querySelector("#input");
const answernum1 = document.querySelector("#answernum1");
const answernum2 = document.querySelector("#answernum2"); 
const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");

const convertbtn = document.querySelector("#convert");
const resetbtn = document.querySelector("#reset");


// Functions

const convert = () => {
    let size = parseFloat(input.value)
    let validity;

    if (isNaN(size)) {
        validity = false; 
    } 
    else {
        validity = true;
    }

    if (!validity) {
        answernum1.innerText = ""
        answernum2.innerText = ""
        answer1.innerText = "Please type in a number"
        answer2.innerText = ""
    }

    else if (validity) {
        let result1;
        let result2;
        let label1;
        let label2;

        switch (select.value) {
            case "Celsius":
                result1 = size * 1.8 + 32
                result2 = size + 273.15
                label1 = "Fahrenheit"
                label2 = "Kelvin"
                break;
            case "Fahrenheit":
                result1 = (size - 32) / 1.8
                result2 = result1 + 273.15
                label1 = "Celsius"
                label2 = "Kelvin"
                break;
            case "Kelvin":
                result1 = size - 273.15
                result2 = result1 * 9/5 + 32
                label1 = "Celsius"
                label2 = "Fahreheit"
                break;
        }
        
        answernum1.innerText = result1.toFixed(2)
        answernum2.innerText = result2.toFixed(2)
        answer1.innerText = ` ${label1}`
        answer2.innerText = ` ${label2}`
    }
}

const reset = () => {
    input.value = ""
    answernum1.innerText = ""
    answernum2.innerText = ""
    answer1.innerText = ""
    answer2.innerText = ""
}

// Event Listeners

convertbtn.addEventListener("click", convert)
resetbtn.addEventListener("click", reset)