document.addEventListener("DOMContentLoaded", function() {
    const exercise1 = document.getElementById("exercise1");
    const exercise2 = document.getElementById("exercise2");
    const colorSlider = document.getElementById("colorSlider");
    const colorMessage = document.getElementById("colorMessage");
 
    const pictureContainer = document.getElementById("pictureContainer");
    const smallBtn = document.getElementById("smallBtn");
    const mediumBtn = document.getElementById("mediumBtn");
    const largeBtn = document.getElementById("largeBtn");

    // Function to handle showing/hiding exercises
    function showExercise(exerciseToShow, exerciseToHide) {
        exerciseToShow.style.display = "block";
        exerciseToHide.style.display = "none";
    }

    // Function to handle color slider change
    colorSlider.addEventListener("input", function() {
        const redValue = colorSlider.value;
        const color = `rgb(${redValue}, 0, 0)`;
        exercise1.style.backgroundColor = color;

        // Display different messages based on red value
        if (redValue < 85) {
            colorMessage.textContent = "This is a low red value.";
        } else if (redValue < 170) {
            colorMessage.textContent = "This is a medium red value.";
        } else {
            colorMessage.textContent = "This is a high red value.";
        }

        // Display slider value
        sliderValue.textContent = `Slider Value: ${redValue}`;
    });

    // Function to handle picture button click
    function showPicture(size) {
        const imageUrl = `https://picsum.photos/${size}`;
        pictureContainer.innerHTML = `<img src="${imageUrl}" alt="Random Picture">`;
    }

    // Event listeners for navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            const exerciseId = link.getAttribute('href').substring(1);
            if (exerciseId === 'exercise1') {
                showExercise(exercise1, exercise2);
            } else if (exerciseId === 'exercise2') {
                showExercise(exercise2, exercise1);
            }
        });
    });

    // Event listeners for picture buttons
    smallBtn.addEventListener("click", function() {
        showPicture(200);
    });

    mediumBtn.addEventListener("click", function() {
        showPicture(400);
    });

    largeBtn.addEventListener("click", function() {
        showPicture(600);
    });
});

//Arrow toggle
document.addEventListener("DOMContentLoaded", function() {
    const toggleMenu = document.querySelector('.arrow');
    const navList = document.querySelector('nav ul');

    // Function to toggle menu visibility and arrow direction
    toggleMenu.addEventListener('click', function() {
        navList.classList.toggle('active');
        toggleMenu.classList.toggle('up');
    });
});
