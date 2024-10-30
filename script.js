const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const allLinks = document.querySelectorAll("a:link");

yearEl.textContent = currentYear;

btnNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

// scrolling smooth

allLinks.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");

    if (id === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const targetElement = document.querySelector(id);
      targetElement.scrollIntoView({ behavior: "smooth" });
    }

    if (this.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});

//sticky Nav
const hero = document.querySelector(".section-hero");

const headerObserver = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) {
      document.body.classList.add("sticky");
    } else document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: `-80px`,
  }
);

headerObserver.observe(hero);
