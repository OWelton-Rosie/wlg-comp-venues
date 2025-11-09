// this file does the rendering of venues which have been loaded by data.js and deals with UI interactions


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

    const grouped = list.reduce((acc, v) => {
        const key = v.feasibility.trim().toLowerCase();
        if (!acc[key]) acc[key] = [];
        acc[key].push(v);
        return acc;
    }, {});

    const sortedCategories = Object.keys(grouped).sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: 'base' })
    );

    sortedCategories.forEach(category => {
        const venuesInCategory = grouped[category];
        venuesInCategory.sort((a, b) =>
            a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
        );

        const categoryDiv = document.createElement('div');

        // By default, collapse unless feasible or pbq
        const defaultExpanded = category === 'feasible' || category === 'pbq';
        categoryDiv.className = 'category';

        const header = document.createElement('div');
        header.className = 'category-header ' + (defaultExpanded ? 'expanded' : 'collapsed');
        header.innerHTML = `<h1>${normalizeFeasibility(category)} venues</h1><span class="arrow"></span>`;

        const content = document.createElement('div');
        content.className = 'category-content';
        content.style.display = defaultExpanded ? 'block' : 'none';

        venuesInCategory.forEach(v => {
            const card = document.createElement('div');
            card.className = 'venue-card';

            const feasibilityText = normalizeFeasibility(v.feasibility);
            const feasibilityClass = getFeasibilityClass(v.feasibility);

            const linkHTML = v.link
                ? `<a href="${v.link}" target="_blank">View website</a>`
                : `<p class="no-link"><i><strong>No website available (if you've found one, <a href="https://docs.google.com/forms/d/e/1FAIpQLSeUL7smwdQPWHp1Xgl7rZnyWGPUghqX8f7n7u0uj4lg8JkvlA/viewform?usp=dialog" target="_blank">request a change</a>).</strong></i></p>`;

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

        categoryDiv.appendChild(header);
        categoryDiv.appendChild(content);
        venueList.appendChild(categoryDiv);
    });

    // Add toggle functionality
    document.querySelectorAll('.category-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isCollapsed = content.style.display === 'none';
            content.style.display = isCollapsed ? 'block' : 'none';
            header.classList.toggle('collapsed', !isCollapsed);
            header.classList.toggle('expanded', isCollapsed);
        });
    });
}

// Initialize display on page load
displayVenues(venues);
