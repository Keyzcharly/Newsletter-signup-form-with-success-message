document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm'); // Replace 'myForm' with your form's ID
    const successModal = document.getElementById('successModal');
    const closeButton = document.querySelector('.close-button');
    const successMessageElement = document.getElementById('successMessage');
    const inputValue = document.querySelector('input[type=email]');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Simulate form submission (replace with actual AJAX call)
        setTimeout(() => {
            // Assuming successful submission
            let inputEmail = inputValue.value;
            successMessageElement.innerHTML = `A confirmation email has been sent to <strong>${inputEmail}</strong> Please open it and click the button inside to confirm your subscription.`; // Customize message
            successModal.style.display = 'block'; // Show the modal
        }, 1000); // Simulate network delay
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', function () {
        successModal.style.display = 'none';
    });

    // Close the modal when clicking outside of the modal content
    window.addEventListener('click', function (event) {
        if (event.target === successModal) {
            successModal.style.display = 'none';
        }
    });
});