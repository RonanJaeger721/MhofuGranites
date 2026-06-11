document.getElementById("year").textContent = new Date().getFullYear();

const animatedElements = document.querySelectorAll(".reveal, .reveal-item");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (animatedElements.length && !prefersReducedMotion) {
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
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );

  animatedElements.forEach((element) => revealObserver.observe(element));
} else {
  animatedElements.forEach((element) => element.classList.add("is-visible"));
}
