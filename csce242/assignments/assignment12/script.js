/* Define URL for Ice Cream JSON data */
const iceCreamsUrl = "https://portiaportia.github.io/json/ice-creams.json";

/* Function to fetch Ice Creams data */
const fetchIceCreams = async () => {
    try {
        const response = await fetch(iceCreamsUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error('Failed to fetch ice creams:', error);
        return [];
    }
};

/* Function to display Ice Creams */
const displayIceCreams = async () => {
    const iceCreams = await fetchIceCreams();
    const gallery = document.getElementById("ice-cream-gallery");

    if (!gallery) {
        console.error('Gallery element not found');
        return;
    }

    iceCreams.forEach(iceCream => {
        if (!iceCream.image.includes('-2')) { // Exclude '2' images
            const iceCreamItem = createIceCreamItem(iceCream);
            gallery.appendChild(iceCreamItem);
        }
    });
};

/* Function to create Ice Cream item */
const createIceCreamItem = (iceCream) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'ice-cream-item';

    const img = document.createElement('img');
    img.src = `https://portiaportia.github.io/json/images/ice-creams/${iceCream.image}`;
    img.alt = iceCream.name;
    img.classList.add('ice-cream-image');

    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.textContent = iceCream.name;

    itemDiv.appendChild(img);
    itemDiv.appendChild(overlay);

    return itemDiv;
};

/* Event listener to display Ice Creams when DOM content is loaded */
document.addEventListener('DOMContentLoaded', displayIceCreams);
