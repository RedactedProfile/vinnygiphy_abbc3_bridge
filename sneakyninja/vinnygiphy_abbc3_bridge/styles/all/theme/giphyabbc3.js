// With the way ABBC3 places things, the giphy modal is hidden behind a parent that's set to display:none 
// Here we're just going to move it to the body where it can still be triggered and displayed, then we'll 
// wire up the click handler.  All to be compatible with both the full editor view and the quick reply. 
(() => {
  function ensureMessageId() {
    // phpbb sometimes uses different ids in quick reply
    const textArea = document.querySelector('textextArearea[name="message"]');
    if (textArea && textArea.id !== 'message') textArea.id = 'message';
  }

  // Move modal to <body> (see above)
  function moveModalToBody() {
    const modal = document.getElementById('giphy-modal');
    if (modal && modal.parentElement !== document.body) {
      document.body.appendChild(modal);
    }
  }

  // rewire click handler for ABBC3 button
  function wireABBC3Button() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('#giphy-bridge-open');
      if (!btn) return;

      e.preventDefault();

      ensureMessageId();
      moveModalToBody();

      const nativeOpen = document.getElementById('open-giphy-modal');
      if (nativeOpen) {
        nativeOpen.click();
        return;
      }

      // fallback if native button isn't present, at least show the modal
      const modal = document.getElementById('giphy-modal');
      if (modal) modal.style.display = 'flex';

    }, true);
  }

  document.addEventListener('DOMContentLoaded', () => {
    ensureMessageId();
    moveModalToBody();
    wireABBC3Button();
  });

  // If quick-reply is injected after load, keep resilient 
  const mo = new MutationObserver(() => {
    ensureMessageId();
  });
  mo.observe(document.documentElement, { childList: true, subtree: true });

})();