// script.js
// Navigation handling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        
        // Hide all main sections
        document.querySelectorAll('main').forEach(section => {
            section.style.display = 'none';
        });
        
        // Show target section
        document.getElementById(targetId).style.display = 'block';
    });
});

// Show home page by default
document.getElementById('home').style.display = 'block';