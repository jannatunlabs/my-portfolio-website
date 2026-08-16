/* ==========================================================================
   MAIN.JS — shared behavior across all pages
   ========================================================================== */
(function () {
  "use strict";

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      links.classList.toggle("is-open", !open);
      document.body.style.overflow = !open ? "hidden" : "";
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        links.classList.remove("is-open");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---- Nav scrolled state ---- */
  var nav = document.querySelector(".site-nav");
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---- Footer year ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---- Back to top ---- */
  document.querySelectorAll("[data-back-to-top]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  /* ---- Contact form (client-side only — no backend wired up yet) ---- */
  var form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector("[data-form-status]");
      var name = form.querySelector("#name");
      var email = form.querySelector("#email");
      var message = form.querySelector("#message");
      var valid = true;

      [name, email, message].forEach(function (field) {
        var errorEl = field.parentElement.querySelector(".field-error");
        if (!field.value.trim()) {
          valid = false;
          field.setAttribute("aria-invalid", "true");
          if (errorEl) errorEl.textContent = "This field is required.";
        } else if (field === email && !/^\S+@\S+\.\S+$/.test(field.value)) {
          valid = false;
          field.setAttribute("aria-invalid", "true");
          if (errorEl) errorEl.textContent = "Enter a valid email address.";
        } else {
          field.removeAttribute("aria-invalid");
          if (errorEl) errorEl.textContent = "";
        }
      });

      if (!valid) {
        if (status) {
          status.textContent = "Please fix the highlighted fields.";
          status.className = "form-status is-error";
        }
        return;
      }

      var subject = encodeURIComponent(
        form.querySelector("#subject").value || "Portfolio contact form"
      );
      var body = encodeURIComponent(
        "Name: " + name.value + "\nEmail: " + email.value + "\n\n" + message.value
      );
      window.location.href =
        "mailto:jannatunferdous0836@gmail.com?subject=" + subject + "&body=" + body;

      if (status) {
        status.textContent = "Opening your email client to send this message…";
        status.className = "form-status is-success";
      }
    });
  }
})();
