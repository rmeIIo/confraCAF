document.addEventListener("DOMContentLoaded", function () {
  const envelopeContainer = document.getElementById("envelope-container");
  const envelopeFlap = document.getElementById("envelope-flap");
  const letterContainer = document.getElementById("letter-container");

  setTimeout(() => {
    envelopeFlap.classList.add("opening");

    setTimeout(() => {
      letterContainer.style.display = "flex";
    }, 1000);
  }, 1500);
});
