(() => {
  const openMenuBtn = document.querySelector('[data-menu-open]');
  const closeMenuBtn = document.querySelector('[data-menu-close]');
  const menuModal = document.querySelector('[data-menu]');

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    menuModal.classList.toggle('is-open');

    document.body.classList.toggle('no-scroll');
  }
})();
