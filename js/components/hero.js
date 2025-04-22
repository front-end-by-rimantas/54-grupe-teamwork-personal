import { button1Html } from "./buttons.js";

export function hero() {
  const HTML = `
       <section class="hero-section">
      <div class="content">
          <h6 class="topic">THIS IS ME</h6>
          <h1 class="name"> PHILIP GILBERT</h1> 
          <p class="hero-text">You will begin to realise why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures.</p>
          ${button1Html("#", "DISCOVER NOW")}
      </div>
      <img class="img" src="./img/hero-img.webp" alt="Philip Gilbert">
</section>`;
  document.body.insertAdjacentHTML("beforeend", HTML);
}
