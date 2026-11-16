(function () {
  const masthead = document.querySelector("[data-masthead]");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  const dropdown = document.querySelector(".nav__drop");
  const dropBtn = dropdown ? dropdown.querySelector("button") : null;

  function closeDropdown() {
    if (!dropBtn || !dropdown) return;
    dropBtn.setAttribute("aria-expanded", "false");
    dropdown.classList.remove("is-open");
  }

  const onScroll = function () {
    if (!masthead) return;
    masthead.classList.toggle("is-scrolled", window.scrollY > 10);
    const toTop = document.querySelector(".to-top");
    if (toTop) toTop.hidden = window.scrollY < 700;
    if (window.scrollY > 40 && dropBtn && (dropdown.classList.contains("is-open") || document.activeElement === dropBtn)) {
      closeDropdown();
      if (document.activeElement === dropBtn) dropBtn.blur();
    }
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  function closeNav() {
    if (!nav || !toggle) return;
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
      document.body.classList.toggle("nav-open", !open);
    });
  }

  if (dropBtn && dropdown) {
    dropBtn.addEventListener("click", function () {
      const expanded = dropBtn.getAttribute("aria-expanded") === "true";
      dropBtn.setAttribute("aria-expanded", String(!expanded));
      dropdown.classList.toggle("is-open", !expanded);
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    closeNav();
    closeDropdown();
  });

  document.addEventListener("click", function (event) {
    if (!dropdown || !dropdown.parentElement) return;
    if (dropdown.parentElement.contains(event.target)) return;
    closeDropdown();
  });

  if (nav) {
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 979px)").matches) closeNav();
      });
    });
  }

  const toTop = document.querySelector(".to-top");
  if (toTop) {
    toTop.addEventListener("click", function () {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    });
  }
})();
