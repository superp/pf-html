(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();

((event) => {
  const menuTabRef = document.querySelector("[data-menu-tab]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const menuBtnRef = document.querySelector("[data-menu-button]");

  menuTabRef.addEventListener("click", (event) => {
    if (document.body.className !== "tab-menu-open") {
      return;
    }

    let li = event.target.closest("li");
    if (!li) return;
    const expanded =
      menuTabRef.getAttribute("aria-expanded") === "true" || false;

    menuTabRef.classList.toggle("is-open");
    menuBtnRef.classList.toggle("is-open");

    menuTabRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    document.body.classList.toggle("tab-menu-open");
  });
})();
