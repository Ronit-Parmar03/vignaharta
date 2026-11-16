(function () {
  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  document.querySelectorAll("[data-slider]").forEach(function (slider) {
    const track = slider.querySelector("[data-slider-track]");
    const prev = slider.querySelector("[data-slider-prev]");
    const next = slider.querySelector("[data-slider-next]");
    if (!track) return;

    let animating = false;
    let pointerId = null;
    let startX = 0;
    let scrollStart = 0;
    let dragging = false;
    let moved = false;
    let lastX = 0;
    let lastTime = 0;
    let velocity = 0;

    function cardStep() {
      const card = track.querySelector(".work-card");
      if (!card) return Math.round(track.clientWidth * 0.85);
      const styles = window.getComputedStyle(track);
      const gap = parseFloat(styles.columnGap || styles.gap || "20") || 20;
      return Math.round(card.getBoundingClientRect().width + gap);
    }

    function animateScroll(distance) {
      if (!distance || animating) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce || typeof track.scrollBy === "function") {
        if (reduce) {
          track.scrollLeft += distance;
          return;
        }
      }

      animating = true;
      track.classList.add("is-animating");
      const start = track.scrollLeft;
      const max = track.scrollWidth - track.clientWidth;
      const target = Math.max(0, Math.min(max, start + distance));
      const delta = target - start;
      if (Math.abs(delta) < 1) {
        animating = false;
        track.classList.remove("is-animating");
        return;
      }

      const duration = Math.min(900, Math.max(420, Math.abs(delta) * 0.9));
      let startTime = null;

      function frame(now) {
        if (!startTime) startTime = now;
        const progress = Math.min((now - startTime) / duration, 1);
        track.scrollLeft = start + delta * easeOutCubic(progress);
        if (progress < 1) {
          requestAnimationFrame(frame);
        } else {
          animating = false;
          track.classList.remove("is-animating");
        }
      }

      requestAnimationFrame(frame);
    }

    function step(direction) {
      animateScroll(direction * cardStep());
    }

    if (prev) prev.addEventListener("click", function () { step(-1); });
    if (next) next.addEventListener("click", function () { step(1); });

    track.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        step(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        step(1);
      }
    });

    track.addEventListener("pointerdown", function (event) {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      if (animating) return;
      pointerId = event.pointerId;
      dragging = true;
      moved = false;
      startX = event.clientX;
      lastX = event.clientX;
      lastTime = performance.now();
      velocity = 0;
      scrollStart = track.scrollLeft;
      track.classList.add("is-dragging", "is-animating");
      try { track.setPointerCapture(event.pointerId); } catch (err) { /* ignore */ }
    });

    track.addEventListener("pointermove", function (event) {
      if (!dragging || event.pointerId !== pointerId) return;
      const dx = event.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      const now = performance.now();
      const dt = Math.max(now - lastTime, 1);
      velocity = (event.clientX - lastX) / dt;
      lastX = event.clientX;
      lastTime = now;
      track.scrollLeft = scrollStart - dx;
    });

    function endDrag(event) {
      if (!dragging || (event && event.pointerId !== pointerId)) return;
      dragging = false;
      track.classList.remove("is-dragging");
      const flick = -velocity * 220;
      track.classList.remove("is-animating");
      if (moved && Math.abs(flick) > 18) {
        animateScroll(flick);
      } else {
        // Snap to nearest card after drag
        const stepSize = cardStep();
        const nearest = Math.round(track.scrollLeft / stepSize) * stepSize;
        animateScroll(nearest - track.scrollLeft);
      }
      pointerId = null;
    }

    track.addEventListener("pointerup", endDrag);
    track.addEventListener("pointercancel", endDrag);
    track.addEventListener("lostpointercapture", endDrag);

    // Prevent accidental link/image drag ghosting while swiping
    track.addEventListener("dragstart", function (event) {
      event.preventDefault();
    });

    track.addEventListener("click", function (event) {
      if (moved) {
        event.preventDefault();
        event.stopPropagation();
        moved = false;
      }
    }, true);
  });

  // Client logo marquee: pause on touch / pointer, allow horizontal nudge
  document.querySelectorAll(".client-marquee").forEach(function (marquee) {
    const track = marquee.querySelector(".client-marquee__track");
    if (!track) return;

    function pause() { track.style.animationPlayState = "paused"; }
    function play() {
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        track.style.animationPlayState = "running";
      }
    }

    marquee.addEventListener("pointerenter", pause);
    marquee.addEventListener("pointerleave", play);
    marquee.addEventListener("touchstart", pause, { passive: true });
    marquee.addEventListener("touchend", play, { passive: true });
  });
})();
