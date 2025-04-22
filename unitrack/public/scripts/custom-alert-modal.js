document.addEventListener("DOMContentLoaded", function () {
    function createAlertModal(title, description) {
        return `
            <div id="alertModal" class="alert-modal">
                <div class="alert-modal-popup">
                    <button class="close-btn close-alert-modal">
                        <i class="fa-solid fa-xmark"></i>
                    </button>

                    <div class="alert-modal-content">
                        <h2 class="alert-title">${title}</h2>
                        <p class="alert-description">${description}</p>
                    </div>

                    <button class="alert-register-btn ok-btn">OK</button>
                </div>
            </div>
        `;
    }

    function openAlertModal(title = "Alert", description = "Something happened.") {
        if (!document.getElementById("alertModal")) {
            document.body.insertAdjacentHTML("beforeend", createAlertModal(title, description));
            setupAlertModalEvents();
        }
        document.querySelector("#alertModal").style.display = "flex";
    }

    function closeAlertModal() {
        const modal = document.querySelector("#alertModal");
        if (modal) {
            modal.style.opacity = "0";
            setTimeout(() => modal.remove(), 300);
        }
    }

    function setupAlertModalEvents() {
        document.querySelectorAll(".close-alert-modal, .ok-btn").forEach(button => {
            button.addEventListener("click", closeAlertModal);
        });

        document.querySelector("#alertModal").addEventListener("click", function (event) {
            if (event.target === this) {
                closeAlertModal();
            }
        });
    }

    // Expose globally
    window.openAlertModal = openAlertModal;
});
