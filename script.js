(() => {
  const stage = document.getElementById('stage');
  const hint = document.getElementById('hint');

  // Start the master animation loop by adding the `playing` class.
  // Tiny delay lets fonts/layout settle so the first frame isn't missed.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => stage.classList.add('playing'));
  });

  // Keep the stage scale in sync on resize (CSS handles it, but this nudges
  // Safari to recompute on orientation change).
  window.addEventListener('resize', () => {
    stage.style.willChange = 'transform';
    requestAnimationFrame(() => (stage.style.willChange = ''));
  });

  // Keyboard controls
  document.addEventListener('keydown', (e) => {
    const k = e.key.toLowerCase();
    if (k === 'r') {
      stage.classList.toggle('record-mode');
      if (hint) hint.textContent = stage.classList.contains('record-mode')
        ? ''
        : 'press R to toggle frame · space to pause';
    }
    if (k === ' ' || k === 'spacebar') {
      e.preventDefault();
      stage.classList.toggle('paused');
    }
    if (k === 'f') {
      // Fullscreen toggle for cleaner recording
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    }
  });
})();
