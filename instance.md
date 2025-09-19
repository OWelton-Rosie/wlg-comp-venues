# Project Setup Guide  
*(Work in progress)*  

## Overview  
This project manages venue data for an app. All information (venue name, feasibility, comments, and links) is stored in a single JSON file. You generally won’t need to modify JavaScript or CSS unless you want to customize functionality or appearance.  

## Specs  
The app is built with:  
- **HTML** for markup  
- **CSS** for styling  
- **JavaScript** for functionality  
- **JSON** for data storage  

Why JSON?  
- Fast — the app loads data instantly  
- Simple — easy to add or update venues  

Data is stored in `src/venues.json`.  

## Creating Your Own Instance  
Clone and navigate to the project:  
```
git clone https://github.com/OWelton-Rosie/wlg-comp-venues  
cd wlg-comp-venues
```

Run the app locally with a simple Python server:
```
python3 -m http.server
```
Then open http://localhost:8000/src in your browser.

Note: Opening `file://` URLs will not work, because browsers block JSON imports for security reasons. Running a server is required.

## Editing Data

All venue data lives in src/venues.json. This is where you’ll add, remove, or update venue information.

### Example JSON entry
```
{
  "name": "Example Venue",
  "feasibility": "feasible",
  "comment": "Has regular bookings on Sundays.",
  "link": "https://example.com"
}
```

The acceptable fields are:

- `name` — Venue name (string)  
- `feasibility` — Availability code (string)
    The acceptable fields in the `feasibility` string are:
    - `feasible` — Venue can be booked without restrictions
    - `pbq` — Venue is only feasible for Please Be Quiet competitions
    - `potentially feasible` — Venue may be possible but has conditions
    - `not feasible` — Venue cannot be booked
- `comment` — Notes about the venue (optional)  
- `link` — Website or booking link (optional)  


