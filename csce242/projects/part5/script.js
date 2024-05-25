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
});
