export function initSearch(venues, displayFunction) {
    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();

        const filteredVenues = venues.filter(venue => {
            return (
                venue.name.toLowerCase().includes(query) ||
                venue.comment.toLowerCase().includes(query)
            );
        });

        displayFunction(filteredVenues);
    });
}
