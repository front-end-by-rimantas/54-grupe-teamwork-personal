const items = [
  { image: "", title: "2D Vinyl Design", text: "vector", tag: "vector" },
  { image: "", title: "2D Vinyl Design", text: "vector", tag: "Raster" },
  { image: "", title: "Creative Poster Design", text: "Agency", tag: "UI/UX" },
  { image: "", title: "Embosed Logo Design", text: "Portal", tag: "Printing" },
  { image: "", title: "3D Helmet Design", text: "vector", tag: "vector" },
  { image: "", title: "2D Vinyl Design", text: "raster", tag: "Raster" },
];

const tagsList = ["all"].concat(Array.from(new Set(Object.values(items).map(({ tag }) => tag))));

export function featuredProjectsSection() {
  let selectedCategory = "all";

  let html = `<section class='container featured-projects-section'><div class="row">`;

  tagsList.forEach((tag) => {
    html += `<button class="featured-projects-section-category" data-category-tag="${tag}">${tag}</button>`;
  });

  html += `</div><div class="row featured-projects-section-items">`;
  html += `</div></section>`;

  document.body.insertAdjacentHTML("beforeend", html);

  const categoryButtonsEls = document.querySelectorAll(".featured-projects-section-category");
  const itemsEl = document.querySelector(".featured-projects-section-items");

  regenerateItems(itemsEl, selectedCategory);
  checkActiveCategory(selectedCategory, categoryButtonsEls);

  for (const btn of categoryButtonsEls) {
    btn.addEventListener("click", () => {
      console.log("catbtn pressed");
      if (selectedCategory !== btn.dataset.categoryTag) {
        selectedCategory = btn.dataset.categoryTag;
        checkActiveCategory(selectedCategory, categoryButtonsEls);
        regenerateItems(itemsEl, selectedCategory);
      }
    });
  }
}

function regenerateItems(itemsEl, selectedCategory) {
  let html = "";
  items.forEach(({ title, tag }) => {
    if (selectedCategory === "all" || tag === selectedCategory) {
      html += `
        <div class="col-lg-4 col-md-6 featured-projects-section-block">
                ${title}
        </div>
      `;
    }
  });
  itemsEl.innerHTML = html;
}

function checkActiveCategory(category, categoryButtons) {
  for (const btn of categoryButtons) {
    console.log("btn", btn.dataset.categoryTag, category);
    if (btn.dataset.categoryTag === category) {
      btn.classList.add("featured-projects-section-category-active");
    } else {
      btn.classList.remove("featured-projects-section-category-active");
    }
  }
}
