import { venues } from './data.js';

export const venueList = document.getElementById('venue-list');

// Normalize feasibility for display
function normalizeFeasibility(feasibility) {
    const key = feasibility.trim().toLowerCase();
    if (key === 'pbq') return 'PBQ only'; // only special case
    // Title-case everything else
    return feasibility
        .trim()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Generate a safe CSS class from feasibility
function getFeasibilityClass(feasibility) {
    return feasibility.trim().toLowerCase().replace(/\s+/g, '-');
}

// Render venues in the DOM
export function displayVenues(list) {
    venueList.innerHTML = '';

    if (!list.length) {
        venueList.innerHTML = '<p>No venues found.</p>';
        return;
    }

    // Group venues by feasibility
    const grouped = list.reduce((acc, v) => {
        const key = v.feasibility.trim().toLowerCase();
        if (!acc[key]) acc[key] = [];
        acc[key].push(v);
        return acc;
    }, {});

    // Render each group
    Object.entries(grouped).forEach(([category, venues]) => {
        const heading = document.createElement('h1');
        heading.textContent = normalizeFeasibility(category);
        venueList.appendChild(heading);

        venues.forEach(v => {
            const card = document.createElement('div');
            card.className = 'venue-card';

            const feasibilityText = normalizeFeasibility(v.feasibility);
            const feasibilityClass = getFeasibilityClass(v.feasibility);

            const linkHTML = v.link
                ? `<a href="${v.link}" target="_blank">View website</a>`
                : `<p class="no-link">No website available (if you've found one, <a href="https://docs.google.com/forms/d/e/1FAIpQLSeUL7smwdQPWHp1Xgl7rZnyWGPUghqX8f7n7u0uj4lg8JkvlA/viewform?usp=dialog" target="_blank">request a change</a>)</p>`;

            card.innerHTML = `
                <h2>${v.name}</h2>
                <p class="${feasibilityClass}">${feasibilityText}</p>
                <p>${v.comment}</p>
                ${linkHTML}
            `;

            venueList.appendChild(card);
        });
    });
}
