// this file provides filtering functionality for venues based on feasibility
import { displayVenues } from './ui.js';
import { venues } from './data.js';

export function initFilters() {
    const filterRadios = document.querySelectorAll('.filters input[type="radio"]');

    filterRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            const filter = radio.value.toLowerCase();

            // Highlight active label
            filterRadios.forEach(r => r.parentElement.classList.remove('active'));
            radio.parentElement.classList.add('active');

            // Filter venues using exact JSON feasibility
            if (filter === 'all') {
                displayVenues(venues);
            } else {
                displayVenues(
                    venues.filter(v => v.feasibility.toLowerCase() === filter)
                );
            }
        });
    });

    // Initialize active state for checked radio
    const checkedRadio = document.querySelector('.filters input[type="radio"]:checked');
    if (checkedRadio) checkedRadio.parentElement.classList.add('active');
}
