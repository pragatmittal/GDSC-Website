document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const navbarLinks = document.querySelector('.navbar-links');

    menuButton.addEventListener('click', function() {
        navbarLinks.classList.toggle('active');
    });

    navbarLinks.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            navbarLinks.classList.remove('active');
        });
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.navbar')) {
            navbarLinks.classList.remove('active');
        }
    });

    const dropdownBtn = document.querySelector('.dropdown-btn');
    dropdownBtn.addEventListener('click', function() {
        this.querySelector('.options').classList.toggle('active');
    });

    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Add logic to load more past events
        });
    }

    const contactUsBtn = document.getElementById('contact-us-btn');
    if (contactUsBtn) {
        contactUsBtn.addEventListener('click', function() {
            // Add logic to show contact form or redirect to contact page
        });
    }

    const eventSlider = document.querySelector('.event-slider');
    if (eventSlider) {
        let isDown = false;
        let startX;
        let scrollLeft;

        eventSlider.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - eventSlider.offsetLeft;
            scrollLeft = eventSlider.scrollLeft;
        });

        eventSlider.addEventListener('mouseleave', () => { isDown = false; });
        eventSlider.addEventListener('mouseup', () => { isDown = false; });

        eventSlider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - eventSlider.offsetLeft;
            const walk = (x - startX) * 3;
            eventSlider.scrollLeft = scrollLeft - walk;
        });
    }
});