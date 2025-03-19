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
          setupNavbar();
          if (typeof AOS !== "undefined") {
            AOS.init({
                duration: 1000,
                once: true,
                easing: 'ease-in-out'
            });
        } else {
            console.error("AOS library not found!");
        }
    });
// Smooth Scrolling
function setupNavbar() {
  document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function (event) {
          event.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
          
          if (targetSection) {
              window.scrollTo({
                  top: targetSection.offsetTop - 60,
                  behavior: "smooth"
              });
          }
      });
  });

  // Highlight Active Section on Scroll
  window.addEventListener("scroll", () => {
      let sections = document.querySelectorAll("section");
      let navLinks = document.querySelectorAll(".nav-link");

      let scrollY = window.pageYOffset;

      sections.forEach((section, index) => {
          let sectionTop = section.offsetTop - 100;
          let sectionHeight = section.clientHeight;

          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
              navLinks.forEach(link => link.classList.remove("active"));
              navLinks[index].classList.add("active");
          }
      });
  });
}
  // Typing Effect Function
  function typeText(elementId, text, speed) {
      let i = 0;
      function type() {
        let element = document.getElementById(elementId);
        if (!element) return;  // Prevents error if element is missing
        
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
  }

  // Call the function with your text
  typeText("typing-text", "Frontend Developer, Fullstack Web Developer", 100);
});
