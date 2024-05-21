// Associative array containing image paths and descriptions
const images = [
    {
        src: "images/birthday.jpg",
        title: "Birthday",
        description: "It's little Timmy's Birthday."
    },
    {
        src: "images/clown.jpg",
        title: "Clown",
        description: "There is a clown show at the birthday party."
    },
    {
        src: "images/rain.jpg",
        title: "Rain",
        description: "it starts to rain at the birthday party."
    },
    {
        src: "images/read.jpg",
        title: "Read",
        description: "Mom starts reading a book to the guests."
    },
    {
        src: "images/shovel.jpg",
        title: "Shovel",
        description: "The rain turns to snow, we must clear the driveway."
    },
    {
        src: "images/work.jpg",
        title: "Work",
        description: "Timmy watches some fun videos online after his friends leave."
    }
];

window.onload = function() {
    const container = document.getElementById('image-container');
    images.forEach((image) => {
        const imageItem = document.createElement('div');
        imageItem.className = 'image-item';

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.title;
        img.onclick = function() {
            const allDescriptions = document.querySelectorAll('.image-desc');
            allDescriptions.forEach(desc => desc.style.display = 'none');
            desc.style.display = 'block';
        };

        const desc = document.createElement('div');
        desc.className = 'image-desc';
        desc.innerText = image.description;
        desc.style.display = 'none';

        imageItem.appendChild(img);
        imageItem.appendChild(desc);
        container.appendChild(imageItem);
    });
};