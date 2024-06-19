/* script.js */
// Example of a simple alert for form submission
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
    form.reset();
});
