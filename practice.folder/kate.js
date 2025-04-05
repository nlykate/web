document.addEventListener("DOMContentLoaded", () => {
  showSection("home"); // Show home section on load
  typeEffect(); // Start the typing effect once
  showSkills(); // Show skills in portfolio once DOM is ready
  revealContact(); // Reveal contact section when ready
});

// Function to show the relevant section
function showSection(sectionId) {
  document.querySelectorAll(".section").forEach(section => {
      section.style.display = section.id === sectionId ? "block" : "none";
  });

  // Update active navigation button
  document.querySelectorAll("nav a").forEach(link => {
      link.classList.remove("active");
      if (link.dataset.section === sectionId) {
          link.classList.add("active");
      }
  });
}

const nameText = "Hanna Kate Perez"; // Your name
let index = 0;

// Typing effect function
function typeEffect() {
  let displayText = nameText.slice(0, index);
  document.getElementById("typing-name").innerHTML = displayText + '<span class="cursor">|</span>';

  if (index < nameText.length) {
      index++; // Typing forward
      setTimeout(typeEffect, 200); // Adjust speed if needed
  } else {
      index = 0; // Reset to start again
      setTimeout(typeEffect, 1000); // Pause before repeating
  }
}

// Function to show the skills in the portfolio section with delays
function showSkills() {
  const skills = document.querySelectorAll('.skill');
  skills.forEach((skill, index) => {
      setTimeout(() => {
          skill.classList.add('show');
      }, index * 300); // Shows skills in order with delays
  });
}


// Scroll listener to trigger animations when projects come into view
window.addEventListener('scroll', function() {
  const projects = document.querySelectorAll('.project');
  const windowHeight = window.innerHeight;

  projects.forEach(function(project) {
      const projectTop = project.getBoundingClientRect().top;

      // If project is in the viewport
      if (projectTop < windowHeight - 100) {
          if (!project.classList.contains('show')) {
              project.classList.add('show');
          }
      } else {
          project.classList.remove('show');
      }
  });
});

// Scroll listener to reveal the gallery section when it comes into view
window.addEventListener('scroll', function() {
  const gallery = document.querySelector('.gallery');
  const windowHeight = window.innerHeight;
  const galleryTop = gallery.getBoundingClientRect().top;

  if (galleryTop < windowHeight - 100) {
      gallery.classList.add('show');
  } else {
      gallery.classList.remove('show'); // Reset to trigger animation again
  }
});
