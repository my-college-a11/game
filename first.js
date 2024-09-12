const guessButton = document.getElementById("guessButton");
const guessInput = document.getElementById("guessNumber");
const feedback = document.getElementById("feedback");
const attemptsDisplay = document.getElementById("attempts");

const randomNumber =  Math.floor (Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 5;

guessButton.addEventListener("click", () => {
    attempts++;
    const userGuess  = parseInt(guessInput.value);

    if(isNaN(userGuess) || userGuess < 1 || userGuess > 100){
        feedback.textContent = "Please enter a number between 1 to 100!";
        feedback.style.color = "orange";
    
    }else if(userGuess === randomNumber){
        feedback.textContent = "Congratulations you guess the number!";
        feedback.style.color = "green";
        guessButton.disabled = true;
    }else if(attempts >= maxAttempts){
        feedback.textContent = `Game over! The correct number was ${randomNumber}.`;
        feedback.style.color = "#415a77";
        guessButton.disabled = true;
    }else if(userGuess < randomNumber){
        feedback.textContent = "Too low! try again.";
        feedback.style.color = "#415a77";
    }else{
        feedback.textContent = "Too high! try again.";
        feedback.style.color = "#415a77";
    }
    attemptsDisplay.textContent = attempts;
    guessInput.value = '';
    guessInput.focus();
});
