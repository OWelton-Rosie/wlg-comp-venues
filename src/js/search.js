// this file provides search functionality
export function initSearch(venues, displayFunction) {
    const searchInput = document.getElementById('search-input');

    // Detect if user is on macOS to show correct shortcut
    const isMac = navigator.platform.toUpperCase().includes('MAC');
    searchInput.placeholder = `Search venues (use '/' or ${isMac ? 'Cmd' : 'Ctrl'}+K)`;

    // Filter venues as user types
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();

        const filteredVenues = venues.filter(venue => {
            return (
                venue.name.toLowerCase().includes(query) ||
                venue.comment.toLowerCase().includes(query)
            );
        });

        // Pass `true` if search is active to expand matching categories
        displayFunction(filteredVenues, query.length > 0);
    });

    // Keyboard shortcuts: '/' and Cmd+K / Ctrl+K
    document.addEventListener('keydown', (e) => {
        // Focus search bar when '/' is pressed (unless already typing)
        if (e.key === '/' && document.activeElement !== searchInput) {
            e.preventDefault();
            searchInput.focus();
            searchInput.select(); // highlight existing text
        }

        // Focus search bar with Cmd+K (Mac) or Ctrl+K (Windows/Linux)
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            searchInput.focus();
            searchInput.select();
        }
    });
}
