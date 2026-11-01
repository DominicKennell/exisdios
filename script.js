
/* =====================================
   EXISDIOS
   Website interactions
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Mobile navigation
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".site-nav");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            const isOpen = navigation.classList.toggle("is-open");

            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.textContent = isOpen ? "Close" : "Menu";
        });

        // Close the menu after selecting a page
        navigation.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navigation.classList.remove("is-open");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.textContent = "Menu";
            });
        });
    }

    // Automatically update the copyright year
    const yearElement = document.querySelector("#copyright-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
