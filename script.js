const sections = [document.querySelector(".hero"), ...document.querySelectorAll("main section[id]")];
const links = [...document.querySelectorAll(".nav-links a")];

const setActiveLink = (id) => {
  links.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("active", isActive);
    link.toggleAttribute("aria-current", isActive);
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
