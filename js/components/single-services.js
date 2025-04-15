const items = [
  {
    image: "",
    title: "Web Design",
    text: "It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.",
  },
  {
    image: "",
    title: "Web Development",
    text: "If you are an entrepreneur, you know that your success cannot depend on the opinions of others. Like the wind, opinions.",
  },
  {
    image: "",
    title: "Photography",
    text: "Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills.",
  },
  {
    image: "",
    title: "Clipping Path",
    text: "Hypnosis quit smoking methods maintain caused quite a stir in the medical world over the last two decades. There is a lot of argument.",
  },
  {
    image: "",
    title: "Apps Interface",
    text: "Do you sometimes have the feeling that you're running into the same obstacles over and over again? Many of my conflicts.",
  },
  {
    image: "",
    title: "Graphic Design",
    text: "You've heard the expression, “Just believe it and it will come.” Well, technically, that is true, however, 'believing' is not just thinking that.",
  },
];

export function singleServices() {
  const html = `<section class='container single-services'>`;

  for (let i = 0; i < items.length; i++) {
    const { image, title, text } = items[i];
    html += `<div>${title}</div>`;
  }

  html += "</section>";

  document.body.insertAdjacentHTML("beforeend", html);
}
