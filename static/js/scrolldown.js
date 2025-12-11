/**
 * Smoothly scrolls to target element when link is clicked.
 */

const link = document.getElementById('scroll-down-link');
const target = document.getElementById('target');

link.addEventListener('click', () => {
    target.style.display = 'block'; // show the box
    target.scrollIntoView({ behavior: 'smooth' }); // smooth scroll
});
