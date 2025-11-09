// shared footer component
const footerURL = 'https://wlg-comp-venues.pages.dev/footer.html'; // target URL

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
