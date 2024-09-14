

//  my work
document.querySelector('a[href="#My-work"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#My-work').scrollIntoView({ behavior: 'smooth' });
  });

// Smooth scroll for "About Me"
document.querySelector('a[href="#about-me"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#about-me').scrollIntoView({ behavior: 'smooth' });
});

// Smooth scroll for "Contact Me"
document.querySelector('a[href="#contact-me"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#contact-me').scrollIntoView({ behavior: 'smooth' });
});

// Smooth scroll for "Contact Me"
document.querySelector('a[href="#testimonials"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#testimonials').scrollIntoView({ behavior: 'smooth' });
});


