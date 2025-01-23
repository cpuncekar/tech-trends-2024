document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header h1");

    if (header) {
        header.style.transition = "transform 2s ease, color 2s ease";
        header.style.transform = "scale(1.5)";
        header.style.color = "#FF5733";

        setTimeout(() => {
            header.style.transform = "scale(1)";
            header.style.color = "#fff";
        }, 3000); // Animation lasts for 3 seconds before settling
    }
});
