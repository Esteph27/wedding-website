document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("rsvpForm");
  const attendingSelect = document.getElementById("attending");
  const guestAttending = document.getElementById("guestAttending");
  const guestNotAttending = document.getElementById("guestNotAttending");
  const postRsvpOptions = document.getElementById("postRsvpOptions");
  const dietSelect = document.getElementById("dietry");
  const otherDietContainer = document.getElementById("otherDietContainer");
  const otherDietInput = document.getElementById("otherDiet");

  // --- handle attending logic ---
  attendingSelect.addEventListener("change", function () {
    const requiredFields = guestAttending.querySelectorAll("[required]");
  
    if (this.value === "yes") {
      guestAttending.classList.add("show-content");
      guestAttending.classList.remove("hidden-section");
      guestNotAttending.classList.remove("show-content");
      guestNotAttending.classList.add("hidden-section");
  
      // Re-enable required fields
      requiredFields.forEach((field) => field.disabled = false);
    } else if (this.value === "no") {
      guestAttending.classList.remove("show-content");
      guestAttending.classList.add("hidden-section");
      guestNotAttending.classList.remove("show-content");
      guestNotAttending.classList.add("hidden-section");
  
      // Disable required fields so the form can submit
      requiredFields.forEach((field) => field.disabled = true);
    } else {
      guestAttending.classList.remove("show-content");
      guestAttending.classList.add("hidden-section");
      guestNotAttending.classList.remove("show-content");
      guestNotAttending.classList.add("hidden-section");
  
      // Also disable required fields by default
      requiredFields.forEach((field) => field.disabled = true);
    }
  });
  
  // --- handle dietary "other" logic ---
  dietSelect.addEventListener("change", function () {
    const isOther = this.value === "other";
    otherDietContainer.classList.toggle("show-content", isOther);
    otherDietInput.required = isOther;
    otherDietInput.disabled = !isOther;

    if (!isOther) otherDietInput.value = "";
  });

  // --- handle RSVP form submission ---
  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const data = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { "Accept": "application/json" },
    });

    if (response.ok) {
      form.classList.remove("show-content");
      form.classList.add("hidden-section");

      if (attendingSelect.value === "no") {
        guestNotAttending.classList.add("show-content");
      } else {
        postRsvpOptions.classList.add("show-content");
      }
    } else {
      alert("There was a problem submitting your RSVP. Please try again. If the problem persists, please reach out to David or Esteph.");
    }
  });

  // --- handle RSVP for someone else ---
  document.getElementById("rsvpAnother").addEventListener("click", function () {
    form.reset();
    form.classList.add("show-content");
    form.classList.remove("hidden-section");

    guestAttending.classList.remove("show-content");
    otherDietContainer.classList.remove("show-content");
    postRsvpOptions.classList.remove("show-content");
    guestNotAttending.classList.remove("show-content");

    // re-enable main fields
    dietSelect.disabled = false;
    otherDietInput.disabled = true;
  });
});

