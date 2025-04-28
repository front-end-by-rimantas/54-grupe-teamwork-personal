export function header() {
  let base = "http://localhost:5477/";
  let projectName = "";

  if (location.hostname !== "localhost") {
    projectName = "/54-grupe-teamwork-personal";
    // projectName = '/' + location.pathname.split('/')[1];
    base = "https://front-end-by-rimantas.github.io/54-grupe-teamwork-personal/";
    // base = location.origin + projectName
  }
  document.head.insertAdjacentHTML("afterbegin", `<base href ="${base}">`);

  const menu = [
    { text: "home", href: "/" },
    { text: "about", href: "/about/" },
    { text: "services", href: "/services/" },
    { text: "portfolio", href: "/portfolio/" },
    { text: "pricing", href: "/pricing/" },
    { text: "blog", drop: true },
    { text: "pages", drop: true },
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
      <button class="dropbtn">${link.text}
        <i class="fa fa-angle-down"></i>
      </button>
      <div class="dropdown-content header-dropdown-shadow">
        <a href="#">Blog Home</a>
        <a href="#">Blog Single</a>
      </div>
    </div>`;
    } else {
      linksHTML += `<a class='${activePage}' href=".${link.href}" > ${link.text} </a>`;
    }
  }

  let HTML = `
    <header>
      <div class="header-main-div">
        <div class="logo">

          <a href="./"> <img src="./img/logo.webp" alt="Logo" /> </a>

        </div>
        <div class=" meniu-icon">
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
}

// dropdown - content; hower addEventListener
