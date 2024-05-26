// script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav');

    // Hamburger menu functionality
    hamburgerMenu.addEventListener('click', () => {
        mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
    });

    // Fetch and display player data
    const playersList = document.getElementById('players-list');

    fetch('players.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(player => {
                const playerRow = document.createElement('tr');

                playerRow.innerHTML = `
                    <td><a href="bio.html"><img src="${player.img_name}" alt="${player.name}"></a></td>
                    <td>${player.name}</td>
                    <td>PPG <br><br>${player.stats[0]}</td>
                    <td>Rebounds<br><br>${player.stats[1]}</td>
                    <td>Assists<br><br>${player.stats[2]}</td>
                    <td>Height<br><br>${player.height}</td>
                    <td>Weight<br><br>${player.weight}</td>
                    <td>Age<br><br>${player.age}</td>
                    <td>College<br><br>${player.college}</td>
                    <td>Draft Pick<br><br>${player.draft_pick}</td>
                    <td>Drafted By<br><br>${player.drafted_by}</td>
                `;

                playersList.appendChild(playerRow);
            });
        })
        .catch(error => console.error('Error fetching the player data:', error));

    // Form submission functionality
    const showEmail = async (e) => {
        e.preventDefault();
        const result = document.getElementById("result");
        let response = await getEmail();

        if (response && response.status === 200) {
            result.innerHTML = "Thank you for contacting us. We will be in touch shortly!";
            result.classList.add("success-message");

            // Display the success message
            const successMessage = document.createElement("div");
            successMessage.className = "success-message";
            successMessage.innerHTML = "Your email has been sent successfully!";
            result.appendChild(successMessage);

            const form = document.getElementById("contact-form");
            const inputElements = form.querySelectorAll('input, textarea');
            inputElements.forEach((input) => {
                input.value = '';
            });

            // Remove the success message after 2 minutes
            setTimeout(() => {
                successMessage.remove();
            }, 2000); // 2 seconds in milliseconds
        } else {
            result.innerHTML = "Sorry, your email couldn't be sent.";
            result.classList.add("error-message");
        }

        // Remove all messages after 2 minutes
        setTimeout(() => {
            result.innerHTML = "";
        }, 2000); // 2 seconds in milliseconds
    };

    const getEmail = async () => {
        const form = document.getElementById("contact-form");
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);

        // Add public access key to the form data object
        object.access_key = "c94cb2e7-4bad-4705-a0bf-651bea42e9a3";

        const json = JSON.stringify(object);
        const result = document.getElementById("result");
        result.innerHTML = "Please wait...";
        result.classList.add("please-wait");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: json,
            });
            result.classList.remove("please-wait");
            return response;
        } catch (error) {
            console.log(error);
            result.innerHTML = "Sorry, your email couldn't be sent.";
            result.classList.remove("please-wait");
            result.classList.add("error-message");
        }
    };

    document.getElementById("contact-form").onsubmit = showEmail;
});
