function toggleModal(modal) {
  if (modal && modal.classList.contains("p-modal")) {
    if (modal.style.display === "none") {
      modal.style.display = "flex";
    } else {
      modal.style.display = "none";
    }
  }
}

function handleModals() {
  document.addEventListener("click", function (e) {
    var targetControls = e.target.getAttribute("aria-controls");
    if (targetControls) {
      toggleModal(document.getElementById(targetControls));
    }
  });
}

handleModals();
