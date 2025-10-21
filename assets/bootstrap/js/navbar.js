document.addEventListener('DOMContentLoaded', function () {
    const navbarCollapse = document.querySelector('#navcol-1');
    const navbarToggler = document.querySelector('.navbar-toggler');

    // Initialize Bootstrap Collapse instance
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false // Don't toggle automatically
    });

    // Toggle collapse on navbar-toggler click
    navbarToggler.addEventListener('click', function () {
        bsCollapse.toggle(); // Use toggle() to handle open/close automatically
    });

    // Optional: Close collapse when clicking outside the navbar
    document.addEventListener('click', function (event) {
        const isClickInside = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);

        if (!isClickInside && navbarCollapse.classList.contains('show')) {
            bsCollapse.hide(); // Close the navbar if clicking outside
        }
    });
});