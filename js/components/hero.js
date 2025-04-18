export function hero() {
  const HTML = `
       <section class="hero-section">
      <div class="content">
          <h6 class="topic">THIS IS ME</h6>
          <h1 class="name"> PHILIP GILBERT</h1> 
          <p class="hero-text">You will begin to realise why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures.</p>
          <button class="btn">DISCOVER NOW</button>
      </div>
      <img class="img" src="./img/hero-img.webp" alt="Philip Gilbert">
</section>`;
  document.body.insertAdjacentHTML("beforeend", HTML);
}
