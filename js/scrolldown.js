
const rsvpButton = document.getElementById('rsvpLink');
const rsvpBox = document.getElementById('rsvpBox');

rsvpButton.addEventListener('click', () => {
    rsvpBox.style.display = 'block'; // show the box
    rsvpBox.scrollIntoView({ behavior: 'smooth' }); // smooth scroll
});
