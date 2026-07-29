const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const sellerForm = document.querySelector("#seller-form");
const formStatus = document.querySelector("#form-status");

if (sellerForm && formStatus) {
  sellerForm.addEventListener("submit", (event) => {
    if (!sellerForm.checkValidity()) {
      formStatus.textContent = "Please complete the required fields before submitting.";
      return;
    }

    if (sellerForm.action.includes("YOUR_FORM_ID")) {
      event.preventDefault();
      formStatus.textContent = "The form is ready, but the Formspree form ID still needs to be added before submissions can be sent.";
      return;
    }

    formStatus.textContent = "Submitting your inquiry...";
  });
}
