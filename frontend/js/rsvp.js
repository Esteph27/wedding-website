// Handle 'Other' dietry option 
document.addEventListener("DOMContentLoaded", () => {
  const dietSelect = document.getElementById("dietry");
  const otherDietContainer = document.getElementById("otherDietContainer");

  if (dietSelect && otherDietContainer) {
    dietSelect.addEventListener("change", function () {
      if (this.value === "other") {
        otherDietContainer.classList.add("show");
        otherDietInput.required = true;
      } else {
        otherDietContainer.classList.remove("show");
        otherDietInput.required = false;
        otherDietInput.value = "";
      }
    });
  }

  // Ensure "Other" field is hidden again when form is reset (like when RSVPing another)
  const form = document.getElementById("rsvpForm");
  if (form) {
    form.addEventListener("reset", () => {
      otherDietContainer.classList.remove("show");
      otherDietInput.required = false;
      otherDietInput.value = "";
    });
  }
});


// Handle RSVP form submission
document.getElementById("rsvpForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    // Hide the form
    form.style.display = "none";

    // Show post-submission options
    document.getElementById("postRsvpOptions").style.display = "block";
  } else {
    alert("Oops! There was a problem submitting your RSVP.");
  }
});

// Handle RSVP for someone else
document.getElementById("rsvpAnother").addEventListener("click", function() {
  // Reset the form
  const form = document.getElementById("rsvpForm");
  form.reset();
  form.style.display = "block";

  // Hide post-submission options
  document.getElementById("postRsvpOptions").style.display = "none";
});


