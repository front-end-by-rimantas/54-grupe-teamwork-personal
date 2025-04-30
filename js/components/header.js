export function header() {
  let base = "http://localhost:5477/";
  let projectName = "";

  if (location.hostname !== "localhost") {
    projectName = "/54-grupe-teamwork-personal";
    base = "https://front-end-by-rimantas.github.io/54-grupe-teamwork-personal/";
  }
  document.head.insertAdjacentHTML("afterbegin", `<base href ="${base}">`);

  const menu = [
    { text: "home", href: "/" },
    { text: "about", href: "/about/" },
    { text: "services", href: "/services/" },
    { text: "portfolio", href: "/portfolio/" },
    { text: "pricing", href: "/pricing/" },
    { text: "blog", drop: true, class: "active-upper" },
    { text: "pages", drop: true, class: "active-lower" },
    { text: "contacts", href: "/contacts/" },
  ];

  const lp = location.pathname;
  const currentPage = lp.length > 1 && lp.at(-1) === "/" ? lp.slice(0, -1) : lp;
  let linksHTML = "";

  for (const link of menu) {
    let activePage = "";
    if (projectName + link.href === location.pathname) {
      activePage = "active";
    }
    if (link.drop === true) {
      linksHTML += `
    <div class="dropdown">
      <button type="button" class="dropbtn ">${link.text}
        <i class="fa fa-angle-down"></i>
      </button>
      <div class="dropdown-content header-dropdown-shadow ${link.class}">
        <a href="#">Blog Home</a>
        <a href="#">Blog Single</a>
      </div>
    </div>`;
    } else {
      linksHTML += `<a class='${activePage}' href=".${link.href}" > ${link.text} </a>`;
    }
  }
  const cross =
    '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg"><path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path></svg>';
  let HTML = `
    <header>
      <div class='mobile-bg'></div>
        <div class="header-main-div">
          <div class="logo">

            <a href="./"> <img src="./img/logo.webp" alt="Logo" /> </a>

          </div>
          <div class='menu-cross'>${cross}</div>
          <div class="meniu-icon">
            <i class="fa fa-bars"></i>
          </div>
          <nav class="nav-links">  
            ${linksHTML}         
          </nav>
        </div>
    </header>`;
  document.body.insertAdjacentHTML("beforeend", HTML);

  const headerEl = document.querySelector("header");

  document.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
      headerEl.classList.add("shadow");
    } else {
      headerEl.classList.remove("shadow");
    }
  });

  const blogDivEl = document.querySelector(".active-upper");
  const pagesDivEl = document.querySelector(".active-lower");
  const btnEl = document.querySelectorAll(".dropbtn");

  btnEl[0].addEventListener("click", () => {
    blogDivEl.classList.toggle("active-upper");
  });
  btnEl[1].addEventListener("click", () => {
    pagesDivEl.classList.toggle("active-lower");
  });

  const menuIconEl = document.querySelector(".meniu-icon");
  const menuCrossEl = document.querySelector(".menu-cross");
  const navLinksEl = document.querySelector(".nav-links");
  const mobileBgEl = document.querySelector(".mobile-bg");

  menuIconEl.addEventListener("click", () => {
    navLinksEl.classList.add("nav-links-active");
    menuIconEl.classList.add("menu-icon-none");
    menuCrossEl.classList.add("menu-icon-flex");
    mobileBgEl.style.display = "block";
  });

  menuCrossEl.addEventListener("click", () => {
    navLinksEl.classList.remove("nav-links-active");
    menuIconEl.classList.remove("menu-icon-none");
    menuCrossEl.classList.remove("menu-icon-flex");
    mobileBgEl.style.display = "";
  });
}
