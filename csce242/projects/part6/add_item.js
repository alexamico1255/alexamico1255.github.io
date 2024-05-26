document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("data-entry-form");
    const successMessage = document.getElementById("success-message");
    const itemList = document.getElementById("items-list");

    form.addEventListener("submit", function (event) {
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
        successMessage.classList.remove("hidden");
        setTimeout(function () {
            successMessage.classList.add("hidden");
        }, 2000);

        // Reset form fields
        form.reset();
    });
});
