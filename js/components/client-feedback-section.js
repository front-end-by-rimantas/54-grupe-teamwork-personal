import { sectionTitleHtml } from "./section-title.js";

const items = [
  {
    name: "Harriet Maxwell",
    position: "Designer at Airbnb",
    message:
      "Clean design and quick load times. It's rare to find a website that just works this smoothly on both desktop and mobile devices. (1)",
    avatarImage: "img/user1.webp",
    link: "#",
  },
  {
    name: "Carolyn Craig",
    position: "Product Manager at Meta",
    message:
      "I love how intuitive everything feels. The layout guides you naturally, and the content is easy to read without feeling overwhelming. (2)",
    avatarImage: "img/user2.webp",
    link: "#",
  },
  {
    name: "Sarah Underwood",
    position: "Consultant at IBM",
    message:
      "I was impressed with the responsiveness across screen sizes. Everything stays crisp and usable no matter what device I'm using. (3)",
    avatarImage: "img/user1.webp",
    link: "#",
  },
  {
    name: "Aaron Trevino",
    position: "Engineer at Netflix",
    message:
      "Really appreciate the performance optimizations. Pages load instantly, even with high-quality images and complex layouts. (4)",
    avatarImage: "img/user2.webp",
    link: "#",
  },
];

export function clientFeedbackSection() {
  let html = `<div class="container client-feedback-section">
                ${sectionTitleHtml(
                  "Client's Feedback About Me",
                  "It is very easy to start smoking but it is an uphill task to quit it. Ask any chain smoker or even a person."
                )}
                <div class="row">
                    <div class="client-feedback-section-block-list-wrapper">
                        <div class="client-feedback-section-block-list">
                `;

  items.forEach(({ name, message, position, avatarImage, link }) => {
    html += `
        <a class="col-12 client-feedback-section-block" href="${link}">
            <div class="client-feedback-section-block-avatar">
                <img src="${avatarImage}" alt="avatar">
            </div>
            <div class="client-feedback-section-block-details">
                <p>${message}</p>
                <p>${name}</p>
                <p>${position}</p>
            </div>
        </a>
        `;
  });

  html += `   </div>
              <div class="client-feedback-section-buttons">
                <div>
                  <button class="client-feedback-section-upBtn"><i class="fa fa-arrow-up" aria-hidden="true"></i></button>
                  <button class="client-feedback-section-downBtn"><i class="fa fa-arrow-down" aria-hidden="true"></i></button>
                </div>
              </div>
            </div>
        </div>
    </div>`;

  document.body.insertAdjacentHTML("beforeend", html);

  //animation and buttons
  const blockListWrapperEl = document.querySelector(".client-feedback-section-block-list-wrapper");
  const blockListEl = document.querySelector(".client-feedback-section-block-list");
  const upBtn = document.querySelector(".client-feedback-section-upBtn");
  const downBtn = document.querySelector(".client-feedback-section-downBtn");

  let visibleItemCount = 2;

  function checkIndexes() {
    Array.from(blockListEl.children).forEach((block, index) => {
      if (index > visibleItemCount - 1) {
        block.style.display = "none";
        block.style.width = visibleItemCount === 2 ? "50%" : "100%";
      } else {
        block.style.display = "";
        block.style.width = "";
      }
    });
  }

  function checkSizes() {
    Array.from(blockListEl.children).forEach((block, index) => {
      if(block.style.display !== "none"){
        block.style.transform = "translateX(-100)"
      }
    });

    visibleItemCount = blockListWrapperEl.clientWidth < 850 ? 1 : 2;
    checkIndexes();
  }

  checkSizes();

  upBtn.addEventListener("click", () => {
    blockListEl.append(blockListEl.children[0]);
    checkIndexes();
  });

  downBtn.addEventListener("click", () => {
    blockListEl.prepend(blockListEl.children[blockListEl.children.length - 1]);
    checkIndexes();
  });

  window.addEventListener("resize", checkSizes);
}
