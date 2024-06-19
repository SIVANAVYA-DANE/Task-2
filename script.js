document.addEventListener("DOMContentLoaded", function() {
    console.log("Rohit Sharma Tribute Page Loaded");
    
    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Modal functionality
function openModal(element) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = "block";
    modalImg.src = element.src;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}
