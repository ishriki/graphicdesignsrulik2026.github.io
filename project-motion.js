const animatedCovers = document.querySelectorAll('.cover.has-motion');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      entry.target.classList.toggle('is-visible', entry.isIntersecting);
    }
  }, { threshold: 0.5 });

  animatedCovers.forEach((cover) => observer.observe(cover));
}
