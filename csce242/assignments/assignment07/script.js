function incrementCount() {
    let countElement = document.getElementById("count");
    let count = parseInt(countElement.textContent);
    countElement.textContent = count + 1;
}

function refreshPage() {
    location.reload();
}

function moveSquare() {
    let slider = document.getElementById("slider");
    let square = document.getElementById("square");
    let value = slider.value;
    let containerWidth = document.getElementById("sliderColumn").offsetWidth; // Get the width of the slider column
    let maxSquarePosition = containerWidth - square.offsetWidth; // Calculate the maximum position of the square
    let squarePosition = (value / 120) * maxSquarePosition; // Calculate the position of the square proportionally

    // Ensure squarePosition stays within bounds
    if (squarePosition < 0) {
        squarePosition = 0;
    } else if (squarePosition > maxSquarePosition) {
        squarePosition = maxSquarePosition;
    }

    // Move the square
    square.style.left = squarePosition + "px";
}
