// Function to check the user's answer
function checkAnswer(){
    //correct answer
    const correctAnswer = "4";

    // Get the selected answer
    const selectedOption =
    document.querySelector('input[name="quiz"]:checked');
    // Get the feedbackElement
    const feedbackElement =
    document.getElementById("feedback");

     if (selectedOption){
        //Get the user's selected answer value
       const userAnswer =
        selectedOption.value;

        //Compare the answer and update feedback
        if (userAnswer === 
            correctAnswer) {
            feedbackElement.textContent
            ="Correct! Well done.";
            feedbackElement.style.color
            ="green";
        } else {
           feedbackElement.textContent
            = "That's incorrect. Try again!";
            feedbackElement.style.color
            = "red";
        }
    } else {
        feedbackElement.textContent = 
        "Please select an answer.";
        feedbackElement.style.color =
        "orange";
    }
}

    //  Attach event listener to the submit button
    document.getElementById("submit-answer")
    .addEventListener("click", checkAnswer);
