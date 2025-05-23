export const activeSection = () => {
  const updateActiveLink = () => {
    const sections = document.querySelectorAll(".pp-section");
    const navLinks = document.querySelectorAll(".nav-menu li");

    let currentId = "";
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom > 0) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach((li) => {
      const anchor = li.querySelector("a");
      const href = anchor?.getAttribute("href");
      if (href === `#${currentId}`) {
        li.classList.add("active");
      } else {
        li.classList.remove("active");
      }
    });
  };

  updateActiveLink();
  window.addEventListener("scroll", updateActiveLink);
  return () => window.removeEventListener("scroll", updateActiveLink);
};


// Pagination
export const getPagination = (totalNumber, sort) => {
  let arr = new Array(Math.ceil(totalNumber / sort))
    .fill()
    .map((_, idx) => idx + 1);
  return arr;
};

// change pagination and update pagination and content
export const pagination = (listClass, sort, active) => {
  let list = document.querySelectorAll(listClass);
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (active === 1) {
      if (i < sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    } else {
      if (i >= (active - 1) * sort && i < active * sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
};
