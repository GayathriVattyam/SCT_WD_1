// script.js

// Navbar color change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#ffffff";
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.boxShadow = "none";
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Optional: Animate apply buttons on click
document.querySelectorAll(".apply-btn").forEach(button => {
  button.addEventListener("click", () => {
    button.innerText = "Applied!";
    button.disabled = true;
    button.style.backgroundColor = "#10b981";
  });
});
