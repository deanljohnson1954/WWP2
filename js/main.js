// Mobile navigation toggle
const navToggle = document.querySelector('.nav__toggle');
const navLinks  = document.querySelector('.nav__links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// Mark active nav link based on current page
(function markActiveLink() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

// Contact form — client-side success state (wire to Formspree / Netlify Forms in production)
const contactForm = document.getElementById('contactForm');
const successMsg  = document.getElementById('successMessage');

if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    if (successMsg) {
      successMsg.style.display = 'block';
    }
    const btn = contactForm.querySelector('button[type="submit"]');
    if (btn) {
      btn.textContent = 'Request Submitted';
      btn.disabled = true;
      btn.style.background = '#2A8C4A';
      btn.style.borderColor = '#2A8C4A';
    }
    contactForm.reset();
  });
}
