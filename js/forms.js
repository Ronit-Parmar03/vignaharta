(function () {
  const form = document.querySelector("[data-quote-form], [data-contact-form]");
  if (!form || !window.SITE) return;

  const status = form.querySelector("[data-form-status]");
  const business = form.querySelector("[name='business']");
  const service = form.querySelector("[name='service']");
  const extra = form.querySelector("[data-extra-fields]");

  if (status) {
    status.textContent = "";
    status.className = "form-status";
  }

  const params = new URLSearchParams(window.location.search);
  if (business && params.get("business")) business.value = params.get("business");
  if (service && params.get("service")) service.value = params.get("service");

  function needsManpower() {
    const biz = business ? business.value : "";
    const svc = (service ? service.value : "").toLowerCase();
    return biz === "dn-enterprise" || svc === "labour-supply";
  }

  function syncExtra() {
    if (!extra) return;
    extra.classList.toggle("is-visible", needsManpower());
  }

  const serviceOwner = {
    "labour-supply": "dn-enterprise",
    civil: "vignaharta",
    materials: "vignaharta",
    cleaning: "vignaharta",
    infrastructure: "vignaharta"
  };

  function syncBusiness() {
    if (service && business && serviceOwner[service.value]) {
      business.value = serviceOwner[service.value];
    }
    syncExtra();
  }

  if (business) business.addEventListener("change", syncExtra);
  if (service && service.tagName === "SELECT") {
    service.addEventListener("change", syncBusiness);
    syncBusiness();
  } else {
    syncExtra();
  }

  function setError(field, message) {
    const wrap = field.closest(".field, .check");
    const slot = wrap ? wrap.querySelector(".error") : null;
    if (slot) slot.textContent = message || "";
    if (wrap) wrap.classList.toggle("is-invalid", Boolean(message));
    if (message) field.setAttribute("aria-invalid", "true");
    else field.removeAttribute("aria-invalid");
  }

  function validEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  function validPhone(value) {
    const trimmed = value.trim();
    const digits = trimmed.replace(/\D/g, "");
    if (trimmed.startsWith("+")) return digits.length >= 8 && digits.length <= 15;
    if (digits.length === 10) return true;
    return digits.length === 12 && digits.startsWith("91");
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (form.dataset.pending === "true") return;

    let valid = true;
    form.querySelectorAll("[required]").forEach(function (field) {
      if (field.type === "checkbox") {
        const message = field.checked ? "" : "Please confirm to continue.";
        setError(field, message);
        if (message) valid = false;
        return;
      }
      const message = field.value.trim() ? "" : "This field is required.";
      setError(field, message);
      if (message) valid = false;
    });

    const email = form.querySelector("[name='email']");
    const phone = form.querySelector("[name='phone']");
    if (email && email.value.trim() && !validEmail(email.value)) {
      setError(email, "Enter a valid email address.");
      valid = false;
    }
    if (phone && phone.value.trim() && !validPhone(phone.value)) {
      setError(phone, "Enter a valid phone number.");
      valid = false;
    }

    if (!valid) {
      const first = form.querySelector(".is-invalid input, .is-invalid select, .is-invalid textarea, .is-invalid .check input");
      if (first) first.focus();
      return;
    }

    const honey = form.querySelector("[name='_honey']");
    if (honey && honey.value) {
      if (status) {
        status.className = "form-status";
        status.textContent = "Thank you. Your enquiry has been noted.";
      }
      form.reset();
      return;
    }

    const selected = business ? business.value : "dn-enterprise";
    const endpoint = (window.SITE.forms.endpoints || {})[selected] || "";
    if (!endpoint) {
      if (status) {
        status.className = "form-status is-error";
        status.textContent = "Please email d.n.enterprise2710@gmail.com or call +91 95379 61079.";
      }
      return;
    }

    const submit = form.querySelector("[type='submit']");
    form.dataset.pending = "true";
    if (submit) submit.disabled = true;
    if (status) {
      status.className = "form-status is-pending";
      status.textContent = "Sending your enquiry…";
    }

    const payload = {
      _subject: "Website enquiry — " + window.SITE.company,
      _template: "table",
      _captcha: "false"
    };
    new FormData(form).forEach(function (value, key) {
      if (key === "_honey") return;
      payload[key] = value;
    });

    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload)
    }).then(function (response) {
      if (!response.ok) throw new Error("Request failed");
      return response.json();
    }).then(function () {
      if (status) {
        status.className = "form-status";
        status.textContent = "Thank you. Your enquiry has been sent. Our team will respond shortly.";
      }
      form.reset();
      syncExtra();
    }).catch(function () {
      if (status) {
        status.className = "form-status is-error";
        status.textContent = "The enquiry could not be sent. Please email d.n.enterprise2710@gmail.com or call +91 95379 61079.";
      }
    }).finally(function () {
      form.dataset.pending = "false";
      if (submit) submit.disabled = false;
    });
  });
})();
