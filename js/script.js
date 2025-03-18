document.addEventListener("DOMContentLoaded", function () {
  // Function to fetch and insert the navbar
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
              duration: 1000,
              once: true,
              easing: 'ease-in-out'
          });
      })
      .catch(error => console.error('Error loading navbar:', error));

  // Typing Effect Function
  function typeText(elementId, text, speed) {
      let i = 0;
      function type() {
          if (i < text.length) {
              document.getElementById(elementId).innerHTML += text.charAt(i);
              i++;
              setTimeout(type, speed);
          }
      }
      type();
  }

  // Call the function with your text
  typeText("typing-text", "Frontend Web Developer, Fullstack Web Developer", 100);
});
