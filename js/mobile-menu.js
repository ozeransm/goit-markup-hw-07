(() => {
  const refs = {
    openMobMenuBtn: document.querySelector("[data-mobile-menu-open]"),
    closeMobMenuBtn: document.querySelector("[data-mobile-menu-close]"),
    mobmenu: document.querySelector("[data-mobile-menu]"),
  };

  refs.openMobMenuBtn.addEventListener("click", toggleModal);
  refs.closeMobMenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.mobmenu.classList.toggle("is-hidden");
  }
})();
