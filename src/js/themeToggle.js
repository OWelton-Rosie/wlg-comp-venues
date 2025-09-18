// themeToggle.js

export function initThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");

    // Load saved theme (default = dark)
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.body.classList.add(`${savedTheme}-mode`);
    toggleBtn.textContent = savedTheme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode";

    toggleBtn.addEventListener("click", () => {
        if (document.body.classList.contains("light-mode")) {
            document.body.classList.replace("light-mode", "dark-mode");
            toggleBtn.textContent = "☀️ Light Mode";
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.replace("dark-mode", "light-mode");
            toggleBtn.textContent = "🌙 Dark Mode";
            localStorage.setItem("theme", "light");
        }
    });
}
