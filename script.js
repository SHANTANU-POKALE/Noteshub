const navLinks = document.querySelectorAll('.nav-item a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor tag behavior

    const sectionId = this.getAttribute('href');
    const section = document.querySelector(sectionId);

    // Smooth scroll animation
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
