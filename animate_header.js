document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header h1");

    if (header) {
        header.style.transition = "transform 2s ease, color 2s ease";
        header.style.transform = "scale(1.5)";
        header.style.color = "#FF5733";

        setTimeout(() => {
            header.style.transform = "scale(1)";
            header.style.color = "#333"; // Changed color to #333 for visibility
        }, 3000); // Animation lasts for 3 seconds before settling

        // Ensure the text stays visible
        header.style.opacity = "1";

        // Apply the final color explicitly after the animation
        setTimeout(() => {
            header.style.color = "#333";
        }, 3500);
    }
});
