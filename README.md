# Wellington competition venues
After I felt that the catalog would be better if it was in the form of a website (as opposed to a Google Sheet), I built this site.

## Development
Start by cloning and navigating to the project:
```
git clone https://github.com/OWelton-Rosie/wlg-comp-venues 
&& cd wlg-comp-venues
```

To run the project locally, use Python to build the server:
```
python3 -m http.server
```

Then navigate to [localhost:8000/src](http://localhost:8000/src)


## Specs
Technically speaking, the app is built with HTML for markup, CSS for styling and JavaScript for functionality. All venue data (name, feasibility, website) is contained in [`src/venues/json`](https://github.com/OWelton-Rosie/wlg-comp-venues/blob/main/src/venues.json). There are some key reasons for using JSON to handle the data, namely:
- The app runs extremely quickly, with virtually instant data loading
- It's easy to add new venues and update existing venue information

It's important to note that it's essential to build a server when running the app locally. This is due to the fact that `file://` URLs will not use the JS `import` function to load the contents of a JSON. This is due to security restrictions.

# Creating your own instance
If you're keen to reuse my code to make a catalog for your region, you're more than welcome to. Please follow the insturctions in `installation.md` for guidance on how to do this.

## Todo:
- ~~Add search function~~
- ~~Add light/dark mode?~~
- ~~Add noscript message~~