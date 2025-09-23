// themeToggle.js

export function initThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");

    // Detect system preference
    const systemPrefersDark = () => window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Get saved theme, or null if none
    let savedTheme = localStorage.getItem("theme");

    // Determine current theme (saved > system)
    let currentTheme = savedTheme || (systemPrefersDark() ? "dark" : "light");

    // Function to apply a theme
    function applyTheme(theme) {
        document.body.classList.remove("light-mode", "dark-mode");
        document.body.classList.add(`${theme}-mode`);
        toggleBtn.textContent = theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode";
    }

    // Apply initial theme
    applyTheme(currentTheme);

    // Toggle button logic
    toggleBtn.addEventListener("click", () => {
        currentTheme = currentTheme === "light" ? "dark" : "light";
        applyTheme(currentTheme);
        localStorage.setItem("theme", currentTheme);
    });

    // Listen for system theme changes
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
        if (!savedTheme) { // Only follow system if no manual override
            currentTheme = e.matches ? "dark" : "light";
            applyTheme(currentTheme);
        }
    });

    // Optional: allow dynamic updates even if saved, but prioritize saved theme
    // If you want system to always override, replace the if-check above with:
    // currentTheme = e.matches ? "dark" : "light";
};
