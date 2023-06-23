const showBasket = () => {
  const basketTitleEl = document.querySelector(".basket-title");
  const basketDropdownEl = document.querySelector(".basket-dropdown");
  basketTitleEl.classList.toggle("transparent-color");
  basketDropdownEl.classList.toggle("d-none");

  const mobileNavEl = document.querySelector(".mobile-menu");

  if (!mobileNavEl.classList.contains("hide")) {
    mobileNavEl.classList.add("hide");
  }
};

export default showBasket;
