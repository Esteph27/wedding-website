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
    if (this.value === "yes") {
      guestAttending.classList.add("show");
      guestAttending.classList.remove("hidden-section");
      guestNotAttending.classList.remove("show");

      // enable and require dietary field only when attending
      dietSelect.disabled = false;
      dietSelect.required = true;
    } else if (this.value === "no") {
      guestAttending.classList.remove("show");
      guestNotAttending.classList.remove("show");

      // disable dietary fields if not attending
      dietSelect.disabled = true;
      dietSelect.required = false;
      otherDietInput.disabled = true;
      otherDietInput.required = false;
    }
  });

  // --- handle dietary "other" logic ---
  dietSelect.addEventListener("change", function () {
    const isOther = this.value === "other";
    otherDietContainer.classList.toggle("show", isOther);
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
      form.classList.remove("show");
      form.classList.add("hidden-section");

      if (attendingSelect.value === "no") {
        guestNotAttending.classList.add("show");
      } else {
        postRsvpOptions.classList.add("show");
      }
    } else {
      alert("There was a problem submitting your RSVP. Please try again. If the problem persists, please reach out to David or Esteph.");
    }
  });

  // --- handle RSVP for someone else ---
  document.getElementById("rsvpAnother").addEventListener("click", function () {
    form.reset();
    form.classList.add("show");
    form.classList.remove("hidden-section");

    guestAttending.classList.remove("show");
    otherDietContainer.classList.remove("show");
    postRsvpOptions.classList.remove("show");
    guestNotAttending.classList.remove("show");

    // re-enable main fields
    dietSelect.disabled = false;
    otherDietInput.disabled = true;
  });
});

