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
        answernum1.innerHTML = ""
        answernum2.innerHTML = ""
        answer1.innerHTML = "Please type in a number"
        answer2.innerHTML = ""
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
        
        answernum1.innerHTML = result1.toFixed(2)
        answernum2.innerHTML = result2.toFixed(2)
        answer1.innerHTML = ` ${label1}`
        answer2.innerHTML = ` ${label2}`
    }
}

const reset = () => {
    input.value = ""
    answernum1.innerHTML = ""
    answernum2.innerHTML = ""
    answer1.innerHTML = ""
    answer2.innerHTML = ""
}

// Event Listeners

convertbtn.addEventListener("click", convert)
resetbtn.addEventListener("click", reset)