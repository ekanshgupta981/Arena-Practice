var theme_color = "#dac5a7";
var sec_theme_color = "#0e0e0e";

document.documentElement.style.setProperty("--theme-color", theme_color);
document.documentElement.style.setProperty(
  "--sec-theme-color",
  sec_theme_color
);

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav_btn");
  const sections = document.querySelectorAll("section, div[id]");

  // Helper function to remove active class
  const removeActiveStyles = () => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
  };

  // Add styles for the currently active section
  const setActiveLink = (id) => {
    const activeLink = document.querySelector(`.nav_btn[href="#${id}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  };

  // Scroll event listener
  const handleScroll = () => {
    let currentSection = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop - 50) {
        currentSection = section.getAttribute("id");
      }
    });

    if (currentSection) {
      removeActiveStyles();
      setActiveLink(currentSection);
    }
  };

  handleScroll(); // Trigger on load
  window.addEventListener("scroll", handleScroll);
});

function createCircle() {
  const parent = document.querySelector(".homes");
  const circle = document.createElement("div");
  circle.classList.add("circle");

  // Set random positions and sizes
  const size = Math.random() * 300 + 50; // Random size between 20 and 100px
  const xPos = Math.random() * (window.innerWidth - size);
  const yPos = Math.random() * (window.innerHeight - size);

  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.left = `${xPos}px`;
  circle.style.top = `${yPos}px`;

  parent.appendChild(circle);

  // Remove the circle after animation
  circle.addEventListener("animationend", () => {
    parent.removeChild(circle);
  });
}

function spawnCircles() {
  setInterval(createCircle, 1500); // Generate a new circle every 1.5 seconds
}

spawnCircles();
