document.addEventListener("DOMContentLoaded", function() {
    var carousel = document.querySelector('.story__carousel');
    var navItems = document.querySelectorAll('.story__carousel-nav-item');
    var isDown = false;
    var startX;
    var scrollLeft;

    navItems.forEach((navItem, index) => {
        navItem.addEventListener('click', function() {
            // Scroll to the slide
            var scrollPos = carousel.scrollWidth / navItems.length * index;
            carousel.scrollLeft = scrollPos;

            // Remove active class from all nav items
            navItems.forEach((navItem) => {
                navItem.classList.remove('active');
            });

            // Add active class to the clicked nav item
            this.classList.add('active');
        });
    });

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        carousel.scrollLeft = scrollLeft - walk;
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    const navIcon = document.getElementById('nav-icon1');
    const menuNav = document.querySelector('.menu__nav');

    navIcon.addEventListener('click', (e) => {
        // Prevent the click event from bubbling up to the document
        e.stopPropagation();

        menuNav.classList.toggle('open');
        navIcon.classList.toggle('open');
    });

    menuNav.addEventListener('click', (e) => {
        // Prevent the click event from bubbling up to the document
        e.stopPropagation();
    });

    // Close the sidebar when you click anywhere else on the page
    document.addEventListener('click', (e) => {
        if (menuNav.classList.contains('open')) {
            menuNav.classList.remove('open');
            navIcon.classList.remove('open');
        }
    });
});


$(document).ready(function(){
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 50, 'swing');
    });
});