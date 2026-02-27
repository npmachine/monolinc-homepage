const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const sections = Array.from(document.querySelectorAll('[data-section]'));
const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));

function markActive(id) {
  navLinks.forEach((link) => {
    const isMatch = link.getAttribute('href') === `#${id}`;
    link.classList.toggle('active', isMatch);
    if (isMatch) {
      link.setAttribute('aria-current', 'true');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

if (!reduceMotion) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
  );

  sections.forEach((section) => revealObserver.observe(section));
} else {
  sections.forEach((section) => section.classList.add('visible'));
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        markActive(entry.target.id);
      }
    });
  },
  { threshold: 0.55 }
);

sections.forEach((section) => sectionObserver.observe(section));

if (sections[0]) {
  markActive(sections[0].id);
}

const siteHeader = document.querySelector('.site-header');
if (siteHeader) {
  window.addEventListener('scroll', () => {
    siteHeader.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}
