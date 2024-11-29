const toggleBtn = document.getElementById("mode-toggle");
const body = document.body;
const navLinks = document.querySelectorAll(".navlist a");
const icon = toggleBtn.querySelector("i");
const name = document.getElementById("name");
const menuToggle = document.getElementById("menu-toggle");
const navlist = document.getElementById("navlist");

// Dark Mode Toggle
toggleBtn.addEventListener("click", function() {
    body.classList.toggle("dark-mode");
    navLinks.forEach(link => link.classList.toggle("dark-mode"));
    name.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        icon.classList.replace("fa-sun", "fa-moon");
    } else {
        icon.classList.replace("fa-moon", "fa-sun");
    }
});

// Mobile Menu Toggle
menuToggle.addEventListener("click", function() {
    navlist.classList.toggle("active");
});
