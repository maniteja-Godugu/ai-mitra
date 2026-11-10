/* Resources page: reveal an embedded PDF preview, then offer a separate download. */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-pdf-preview]').forEach((button) => {
    const slug = button.getAttribute('data-pdf-preview');
    const panel = document.getElementById(`pdf-preview-${slug}`);
    if (!panel) return;

    const frame = panel.querySelector('iframe[data-pdf-src]');
    const closeButton = panel.querySelector(`[data-pdf-close="${slug}"]`);

    button.addEventListener('click', () => {
      const isOpen = !panel.hidden;
      // Close other previews so the page stays focused and uncluttered.
      document.querySelectorAll('.pdf-preview-panel').forEach((otherPanel) => {
        otherPanel.hidden = true;
        otherPanel.classList.add('hidden');
      });
      document.querySelectorAll('[data-pdf-preview]').forEach((otherButton) => {
        otherButton.setAttribute('aria-expanded', 'false');
      });

      if (isOpen) return;
      if (frame && !frame.getAttribute('src')) {
        frame.setAttribute('src', frame.getAttribute('data-pdf-src'));
      }
      panel.hidden = false;
      panel.classList.remove('hidden');
      button.setAttribute('aria-expanded', 'true');
      window.setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
    });

    if (closeButton) {
      closeButton.addEventListener('click', () => {
        panel.hidden = true;
        panel.classList.add('hidden');
        button.setAttribute('aria-expanded', 'false');
      });
    }
  });
});
