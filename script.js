const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const checkInput = () => {
    if (userInput.value === "") {
        alert("Please provide a phone number");
    } else if (checkPhoneNumber(userInput.value)) {
        resultsDiv.textContent = `Valid US number: ${userInput.value}`
    } else {
        resultsDiv.textContent = `Invalid US number: ${userInput.value}`;
    }

}

const clearInput = () => {
    userInput.value = "";
    resultsDiv.textContent = "";
}

const checkPhoneNumber = (num) => {
    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([-\s]?)\d{3}([-.\s]?)\d{4}$/;
    return phoneRegex.test(num);
}

checkBtn.addEventListener("click", checkInput);
clearBtn.addEventListener("click", clearInput);