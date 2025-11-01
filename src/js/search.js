// this file provides search functionality
export function initSearch(venues, displayFunction) {
    const searchInput = document.getElementById('search-input');

    // Filter as user types
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

    // Keyboard shortcuts: '/' and Cmd+K / Ctrl+K
    document.addEventListener('keydown', (e) => {
        // If user presses '/' (and not typing in an input already)
        if (e.key === '/' && document.activeElement !== searchInput) {
            e.preventDefault();
            searchInput.focus();
            searchInput.select(); // highlight existing text
        }

        // Cmd+K (Mac) or Ctrl+K (Windows/Linux)
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            searchInput.focus();
            searchInput.select();
        }
    });
}
