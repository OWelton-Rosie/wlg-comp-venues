// footer.js
const footerURL = 'https://wlg-comp-venues.pages.dev/footer.html'; // or an absolute URL if shared across domains

fetch(footerURL)
  .then(response => {
    if (!response.ok) throw new Error('Footer not found at ' + footerURL);
    return response.text();
  })
  .then(data => {
    const container = document.getElementById('footer');
    if (container) container.innerHTML = data;
  })
  .catch(error => console.error('Error loading footer:', error));
