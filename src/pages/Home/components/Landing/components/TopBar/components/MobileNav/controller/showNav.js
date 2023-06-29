const showNav = () => {
  const basketTitleEl = document.querySelector(".basket-title");
  const basketDropdownEl = document.querySelector(".basket-dropdown");

  if (!basketTitleEl.classList.contains("transparent-color") && !basketDropdownEl.classList.contains("d-none")) {
    basketTitleEl.classList.add("transparent-color");
    basketDropdownEl.classList.add("d-none");
  }

  const mobileNavEl = document.querySelector(".mobile-menu");
  mobileNavEl.classList.toggle('hide')
}

export default showNav
