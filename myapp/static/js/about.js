// Get the Learn More button and the additional content
const learnMoreBtn = document.getElementById("learnMoreBtn");
const additionalContent = document.getElementById("additionalContent");

// Add event listener to the Learn More button
learnMoreBtn.addEventListener("click", function() {
    // Toggle visibility of the additional content
    if (additionalContent.style.display === "none" || additionalContent.style.display === "") {
        additionalContent.style.display = "block";  // Show the content
        learnMoreBtn.textContent = "Show Less";     // Change button text to "Show Less"
    } else {
        additionalContent.style.display = "none";  // Hide the content
        learnMoreBtn.textContent = "Learn More";   // Change button text to "Learn More"
    }
});

