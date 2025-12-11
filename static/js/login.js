/**
 * AJAX script to handle login and prevent page reload on incorrect password
 */

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const errorMessage = document.getElementById("error");

    form.addEventListener("submit", async function (e) {
        e.preventDefault(); // stop page reload every time form is submitted

        const formData = new FormData(form);
        const response = await fetch("/", {
            method: "POST",
            body: formData
        });
        const result = await response.json();

        if (result.success) {
            // correct password redirect to home
            window.location.href = "/home";
        } else {
            // wrong password show error message 
            errorMessage.classList.add("error-visible");
            
            // add `shake` animation 
            errorMessage.classList.add("shake");
            
            // remove `shake` class so it can trigger next time
            setTimeout(() => {
                errorMessage.classList.remove("shake");
            }, 500); // match duration of shake animation
        }
    });
});
