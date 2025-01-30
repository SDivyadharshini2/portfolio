
document.getElementById('showMoreBtn').addEventListener('click', function() {
    var cssDiv = document.getElementById('css');
    if (cssDiv.style.display === 'none') {
        cssDiv.style.display = 'flex'; // Show the content (flex for the layout)
        this.innerHTML = 'Show less'; // Change the button text to 'Show less'
    } else {
        cssDiv.style.display = 'none'; // Hide the content
        this.innerHTML = 'Show more'; // Change the button text back to 'Show more'
    }
});
