document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header-menu');
  if (!menu) return;

  // ensure the menu has an id so that aria-controls can reference it
  if (!menu.id) menu.id = 'header-menu';
  menu.setAttribute('aria-hidden', 'true');

  const rootFolder = menu.querySelector('[data-folder="root"]');
  const burgerButtons = document.querySelectorAll('.header-burger-btn');

  const setMenuState = isOpen => {
    burgerButtons.forEach(btn => btn.setAttribute('aria-expanded', String(isOpen)));
    menu.classList.toggle('open', isOpen);
    menu.setAttribute('aria-hidden', String(!isOpen));
    if (!isOpen) showFolder(rootFolder);
  };

  burgerButtons.forEach(btn => {
    btn.setAttribute('aria-controls', menu.id);
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', e => {
      e.preventDefault();
      setMenuState(!menu.classList.contains('open'));
    });
  });

  menu.querySelectorAll('[data-folder-id]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const id = link.getAttribute('data-folder-id');
      const target = menu.querySelector(`[data-folder="${id}"]`);
      if (target) {
        showFolder(target);
      }
    });
  });

  menu.querySelectorAll('[data-action="back"]').forEach(back => {
    back.addEventListener('click', e => {
      e.preventDefault();
      showFolder(rootFolder);
    });
  });

  function showFolder(folder) {
    menu.querySelectorAll('.header-menu-nav-folder').forEach(f => {
      f.style.display = 'none';
      f.setAttribute('aria-hidden', 'true');
    });
    folder.style.display = 'block';
    folder.setAttribute('aria-hidden', 'false');
  }
});

