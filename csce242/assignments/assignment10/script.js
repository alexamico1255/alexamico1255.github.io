// Associative array containing image paths and descriptions
const images = [
    {
        src: "images/longboarding.png",
        title: "Longboarding",
        description: "longboarding through the neighborhood."
    },
    {
        src: "images/paintballing.png",
        title: "Paintballing",
        description: "Winning an awesome paintball match."
    },
    {
        src: "images/scubadiving.png",
        title: "Scuba Diving",
        description: "Exploring underwater by scuba diving."
    },
    {
        src: "images/biking.png",
        title: "Biking",
        description: "Riding a bike through the mountains."
    },
    {
        src: "images/skiing.png",
        title: "Skiing",
        description: "Skiing down the snowy slopes."
    },
    {
        src: "images/fourwheeling.png",
        title: "Four Wheeling",
        description: "Riding my property on a four-wheeler."
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