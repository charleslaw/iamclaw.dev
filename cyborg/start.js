// Keep the original game engine and movement timing unchanged.
runGame();

(() => {
  let held = null;

  function sendKey(button, type) {
    const keyCode = Number(button.dataset.keycode);
    document.dispatchEvent(new KeyboardEvent(type, {
      key: button.dataset.key,
      code: button.dataset.key,
      keyCode,
      which: keyCode,
      bubbles: true,
      cancelable: true,
    }));
  }

  function release() {
    if (!held) return;
    const previous = held;
    held = null;
    previous.button.classList.remove('is-pressed');
    sendKey(previous.button, 'keyup');
    if (previous.button.hasPointerCapture(previous.pointerId)) {
      previous.button.releasePointerCapture(previous.pointerId);
    }
  }

  document.querySelectorAll('.direction-button').forEach(button => {
    button.addEventListener('pointerdown', event => {
      if (event.button !== 0) return;
      event.preventDefault();
      release();
      held = { button, pointerId: event.pointerId };
      button.setPointerCapture(event.pointerId);
      button.classList.add('is-pressed');
      sendKey(button, 'keydown');
    });

    for (const type of ['pointerup', 'pointercancel', 'lostpointercapture']) {
      button.addEventListener(type, event => {
        if (held && held.pointerId === event.pointerId) release();
      });
    }

    // Keyboard and assistive-technology activation use a click without a pointer.
    button.addEventListener('click', event => {
      if (event.detail !== 0) return;
      release();
      sendKey(button, 'keydown');
      sendKey(button, 'keyup');
    });
  });

  window.addEventListener('blur', release);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) release();
  });
})();
