const items = [
  {
    icon: "pie-chart",
    title: "Web Design",
    text: "It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.",
  },
  {
    icon: "desktop",
    title: "Web Development",
    text: "If you are an entrepreneur, you know that your success cannot depend on the opinions of others. Like the wind, opinions.",
  },
  {
    icon: "camera",
    title: "Photography",
    text: "Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills.",
  },
  {
    icon: "clipboard",
    title: "Clipping Path",
    text: "Hypnosis quit smoking methods maintain caused quite a stir in the medical world over the last two decades. There is a lot of argument.",
  },
  {
    icon: "picture-o",
    title: "Apps Interface",
    text: "Do you sometimes have the feeling that you're running into the same obstacles over and over again? Many of my conflicts.",
  },
  {
    icon: "rocket",
    title: "Graphic Design",
    text: "You've heard the expression, “Just believe it and it will come.” Well, technically, that is true, however, 'believing' is not just thinking that.",
  },
];

export function singleServices() {
  let html = `<section class='container single-services'>
                <div class="row">
                  <div class="col-12">
                    <div class="section-title">
                      <h1>My Offered Services</h1>
                      <p class="col-12">At about this time of year, some months after New Year's resolutions have been made and kept, or made and neglected.</p>
                </div>`;

  for (let i = 0; i < items.length; i++) {
    const { icon, title, text } = items[i];
    html +=
      /*html*/
      `<div class="col-lg-4 col-md-6 single-services-block">
        <div class="single-services-icon"><i class="fa fa-${icon || "desktop"}" aria-hidden="true"></i></div>
        <a href="#" class="single-services-link">${title}</a>
        <p class="single-services-text">${text}</p>
    </div>`;
  }

  html += `</div></section>`;

  document.body.insertAdjacentHTML("beforeend", html);
}
