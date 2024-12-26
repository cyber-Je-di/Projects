function toggleMenu() {
    var nav = document.getElementById("nav_bar");
    var hamburger = document.getElementById("hamburger");
    nav.classList.toggle("active");
    hamburger.classList.toggle("hidden");  // Hide the hamburger icon
}