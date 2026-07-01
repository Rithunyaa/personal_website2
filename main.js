// main.js

console.log("Website loaded");

// Simple nav safety hook (optional but useful later)
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            console.log("Navigating to:", link.href);
        });
    });
});