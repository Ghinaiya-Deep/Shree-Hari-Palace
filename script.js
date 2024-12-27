document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Your message has been sent!'); // Display confirmation message
    this.reset(); // Optionally reset the form fields
});

function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
}

function openModal(imageSrc) {
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('imageModal').style.display = "block";
}

function closeModal() {
    document.getElementById('imageModal').style.display = "none";
}