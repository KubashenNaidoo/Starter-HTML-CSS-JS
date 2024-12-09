document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".navbar a");

    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault(); // Prevent default jump behavior

            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            // Calculate offset position to scroll to
            const offset = 70; // Height of the navbar
            const elementPosition = targetElement.offsetTop; // Element's position relative to the document
            const offsetPosition = elementPosition - offset;

            // Scroll to the calculated position
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });
});

// script.js
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            header.classList.add("navbar-transparent");
        } else {
            header.classList.remove("navbar-transparent");
        }
    });
});
