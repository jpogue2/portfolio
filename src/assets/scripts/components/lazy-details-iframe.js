// Lazy-load iframes inside <details> when opened
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("details").forEach((details) => {
    details.addEventListener("toggle", () => {
      if (!details.open) return;

      const iframe = details.querySelector("iframe[data-src]");
      if (iframe && !iframe.src) {
        iframe.src = iframe.dataset.src;
      }
    });
  });
});
