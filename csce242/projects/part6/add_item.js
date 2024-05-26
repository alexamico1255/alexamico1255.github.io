document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event triggered"); // Check if the event listener is triggered
    
    const form = document.getElementById("data-entry-form");
    const successMessage = document.getElementById("success-message");
    const itemList = document.getElementById("items-list");

    form.addEventListener("submit", function (event) {
        console.log("Form submitted"); // Check if the form submission event is triggered
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const itemName = document.getElementById("itemName").value;
        const itemDescription = document.getElementById("itemDescription").value;

        // Validate form inputs (You can add more validation as needed)
        if (!itemName || !itemDescription) {
            alert("Please fill out all fields");
            return;
        }

        // Create new item element
        const newItem = document.createElement("li");
        newItem.textContent = `Name: ${itemName} - PPG: ${itemDescription}`;

        // Append item to the list
        itemList.appendChild(newItem);

        // Show success message
        console.log("Showing success message"); // Check if this log is triggered
        successMessage.style.display = "block"; // Try setting display directly
        setTimeout(function () {
            successMessage.style.display = "none"; // Hide the message after 2 seconds
            console.log("Hiding success message"); // Check if this log is triggered
        }, 2000);

        // Reset form fields
        form.reset();
    });
});
