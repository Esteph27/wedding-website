// TODO: currenlty not secure as exposed in github - handle with python
const correctPassword = "pisco";  

// if (localStorage.getItem("authenticated") === "true") {
//     window.location.href = "home.html";
// }

function checkPassword() {
    const input = document.getElementById("passwordInput").value.trim();
    const normalizedInput = input.toLowerCase();  
    const normalizedCorrect = correctPassword.toLowerCase();

    if (normalizedInput === normalizedCorrect) {
        localStorage.setItem("authenticated", "true");
        window.location.href = "/home";
    } else {
        document.getElementById("error").style.display = "block";
    }
}
