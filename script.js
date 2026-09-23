// Portfolio interactions

document.addEventListener("DOMContentLoaded", () => {

    // Update footer year automatically
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});
