// Handles rendering of venues loaded by data.js
import { venues } from './data.js';

export const venueList = document.getElementById('venue-list');

function normalizeFeasibility(feasibility) {
    const key = feasibility.trim().toLowerCase();
    if (key === 'pbq') return 'PBQ only';
    return feasibility
        .trim()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function getFeasibilityClass(feasibility) {
    return feasibility.trim().toLowerCase().replace(/\s+/g, '-');
}

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

    // Sort categories alphabetically
    const sortedCategories = Object.keys(grouped).sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: 'base' })
    );

    sortedCategories.forEach(category => {
        const venuesInCategory = grouped[category];
        venuesInCategory.sort((a, b) =>
            a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
        );

        // Category wrapper
        const categoryWrapper = document.createElement('div');
        categoryWrapper.className = 'category-wrapper';

        // Clickable header
        const displayName = `${normalizeFeasibility(category)} venues`;
        const header = document.createElement('div');
        header.className = 'category-header';
        header.innerHTML = `<h1>${displayName}</h1><span class="arrow"></span>`;

        // Content container
        const content = document.createElement('div');
        content.className = 'category-content';

        venuesInCategory.forEach(v => {
            const card = document.createElement('div');
            card.className = 'venue-card';

            const feasibilityText = normalizeFeasibility(v.feasibility);
            const feasibilityClass = getFeasibilityClass(v.feasibility);

            const linkHTML = v.link
                ? `<a href="${v.link}" target="_blank">View website</a>`
                : `<p class="no-link"><i><strong>No website available (if you've found one, 
                   <a href="https://docs.google.com/forms/d/e/1FAIpQLSeUL7smwdQPWHp1Xgl7rZnyWGPUghqX8f7n7u0uj4lg8JkvlA/viewform?usp=dialog" 
                   target="_blank">request a change</a>).</strong></i></p>`;

            const featuresHTML = v.features && v.features.length
                ? `<h3>Features:</h3>
                   <ul class="venue-features">
                       ${v.features.map(f => `<li>${f}</li>`).join('')}
                   </ul>`
                : '';

            card.innerHTML = `
                <h2>${v.name}</h2>
                <p class="${feasibilityClass}">${feasibilityText}</p>
                <div class="details">
                    <p>${v.comment}</p>
                    ${featuresHTML}
                    ${linkHTML}
                </div>
            `;
            content.appendChild(card);
        });

        // Default open/closed state
        const categoryKey = category.trim().toLowerCase();
        const isInitiallyOpen = categoryKey === 'feasible' || categoryKey === 'pbq';
        content.style.display = isInitiallyOpen ? 'block' : 'none';
        const arrow = header.querySelector('.arrow');
        arrow.textContent = isInitiallyOpen ? '▼' : '▶';

        // Append header and content
        categoryWrapper.appendChild(header);
        categoryWrapper.appendChild(content);
        venueList.appendChild(categoryWrapper);
    });
}

// Event delegation for category toggles
document.addEventListener('click', e => {
    const header = e.target.closest('.category-header');
    if (!header) return;

    const content = header.nextElementSibling;
    const arrow = header.querySelector('.arrow');
    const isHidden = content.style.display === 'none';

    content.style.display = isHidden ? 'block' : 'none';
    arrow.textContent = isHidden ? '▼' : '▶';
});

// Initialize on load
displayVenues(venues);
