// ui.js
export const venueList = document.getElementById('venue-list');

// Render venues in the DOM
export function displayVenues(list) {
    venueList.innerHTML = '';

    list.forEach(v => {
        const card = document.createElement('div');
        card.className = 'venue-card';

        const feasibilityClass = v.feasibility.toLowerCase().replace(' ', '-');

        // If there is a link, show it; otherwise show logical text
        const linkHTML = v.link
            ? `<a href="${v.link}" target="_blank">View website</a>`
            : `<p style="color:#888; font-style:italic;">No website available</p>`;

        card.innerHTML = `
            <h2>${v.name}</h2>
            <p class="${feasibilityClass}">${v.feasibility}</p>
            <p>${v.comment}</p>
            ${linkHTML}
        `;

        venueList.appendChild(card);
    });
}
