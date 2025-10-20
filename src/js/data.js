// this file parses the data from venues.json

export let venues = [];

// Fetch venues from JSON (keep feasibility exactly as in JSON)
export async function fetchVenues() {
    try {
        const response = await fetch('venues.json');
        const data = await response.json();
        venues = data; // keep feasibility unchanged
        return venues;
    } catch (err) {
        console.error('Failed to load venues:', err);
        return [];
    }
}
