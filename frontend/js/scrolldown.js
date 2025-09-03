
const link = document.getElementById('link');
const target = document.getElementById('target');

link.addEventListener('click', () => {
    target.style.display = 'block'; // show the box
    target.scrollIntoView({ behavior: 'smooth' }); // smooth scroll
});
