// Navigation item selection
const list = document.querySelectorAll(".navigation li");

function activeLink(e) {
    // Skip if it's the brand header item
    if (this.dataset.brand === "true") return;

    list.forEach(item => {
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

list.forEach(item => {
    // Highlight on hover
    item.addEventListener("mouseover", activeLink);

    // Also support click selection
    item.addEventListener("click", function (e) {
        if (this.dataset.brand === "true") return;
        activeLink.call(this, e);
    });
});

// Menu Toggle (collapse / expand sidebar)
const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
const main = document.querySelector(".main");

if (toggle && navigation && main) {
    toggle.onclick = function () {
        navigation.classList.toggle("active");
        main.classList.toggle("active");
    };
}

// Dynamically calculate and update occupancy percentage & progress bar
function updateOccupancy() {
    const occupiedEl = document.querySelector(".occupancy-item .number.blue");
    const totalEl = document.querySelector(".occupancy-item .number.orange");
    const percentEl = document.querySelector(".occupancy-percent");
    const fillBar = document.querySelector(".occupancy-fill");

    if (occupiedEl && totalEl && percentEl && fillBar) {
        const occupied = parseFloat(occupiedEl.textContent.trim()) || 0;
        const total = parseFloat(totalEl.textContent.trim()) || 1;
        const percent = total > 0 ? ((occupied / total) * 100).toFixed(1) : "0.0";
        percentEl.textContent = `${percent}%`;
        fillBar.style.width = `${percent}%`;
    }
}

// Calculate on load
document.addEventListener("DOMContentLoaded", () => {
    updateOccupancy();
});