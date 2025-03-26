document.addEventListener("DOMContentLoaded", function () {
  // Function to fetch and insert the navbar
  fetch('./html/navbar.html')
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
// Smooth Scrolling & Active Link Highlighting
function setupNavbar() {
    const navLinks = document.querySelectorAll('.nav-link');

    // Smooth scrolling for navbar links
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjust for fixed navbar height
                    behavior: "smooth"
                });
            }

            // Update active class immediately on click
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Highlight Active Section on Scroll
    window.addEventListener("scroll", () => {
        let scrollY = window.pageYOffset;

        document.querySelectorAll("section").forEach(section => {
            let sectionTop = section.offsetTop - 100;
            let sectionHeight = section.clientHeight;
            let sectionId = section.getAttribute("id");

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === sectionId) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });
}

// Run the function when the document is loaded
document.addEventListener("DOMContentLoaded", setupNavbar);
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
