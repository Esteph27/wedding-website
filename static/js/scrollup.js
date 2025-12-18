/**
 * Smoothly scrolls back to the top of the page when link is clicked.
 */

const scrollUpLink = document.getElementById('scroll-up-link');

scrollUpLink.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
