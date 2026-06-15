const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

function toggleMenu() {
    document.getElementById("navLinks")
    .classList.toggle("active");
}