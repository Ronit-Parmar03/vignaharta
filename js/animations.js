(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function ensureReveal(el, variant, delayIndex) {
    if (!el || el.nodeType !== 1) return;
    if (el.classList.contains("reveal") || el.classList.contains("section-reveal")) return;
    if (el.closest(".nav, .topbar, .header, .footer, .skip-link, .to-top, .slider-controls, .client-marquee__list[aria-hidden='true']")) return;
    if (el.matches("script, style, br, hr")) return;

    el.classList.add("reveal");
    if (variant) el.classList.add(variant);
    if (delayIndex > 0) el.classList.add("reveal-delay-" + Math.min(delayIndex, 6));
  }

  function preparePage() {
    document.querySelectorAll("main .section, main .page-hero, main .quote-band, main .clients").forEach(function (section) {
      // Skip why-section: transform on ancestors breaks position:sticky
      if (section.classList.contains("why-section")) return;
      section.classList.add("section-reveal");
    });

    document.querySelectorAll(
      ".section-head > *, .works__head > div, .page-hero .container > *:not(.btn-row), .quote-band .container > *:not(.btn-row)"
    ).forEach(function (el, i) {
      ensureReveal(el, i % 2 === 0 ? "reveal-up" : "reveal-fade", (i % 4) + 1);
    });

    [
      [".intro__values .value", "reveal-up"],
      [".service-mosaic .mosaic-card", "reveal-scale"],
      [".biz-grid .biz-card", "reveal-up"],
      [".client-marquee", "reveal-fade"],
      [".why-list > li", "reveal-up"],
      [".split > *", "reveal-up"],
      [".stack > h2, .stack > h3, .stack > p, .stack > img, .stack > .content-media, .stack > .btn-row, .stack > .card-grid, .stack > .detail-list, .stack > .link-arrow", "reveal-up"],
      [".service-grid .service-card", "reveal-scale"],
      [".card-grid > *, .project-grid > *", "reveal-up"],
      [".form.panel, aside.panel", "reveal-up"],
      [".content-media", "reveal-scale"],
      [".btn-row", "reveal-fade"],
      [".filters", "reveal-fade"],
      [".slider__track", "reveal-up"],
      ["main .section > .container > h2, main .section > .container > p", "reveal-up"]
    ].forEach(function (pair) {
      document.querySelectorAll(pair[0]).forEach(function (el, i) {
        ensureReveal(el, pair[1], (i % 6) + 1);
      });
    });
  }

  preparePage();

  const nodes = Array.prototype.slice.call(document.querySelectorAll(".reveal, .section-reveal"));
  if (!nodes.length) {
    document.body.classList.add("anim-ready");
    return;
  }

  if (reduce || !("IntersectionObserver" in window)) {
    nodes.forEach(function (node) { node.classList.add("is-inview"); });
    document.body.classList.add("anim-ready");
    return;
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      const el = entry.target;
      if (entry.isIntersecting && entry.intersectionRatio >= 0.12) {
        el.classList.add("is-inview");
      } else if (!entry.isIntersecting) {
        el.classList.remove("is-inview");
      }
    });
  }, {
    threshold: [0, 0.12, 0.2, 0.35],
    rootMargin: "0px 0px -10% 0px"
  });

  nodes.forEach(function (node) { observer.observe(node); });

  // Arm CSS hide after first observe tick so in-view items don't flash out
  requestAnimationFrame(function () {
    nodes.forEach(function (node) {
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < vh * 0.9 && rect.bottom > vh * 0.05) {
        node.classList.add("is-inview");
      }
    });
    document.body.classList.add("anim-ready");
  });
})();
