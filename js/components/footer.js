export function footer() {
  const socialLinks = [{ name: "facebook" }, { name: "twitter" }, { name: "dribbble" }, { name: "behance" }];

  let socialHTML = "";
  for (const link of socialLinks) {
    socialHTML += `<a href="#"><i class="fa fa-${link.name}"></i></a>`;
  }

  let HTML = `
  <footer class="container">
      <div class="row">
        <div class="footer-div col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12">
          <h4>About Me</h4>
          <p>
            We have tested a number of registry fix and clean utilities and present our top 3 list on our site for your
            convenience.
          </p>
          <p class="lastp">
            Copyright &#169 2025 All rights reserved | This template is made with <i class="fa fa-heart-o"></i> by
            <a class="colorlib" href="#">Colorlib</a>
          </p>
        </div>
        <div class="footer-div col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12">
          <h4>Newsletter</h4>
          <p>Stay updated with our latest trends</p>
          <div class="input-div col-12">
            <input class="input-email" type="email" placeholder="Enter email address" name="email" />
            <div class="input-arrow">&#x1F852</div>
          </div>
          <p class="submitting">Submitting...</p>
        </div> 
        <div class="footer-div col-lg-2 col-12">
          <h4>Follow Me</h4>
          <p>Let us be social</p>
          <nav class="social-links">
            ${socialHTML}
          </nav>
        </div>
      </div>
    </footer>`;

  document.body.insertAdjacentHTML("beforeend", HTML);

  const submitDOM = document.querySelector(".input-arrow");
  const submittingTextDOM = document.querySelector(".submitting");

  submitDOM.addEventListener("click", () => {
    submittingTextDOM.classList.add("submitting-show");
  });
}
