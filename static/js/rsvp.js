/**
 * Handle RSVP logic:
 * Shows/hides sections, handles dietary "Other" input, and submits the form without page reload.
 */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("rsvpForm");
  const attendingSelect = document.getElementById("attending");
  const guestAttending = document.getElementById("guestAttending");
  const guestNotAttending = document.getElementById("guestNotAttending");
  const postRsvpOptions = document.getElementById("postRsvpOptions");
  const dietSelect = document.getElementById("dietary");
  const otherDietContainer = document.getElementById("otherDietContainer");
  const otherDietInput = document.getElementById("otherDiet");

  // --- handle attending logic ---
  attendingSelect.addEventListener("change", function () {
    const requiredFields = guestAttending.querySelectorAll("[name='dietary'], [name='otherDiet']");

    if (this.value === "yes") {
      guestAttending.classList.remove("hidden-section");
      guestAttending.classList.add("show-content");
      // add 'required' attribute 
      requiredFields.forEach((field) => {
        field.disabled = false;
        field.required = true;
      });

    } else {
      guestAttending.classList.add("hidden-section");
      guestAttending.classList.remove("show-content");
      // remove 'required' attribute
      requiredFields.forEach((field) => {
        field.disabled = true;
        field.required = false;
      });
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

      // target section on screen
      let targetSection;

      if (attendingSelect.value === "no") {
        guestNotAttending.classList.add("show-content");
        targetSection = guestNotAttending;
      } else {
        postRsvpOptions.classList.add("show-content");
        targetSection = postRsvpOptions;
      }

      // scroll to displayed section into view
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
      targetSection.scrollIntoView({ behavior: "smooth", block: "center" });
      
    } else {
      alert("There was a problem submitting your RSVP. Please try again. If the problem persists, please reach out to David or Esteph.");
    }
  });

  // --- handle RSVP for someone else ---
  document.querySelectorAll(".rsvp-another").forEach(link => {
    link.addEventListener("click", () => {
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

      // scroll form into view
      form.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
});

