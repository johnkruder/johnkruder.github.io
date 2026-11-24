document.addEventListener("DOMContentLoaded", function() {
    const questionsButton = document.getElementById("questionsButton");

    if (questionsButton) {
        questionsButton.addEventListener("click", function() {
            alert("f you have questions, contact me at: jkruder@hawk.illinoistech.edu");
        });
    }

});