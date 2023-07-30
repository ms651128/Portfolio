document.addEventListener('DOMContentLoaded', function () {
    const scrollLinks = document.querySelectorAll('.scroll-link');

    function scrollToSection(event) {
      event.preventDefault();
      const target = document.querySelector(event.target.getAttribute('data-target'));
      const offsetTop = target.getBoundingClientRect().top;
      const navbarHeight = document.getElementById('navbar').offsetHeight;
      const totalOffset = offsetTop + window.scrollY;

      window.scrollTo({
        top: totalOffset,
        behavior: 'smooth'
      });
    }

    scrollLinks.forEach(link => {
      link.addEventListener('click', scrollToSection);
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const navbarHidden = document.getElementById('navbar-hidden');
    const scrollLinks = document.querySelectorAll('.scroll-link');
    const sectionPositions = {};

    function updateSectionPositions() {
      // Calculate the top offset of each section
      scrollLinks.forEach(link => {
        const target = document.querySelector(link.getAttribute('data-target'));
        sectionPositions[link.getAttribute('data-target')] = target.offsetTop;
      });
    }

    function toggleNavbar() {
      // Toggle the visibility of the second navbar based on the scroll position
      const scrollY = window.scrollY;
      const firstSectionOffset = sectionPositions['#services'];

      if (scrollY >= firstSectionOffset) {
        navbarHidden.classList.remove('navbar-hidden');
      } else {
        navbarHidden.classList.add('navbar-hidden');
      }
    }

    updateSectionPositions(); // Initial calculation of section positions
    window.addEventListener('scroll', toggleNavbar);
    window.addEventListener('resize', updateSectionPositions);
  });