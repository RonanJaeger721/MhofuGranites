document.getElementById("year").textContent = new Date().getFullYear();

const animatedElements = document.querySelectorAll(".reveal, .reveal-item, .gallery-new");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (animatedElements.length && !prefersReducedMotion && "IntersectionObserver" in window) {
  document.body.classList.add("motion-ready");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0, rootMargin: "0px 0px -24px 0px" }
  );

  animatedElements.forEach((element) => revealObserver.observe(element));
} else {
  animatedElements.forEach((element) => element.classList.add("is-visible"));
}
