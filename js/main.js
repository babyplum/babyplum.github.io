// This event listener waits for the entire HTML document to be loaded and ready.
document.addEventListener("DOMContentLoaded", function() {

  // Use the fetch API to get the content of header.html
  fetch('/templates/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading the header:', error);
    });

});