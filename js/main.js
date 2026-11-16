(function () {
  const year = String(new Date().getFullYear());
  document.querySelectorAll("[data-year]").forEach(function (node) {
    node.textContent = year;
  });

  const page = document.body.dataset.page;
  if (page) {
    document.querySelectorAll("[data-nav]").forEach(function (link) {
      if (link.dataset.nav === page) link.setAttribute("aria-current", "page");
    });
  }

  const filterRoot = document.querySelector("[data-filters]");
  if (!filterRoot) return;
  const cards = document.querySelectorAll("[data-project]");
  const empty = document.querySelector("[data-filter-empty]");

  filterRoot.querySelectorAll("button").forEach(function (button) {
    button.addEventListener("click", function () {
      const filter = button.dataset.filter;
      filterRoot.querySelectorAll("button").forEach(function (item) {
        item.setAttribute("aria-pressed", String(item === button));
      });
      let shown = 0;
      cards.forEach(function (card) {
        const match = filter === "all" || card.dataset.project === filter;
        card.hidden = !match;
        if (match) shown += 1;
      });
      if (empty) empty.hidden = shown !== 0;
    });
  });
})();
