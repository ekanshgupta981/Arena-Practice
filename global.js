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
