(() => {
  const stage = document.getElementById('stage');
  const hint  = document.getElementById('hint');

  // Start animation — small delay lets fonts settle so frame 1 isn't missed
  requestAnimationFrame(() => requestAnimationFrame(() => stage.classList.add('playing')));

  // Keep scale fresh on resize (Safari needs a nudge on orientation change)
  window.addEventListener('resize', () => {
    stage.style.willChange = 'transform';
    requestAnimationFrame(() => { stage.style.willChange = ''; });
  });

  // Keyboard controls
  document.addEventListener('keydown', e => {
    const k = e.key.toLowerCase();

    if (k === 'r') {
      stage.classList.toggle('record-mode');
      if (hint) hint.textContent = stage.classList.contains('record-mode')
        ? ''
        : 'press R to record · Space to pause';
    }

    if (k === ' ' || k === 'spacebar') {
      e.preventDefault();
      stage.classList.toggle('paused');
    }

    if (k === 'f') {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen?.().catch(() => {});
      } else {
        document.exitFullscreen?.().catch(() => {});
      }
    }
  });
})();
