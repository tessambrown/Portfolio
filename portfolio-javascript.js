/* js/main.js */
document.addEventListener('DOMContentLoaded', () => {
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    function navigateToPage(pageId) {
        // Update active nav link
        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.page === pageId);
        });
        
        // Show selected page
        pages.forEach(page => {
            page.classList.toggle('active', page.id === pageId);
        });

        // Scroll to top
        window.scrollTo(0, 0);
    }

    // Add click event listeners to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateToPage(link.dataset.page);
        });
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', (e) => {
        const pageId = e.state?.page || 'home';
        navigateToPage(pageId);
    });

    // Update browser history when navigating
    function updateHistory(pageId) {
        const url = `${window.location.pathname}#${pageId}`;
        history.pushState({ page: pageId }, '', url);
    }
});