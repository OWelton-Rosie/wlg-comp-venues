export const venueList = document.getElementById('venue-list');

// Render venues in the DOM
export function displayVenues(list) {
    venueList.innerHTML = '';

    // Group venues by feasibility (or category)
    const grouped = list.reduce((acc, v) => {
        const key = v.feasibility.toLowerCase();
        if (!acc[key]) acc[key] = [];
        acc[key].push(v);
        return acc;
    }, {});

    // Render each group with a heading
    for (const [category, venues] of Object.entries(grouped)) {
        // Create a heading for this category
        const heading = document.createElement('h1');
        heading.textContent = category === 'pbq' ? 'PBQ Only' : category
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        venueList.appendChild(heading);

        // Render cards for this category
        venues.forEach(v => {
            const card = document.createElement('div');
            card.className = 'venue-card';

            const feasibilityText = v.feasibility.toLowerCase() === 'pbq'
                ? 'PBQ Only'
                : v.feasibility
                    .split(' ')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');

            const feasibilityClass = v.feasibility.toLowerCase().replace(' ', '-');

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
    }
}
