const items = [
  {
    image: "img/b1.webp",
    authorImage: "img/user.webp",
    authorName: "Mark Wiens",
    date: "13th Dec",
    heartCount: 15,
    commentCount: 4,
    title: "Break Through Self Doubt And Fear",
    text: "Dream interpretation has many forms; it can be done be done for the sake of fun, hobby or can be taken up as a serious career.",
  },
];

export function latestPosts() {
  let html = `<section class='container latest-posts'><div class="row">`;

  for (let i = 0; i < items.length; i++) {
    const { image, authorName, authorImage, date, heartCount, commentCount } = items[i];
    html +=
      /*html*/
      `<div href="#" class="col-lg-4 col-md-6 latest-posts-block">
        <a href="#"><img src="${image}" alt="image" class="latest-posts-image"></a>
        <div class="latest-posts-info">
          <a href="#" class="latest-posts-info-author">
            <img src="${authorImage}" alt="author image">
            <span>${authorName}</span>
          </a>
          <div>
            <div class="latest-posts-block-date">${date}</div>
            <a href="#" class="latest-posts-block-hearts" title="likes">
                <i class="fa fa-heart" aria-hidden="true"></i> ${heartCount}
            </a>
            <a href="#" class="latest-posts-block-comments" title="comments">
                <i class="fa fa-comment" aria-hidden="true"></i> ${commentCount}
            </a>
          </div>
        </div>
      </div>`;
  }

  html += `</div></section>`;

  document.body.insertAdjacentHTML("beforeend", html);
}
