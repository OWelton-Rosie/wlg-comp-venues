// data.js
export let venues = [];

// Helper function to capitalize first letter of each word
export function capitalize(str) {
    return str.replace(/\b\w/g, c => c.toUpperCase());
}

// Fetch venues from JSON and normalize feasibility
export async function fetchVenues() {
    try {
        const response = await fetch('venues.json');
        const data = await response.json();
        venues = data.map(v => ({
            ...v,
            feasibility: capitalize(v.feasibility)
        }));
        return venues;
    } catch (err) {
        console.error('Failed to load venues:', err);
        return [];
    }
}
