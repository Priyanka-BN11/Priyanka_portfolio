document.addEventListener("DOMContentLoaded", function () {
    fetch('navbar.html?nocache=' + new Date().getTime()) // Prevent caching issues
      .then(response => {
        if (!response.ok) {
          throw new Error('Navbar file not found!');
        }
        return response.text();
      })
      .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
        AOS.init({ 
          duration: 1000,  
          once: true,      
          easing: 'ease-in-out'
        });
      })
      .catch(error => console.error('Error loading navbar:', error));
  });
  