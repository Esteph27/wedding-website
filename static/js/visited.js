/**
 * Plays delay animations only on the user's first visit per browser session.
 * If "hasVisitedHome" is set, animations are skipped to improve UX.
 */

document.addEventListener("DOMContentLoaded", function() {
    const hasVisited = sessionStorage.getItem("hasVisitedHome");

    if (hasVisited) {
        // user has already visited this session — skip animations
        document.querySelectorAll('.fade').forEach(el => {
            el.style.opacity = "1";
            el.style.transform = "none";
            el.style.animation = "none";
        });
    } else {
        // first visit — let animations play
        sessionStorage.setItem("hasVisitedHome", "true");
    }
});