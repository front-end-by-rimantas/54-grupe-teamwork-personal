export function header() {
  const menu = [
    { text: "home", href: "/" },
    { text: "about", href: "/about/" },
    { text: "services", href: "/services/" },
    { text: "portfolio", href: "/portfolio/" },
    { text: "pricing", href: "/pricing/" },
    { text: "contacts", href: "/contacts/" },
  ];

  const HTML = `
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

// <a href="#">Home</a>
