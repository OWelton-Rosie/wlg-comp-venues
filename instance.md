# Project Setup Guide  

## Overview  
All information (venue name, feasibility, comments, and links) is stored in a single JSON file. You won’t need to modify JavaScript or CSS unless you want to customize functionality or appearance, however, you will want to edit the contents of both HTML files as they contain information and links that are relevant only to the Welllington speedcubing community.

## Specs  
The app is built with:  
- **HTML** for markup  
- **CSS** for styling  
- **JavaScript** for functionality  
- **JSON** for data storage  

Why JSON?  
- Fast — the app loads data instantly  
- Simple — easy to add or update venues  

All venue data is stored in `src/venues.json`. If you wish to change how the app stores or retrives data, you'll need to edit the JS.

## Creating Your Own Instance  
Prerequistes:
- Git
- Python

Clone and navigate to the project:  
```
git clone https://github.com/OWelton-Rosie/wlg-comp-venues &&
cd wlg-comp-venues
```

Run the app locally with a simple Python server:
```
python3 -m http.server
```
Then open http://localhost:8000/src in your browser.

Note: Simply opening `file://` URLs will not work, because browsers block JSON imports for security reasons. Running a server is required.

## Editing Data
All venue data lives in `src/venues.json`. This is where you’ll add, remove, or update venue information.

### Example JSON entry
```
{
  "name": "Example Venue",
  "feasibility": "feasible",
  "comment": "Has regular bookings on Sundays.",
  "features": [
            "Projector"
        ],
  "link": "https://example.com"
}
```

The acceptable fields are:

- `name` — Venue name
- `feasibility` — Availability code
    The acceptable fields in the `feasibility` string are:
    - `feasible` — Venue can be booked without restrictions
    - `pbq` — Venue is only feasible for Please Be Quiet competitions
    - `potentially feasible` — Venue may be possible but has conditions
    - `not feasible` — Venue cannot be booked
- `comment` — Notes about the venue **(optional)**  
- `features` - List of notable features the venue can provide **(optional)**
- `link` — Website or booking link **(optional)**  


