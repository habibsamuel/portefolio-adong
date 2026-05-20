// ─────────────────────────────────────────────────────────────
// CURSEUR CUSTOM
// ─────────────────────────────────────────────────────────────
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  cursorRing.style.left = e.clientX + 'px';
  cursorRing.style.top = e.clientY + 'px';
});

// Changement du curseur au survol des liens
document.querySelectorAll('a, button').forEach(element => {
  element.addEventListener('mouseenter', () => {
    cursor.style.width = '24px';
    cursor.style.height = '24px';
    cursorRing.style.width = '48px';
    cursorRing.style.height = '48px';
    cursor.style.opacity = '0.7';
  });

  element.addEventListener('mouseleave', () => {
    cursor.style.width = '12px';
    cursor.style.height = '12px';
    cursorRing.style.width = '36px';
    cursorRing.style.height = '36px';
    cursor.style.opacity = '1';
  });
});

// ─────────────────────────────────────────────────────────────
// NAVIGATION STICKY
// ─────────────────────────────────────────────────────────────
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ─────────────────────────────────────────────────────────────
// SMOOTH SCROLL AUX ANCRES
// ─────────────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ─────────────────────────────────────────────────────────────
// INTERSECTION OBSERVER - REVEAL ON SCROLL
// ─────────────────────────────────────────────────────────────
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observer tous les éléments avec classe 'reveal'
document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});

// ─────────────────────────────────────────────────────────────
// SKILL BARS ANIMATION
// ─────────────────────────────────────────────────────────────
const skillsSection = document.getElementById('skills');

if (skillsSection) {
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.skill-fill').forEach(fill => {
          const width = fill.style.transform.match(/scaleX\(([\d.]+)\)/)?.[1] || 0;
          fill.style.transform = `scaleX(${width})`;
          fill.classList.add('animate');
        });
        skillsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  skillsObserver.observe(skillsSection);
}

// ─────────────────────────────────────────────────────────────
// SCROLL INDICATOR
// ─────────────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  
  // Optionnel: vous pouvez ajouter un indicateur de scroll ici
});

// ─────────────────────────────────────────────────────────────
// FORMULAIRE CONTACT
// ─────────────────────────────────────────────────────────────
const contactSection = document.getElementById('contact');

if (contactSection) {
  const contactLinks = contactSection.querySelectorAll('.contact-link');
  
  contactLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.href.startsWith('mailto:')) {
        // Permet au lien mailto de fonctionner naturellement
        return;
      }
      
      // Les autres liens s'ouvrent normalement
      if (!this.href.startsWith('http')) {
        e.preventDefault();
      }
    });
  });
}

// ─────────────────────────────────────────────────────────────
// INITIALISATION
// ─────────────────────────────────────────────────────────────
console.log('Portfolio Adong - Script chargé avec succès ✓');
