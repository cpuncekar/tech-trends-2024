document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header h1");

    if (header) {
        header.style.transition = "transform 1s ease, color 1s ease";
        header.style.transform = "scale(1.2)";
        header.style.color = "#FF5733";

        setTimeout(() => {
            header.style.transform = "scale(1)";
            header.style.color = "#fff";
        }, 1000);
    }
});