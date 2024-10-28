// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkMode');
darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

// Scroll Reveal Animations
const scrollElements = document.querySelectorAll('.reveal-on-scroll');

function elementInView(el, dividend = 1) {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
}

function displayScrollElement(el) {
  el.classList.add('visible');
}

function handleScrollAnimation() {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    }
  });
}

window.addEventListener('scroll', handleScrollAnimation);


// Preloader and Page Transition Script

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
      preloader.style.display = "none"; // Hide preloader after load
  }, 500);
});

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();
      let destination = this.href;

      // Add fade-out effect
      document.body.classList.add('loading');

      // Wait for animation before changing page
      setTimeout(() => {
          window.location.href = destination;
      }, 500); // Match this timing with CSS transition timing
  });
});
