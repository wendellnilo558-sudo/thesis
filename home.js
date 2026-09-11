// Interactive connections for CCT Hotel Home page
document.addEventListener("DOMContentLoaded", () => {
    const openLoginBtn = document.getElementById("openLoginBtn");
    const closeLoginBtn = document.getElementById("closeLogin");
    const loginPopup = document.getElementById("loginPopup");
    const popupOverlay = document.getElementById("popupOverlay");
    const loginForm = document.getElementById("loginForm");
    const loginSubmitBtn = document.getElementById("loginSubmitBtn");

    // Open Login Popup
    if (openLoginBtn && loginPopup && popupOverlay) {
        openLoginBtn.addEventListener("click", (e) => {
            e.preventDefault();
            loginPopup.classList.add("active");
            popupOverlay.classList.add("active");
        });
    }

    // Close Login Popup
    function closePopup() {
        if (loginPopup) loginPopup.classList.remove("active");
        if (popupOverlay) popupOverlay.classList.remove("active");
    }

    if (closeLoginBtn) closeLoginBtn.addEventListener("click", closePopup);
    if (popupOverlay) popupOverlay.addEventListener("click", closePopup);

    // Escape key closes popup
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closePopup();
    });

    // Handle Login submission -> redirect to Dashboard (index.html)
    function handleLogin(e) {
        if (e) e.preventDefault();
        // Give quick visual feedback then redirect to Dashboard
        if (loginSubmitBtn) {
            loginSubmitBtn.textContent = "Signing In...";
            loginSubmitBtn.disabled = true;
        }
        setTimeout(() => {
            window.location.href = "index.html";
        }, 400);
    }

    if (loginForm) loginForm.addEventListener("submit", handleLogin);
    if (loginSubmitBtn) loginSubmitBtn.addEventListener("click", handleLogin);

    // Room cards "Book Now" buttons
    const roomButtons = document.querySelectorAll(".room-btn");
    roomButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const roomName = btn.closest(".room-card")?.querySelector("h3")?.textContent || "Room";
            // Pre-fill or open modal or direct to bookings in dashboard
            alert(`Selected: ${roomName}\nRedirecting you to the management & reservation dashboard...`);
            window.location.href = "index.html";
        });
    });
});
