(() => {
  // ── Scroll reveal via IntersectionObserver ──────────────────
  const revealEls = document.querySelectorAll('.reveal-item');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  // ── Counter animation ───────────────────────────────────────
  const counters = document.querySelectorAll('.big-num[data-target]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        entry.target.classList.add('counted');
        const target = parseInt(entry.target.dataset.target, 10);
        const duration = 1400;
        const steps = duration / 16;
        const increment = target / steps;
        let current = 0;
        const tick = () => {
          current = Math.min(current + increment, target);
          entry.target.textContent = Math.round(current);
          if (current < target) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => counterObserver.observe(el));

  // ── Parallax hero background ────────────────────────────────
  const heroBg = document.querySelector('.hero-bg');
  const onScroll = () => {
    const y = window.scrollY;
    if (heroBg && y < window.innerHeight) {
      heroBg.style.transform = `translateY(${y * 0.38}px)`;
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // ── Hero cards subtle float ─────────────────────────────────
  const cards = document.querySelectorAll('.hero-card');
  let floatTick = 0;
  const floatCards = () => {
    floatTick += 0.018;
    cards.forEach((card, i) => {
      const baseRot = ['-4deg', '2.5deg', '-2deg'][i] ?? '0deg';
      const y = Math.sin(floatTick + i * 1.2) * 7;
      card.style.transform = `translateY(${y}px) rotate(${baseRot})`;
    });
    requestAnimationFrame(floatCards);
  };
  floatCards();

  // ── Nav scrolled state ──────────────────────────────────────
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
})();
