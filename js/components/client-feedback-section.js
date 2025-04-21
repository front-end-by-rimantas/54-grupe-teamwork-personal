import { sectionTitleHtml } from "./section-title.js";

const items = [
  {
    name: "1 Harriet Maxwell",
    position: "Designer at Airbnb",
    message:
      "Clean design and quick load times. It's rare to find a website that just works this smoothly on both desktop and mobile devices.",
    avatarImage: "img/user1.webp",
  },
  {
    name: "2 Carolyn Craig",
    position: "Product Manager at Meta",
    message:
      "I love how intuitive everything feels. The layout guides you naturally, and the content is easy to read without feeling overwhelming.",
    avatarImage: "img/user2.webp",
  },
  {
    name: "3 Sarah Underwood",
    position: "Consultant at IBM",
    message:
      "I was impressed with the responsiveness across screen sizes. Everything stays crisp and usable no matter what device I’m using.",
    avatarImage: "img/user1.webp",
  },
  {
    name: "4 Aaron Trevino",
    position: "Engineer at Netflix",
    message: "Really appreciate the performance optimizations. Pages load instantly, even with high-quality images and complex layouts.",
    avatarImage: "img/user2.webp",
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

  items.forEach(({ name, message, position, avatarImage }) => {
    html += `
        <a class="client-feedback-section-block" href="#">
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

  html += `     </div>
            </div>
            
            <div class="client-feedback-section-buttons">
                <div>
                    <button class="client-feedback-section-upBtn"><i class="fa fa-arrow-up" aria-hidden="true"></i></button>
                    <button class="client-feedback-section-downBtn"><i class="fa fa-arrow-down" aria-hidden="true"></i></button>
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

  let blockWidth = 400;
  let shiftWidth = 400;
  let allowClicking = true;
  const animationTimeMs = 100;

  const enableAnimations = (allow) => {
    blockListEl.style.transition = allow ? `transform ${animationTimeMs}ms` : "none";
  };

  function updateWidth() {
    blockWidth = blockListWrapperEl.offsetWidth;
    shiftWidth = blockWidth / 2;
    if (shiftWidth <= 400) shiftWidth = blockWidth;
    blockListEl.style.width = blockWidth * (blockListEl.children.length + 1) + "px";
    blockListEl.style.transform = `translateX(${-shiftWidth}px)`;

    for (const el of blockListEl.children) {
      el.style.width = shiftWidth + "px";
    }
  }

  updateWidth();
  window.addEventListener("resize", updateWidth);

  upBtn.addEventListener("click", () => {
    if (!allowClicking) return;
    allowClicking = false;
    enableAnimations(true);
    blockListEl.style.transform = `translateX(${-shiftWidth * 2}px)`;

    setTimeout(() => {
      enableAnimations(false);
      blockListEl.append(blockListEl.firstElementChild);
      blockListEl.style.transform = `translateX(${-shiftWidth}px)`;
      allowClicking = true;
    }, animationTimeMs);
  });

  downBtn.addEventListener("click", () => {
    if (!allowClicking) return;
    allowClicking = false;
    enableAnimations(true);
    blockListEl.style.transform = `translateX(0)`;

    setTimeout(() => {
      enableAnimations(false);
      blockListEl.prepend(blockListEl.lastElementChild);
      blockListEl.style.transform = `translateX(${-shiftWidth}px)`;
      allowClicking = true;
    }, animationTimeMs);
  });
}
