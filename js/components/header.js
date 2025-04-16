export function header() {
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
    let projectName = "";
    if (projectName + link.href === location.pathname) {
      activePage = "active";
    }
    if (link.drop === true) {
      linksHTML += `<div class="dropdown">
    <button class="dropbtn">${link.text}
      <i class="fa fa-angle-down"></i>
    </button>
    <div class="dropdown-content nav-links">
      <a href="#">Blog Home</a>
      <a href="#">Blog Single</a>
    </div>
    </div>`;
    } else {
      linksHTML += `<a class='${activePage}' href=".${link.href}" target="_blanc" > ${link.text} </a>`;
    }
  }

  let HTML = `
        <header class="container">
      <div class="logo col-2">
        <img src="./img/logo.webp" alt="Logo" />
      </div>
      <nav class="nav-links col-8 m-2">  
      ${linksHTML}         
      </nav>
    </header>`;
  document.body.insertAdjacentHTML("beforeend", HTML);
}

// dropdown - content; hower addEventListener
