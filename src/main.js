 document.addEventListener('DOMContentLoaded', function() {
        // Select all anchor tags with the 'nav-link' class
        const navLinks = document.querySelectorAll('a.nav-link');

        // Loop through each selected anchor tag
        navLinks.forEach(function(link) {
            // Add a click event listener to each link
            link.addEventListener('click', function(event) {
                // Prevent the browser's default navigation behavior
                event.preventDefault();

                // Get the URL from the 'href' attribute of the clicked link
                const targetUrl = this.getAttribute('href');

                // Check if a target URL exists and is not just '#'
                if (targetUrl && targetUrl !== '#') {
                    // Perform the navigation using JavaScript
                    window.location.href = targetUrl;
                }
                // If href is '#' or empty, it won't navigate, which is the desired behavior for placeholder links.
            });
        });
    });