class Bird {
    constructor(name, image, size, lifespan, food, habitat, fact) {
        this.name = name;
        this.image = image;
        this.size = size;
        this.lifespan = lifespan;
        this.food = food;
        this.habitat = habitat;
        this.fact = fact;
    }

    getSection() {
        return `
            <div class="bird-section" onclick="showModal('${this.name}')">
                <h3>${this.name}</h3>
                <img src="images/${this.image}" alt="${this.name}">
            </div>
        `;
    }

    // Generate the HTML for each bird in the modal
    getExpandedSection() {
        return `
            <div>
                <h3>${this.name}</h3>
                <p><strong>Size:</strong> ${this.size}</p>
                <p><strong>Lifespan:</strong> ${this.lifespan}</p>
                <p><strong>Food:</strong> ${this.food}</p>
                <p><strong>Habitat:</strong> ${this.habitat}</p>
                <p><strong>Interesting Fact:</strong> ${this.fact}</p>
            </div>
            <img src="images/${this.image}" alt="${this.name}">
        `;
    }
}

// Array of Bird objects
const birds = [
    new Bird('Cockatiel', 'cockatiel.jpg', 'Small', '12-15 years', 'Pellets and seeds', 'Australia', 'Cockatiels are extremely smart and can be taught to talk and do tricks. They are super friendly and I actually bred Cockatiels for many years'),
    new Bird('Pigeon', 'pigeon.jpg', 'Medium', '2-5 years', 'Grain, seeds and even insects', 'Worldwide', 'Pigeons are known for their ability to find their way home from long distances. You can learn about them from my dad\'s YouTube channel <a href="https://www.youtube.com/channel/UCDJ5O0uwlzBWtfuoQ3xejoQ" target="_blank">Rocky Ridge Pigeons</a>.'),
    new Bird('Parakeet', 'parakeet.jpg', 'Small', '5-8 years', 'Pellets, seeds, fruits and vegetables', 'Australia', 'Parakeets are very social and enjoy the company of their flock. Parakeets were the first bird I ever got and I actually bred them for a short while before moving to cockatiels.'),
    new Bird('Coconut Lorikeet', 'coconut-lorikeet.jpg', 'Small', '15-25 years', 'A lorikeet diet consists mostly of nectar and pollen, but they also will feed on portions of flowers, seeds, fruits, berries, insects and their larvae.', 'Anywhere where trees are plentiful: gardens, parks, woodlands, mangrove stands, swamps, savannas, and rainforests in Australia.', 'Coconut Lorikeets have a brush-tipped tongue for feeding on nectar. You can feed and meet these amazing birds at <a href="https://www.riverbanks.org/animals/birds/coconut-lorikeet" target="_blank">Riverbanks Zoo & Garden</a>.'),
];

// Function to load bird sections onto the main page
function loadBirds() {
    const birdContainer = document.getElementById('bird-container');
    birds.forEach(bird => {
        birdContainer.innerHTML += bird.getSection();
    });
}

// Function to show modal with expanded bird information
function showModal(birdName) {
    const bird = birds.find(b => b.name === birdName);
    document.getElementById('modal-info').innerHTML = bird.getExpandedSection();
    document.getElementById('modal').style.display = 'block';
}

// Function to close modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Event listener for close button
document.querySelector('.close-btn').addEventListener('click', closeModal);

// Load birds when window loads
window.onload = loadBirds;
