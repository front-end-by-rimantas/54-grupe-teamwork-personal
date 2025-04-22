import { button1Html } from "./buttons.js";

export function aboutMe() {
    const HTML = `
         <section class="about-me-section">
      <div class="content">
          <h1 class="topic">ABOUT ME</h1>
          <h2 class="personal-details">PERSONAL DETAILS</h2>
          <p class="hero-text">Here, I focus on a range of items and features that we use in life without giving them a second thought. such as Coca Cola. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          ${button1Html("#", "VIEW FULL DETAILS")}
      </div>
      <img class="img" src="./img/about-img.webp" alt="about me">
</section>`;
    document.body.insertAdjacentHTML("beforeend", HTML);
  }
  