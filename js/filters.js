// filters.js
import { displayVenues } from './ui.js';
import { venues } from './data.js';

export function initFilters() {
    const filterRadios = document.querySelectorAll('.filters input[type="radio"]');

    filterRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            const filter = radio.value.toLowerCase();

            if (filter === 'all') displayVenues(venues);
            else displayVenues(venues.filter(v => v.feasibility.toLowerCase() === filter));
        });
    });
}
