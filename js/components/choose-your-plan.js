import { sectionTitleHtml } from "./section-title.js";

const plans = [
  {
    number: "01",
    title: "Economy",
    price: "199.00",
  },
  {
    number: "02",
    title: "Business",
    price: "299.00",
  },
  {
    number: "03",
    title: "Premium",
    price: "399.00",
  },
  {
    number: "04",
    title: "Exclusive",
    price: "499.00",
  },
];

export function choosePlan() {
  let html = `
    <section class="container plan-container">
        ${sectionTitleHtml(
          "Choose Your Plan",
          "When someone does something that they know that they shouldn't do, did they."
        )}
        <div class="row row-background">`;

  for (const plan of plans) {
    html += `
        <div class="plan-column col-12 col-md-6 col-lg-3">
          <div class="column-upper">
            <div class="outer-circle">
              <div class="inner-circle">${plan.number}</div>
            </div>
          </div>

          <div class="column-title">
            <h4>${plan.title}</h4>
            <p>For the individuals</p>
          </div>
          <div class="column-text">
            <span class="column-line"></span>
            <p>Secure online transfer</p>
            <span class="column-line"></span>
            <p>Unlimited styles for interface</p>
            <span class="column-line"></span>
            <p>Reliable Customer Service</p>
            <span class="column-line"></span>
          </div>
          <div class="price"><i class="fa fa-gbp"></i>${plan.price}</div>
        </div>`;
  }

  html += `</div>
    </section>`;

  document.body.insertAdjacentHTML("beforeend", html);
}
