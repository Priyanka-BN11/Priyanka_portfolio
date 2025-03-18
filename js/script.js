
    document.addEventListener("DOMContentLoaded", function () {
      fetch('navbar.html')
        .then(response => {
          if (!response.ok) {
            throw new Error('Navbar file not found!');
          }
          return response.text();
        })
        .then(data => {
          document.getElementById('navbar-placeholder').innerHTML = data;
          AOS.init({ 
            duration: 1000,  // Animation speed
            once: true,      // Ensures animation runs only once
            easing: 'ease-in-out'
          });
        })
        .catch(error => console.error('Error loading navbar:', error));
    });
 
