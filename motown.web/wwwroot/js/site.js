// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Dark mode toggle: applies the saved or system-preferred theme and lets the
// user switch between light and dark modes.
(function () {
    "use strict";

    var STORAGE_KEY = "motown-web-theme";

    function systemPrefersDark() {
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    function getStoredTheme() {
        return localStorage.getItem(STORAGE_KEY);
    }

    function getActiveTheme() {
        return document.documentElement.getAttribute("data-bs-theme")
            || (systemPrefersDark() ? "dark" : "light");
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute("data-bs-theme", theme);
        updateToggleIcon(theme);
    }

    function updateToggleIcon(theme) {
        var icon = document.getElementById("theme-toggle-icon");
        if (icon) {
            // Show the icon for the mode the user can switch to.
            icon.textContent = theme === "dark" ? "☀️" : "🌙";
        }
        var toggle = document.getElementById("theme-toggle");
        if (toggle) {
            toggle.setAttribute("aria-label",
                theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        updateToggleIcon(getActiveTheme());

        var toggle = document.getElementById("theme-toggle");
        if (toggle) {
            toggle.addEventListener("click", function () {
                var next = getActiveTheme() === "dark" ? "light" : "dark";
                localStorage.setItem(STORAGE_KEY, next);
                applyTheme(next);
            });
        }

        // Follow the OS preference when the user has not made an explicit choice.
        if (window.matchMedia) {
            window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
                if (!getStoredTheme()) {
                    applyTheme(e.matches ? "dark" : "light");
                }
            });
        }
    });
})();
