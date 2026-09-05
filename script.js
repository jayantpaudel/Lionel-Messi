const sections = [...document.querySelectorAll("main section[id]")];
const links = [...document.querySelectorAll(".nav-links a")];

const setActiveLink = (id) => {
  links.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible) setActiveLink(visible.target.id);
  },
  { rootMargin: "-32% 0px -54%", threshold: [0.1, 0.35, 0.6] },
);

sections.forEach((section) => observer.observe(section));
