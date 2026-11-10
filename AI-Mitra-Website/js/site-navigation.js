/* Shared navigation and school-invitation form behaviour for all AI Mitra pages. */
document.addEventListener('DOMContentLoaded', () => {
  // Consistent mobile navigation used by every page.
  const menuButton = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      mobileMenu.hidden = isOpen;
    });
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.hidden = true;
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Google Form modal. Add the published form URL in js/site-config.js to activate it.
  const modal = document.getElementById('schoolInviteFormModal');
  if (!modal) return;

  const frame = document.getElementById('schoolInviteFormFrame');
  const notice = document.getElementById('schoolInviteFormNotice');
  const openLink = document.getElementById('schoolInviteOpenForm');
  const formUrl = (window.AI_MITRA_CONFIG && window.AI_MITRA_CONFIG.schoolInviteFormUrl || '').trim();

  function openSchoolForm(event) {
    if (event) event.preventDefault();
    if (formUrl) {
      try {
        const parsed = new URL(formUrl);
        const embedUrl = new URL(parsed.href);
        embedUrl.searchParams.set('embedded', 'true');
        frame.src = embedUrl.href;
        frame.hidden = false;
        notice.hidden = true;
        openLink.href = formUrl;
        openLink.hidden = false;
      } catch (error) {
        notice.textContent = 'The Google Form URL in js/site-config.js is not valid. Please check the published form link.';
        notice.hidden = false;
        frame.hidden = true;
        openLink.hidden = true;
      }
    } else {
      notice.hidden = false;
      frame.hidden = true;
      openLink.hidden = true;
    }
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    const closeButton = modal.querySelector('[data-school-form-close]');
    if (closeButton) closeButton.focus();
  }

  function closeSchoolForm() {
    modal.hidden = true;
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-school-invite-open]').forEach((link) => {
    link.addEventListener('click', openSchoolForm);
  });
  modal.querySelectorAll('[data-school-form-close]').forEach((button) => {
    button.addEventListener('click', closeSchoolForm);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) closeSchoolForm();
  });
});
