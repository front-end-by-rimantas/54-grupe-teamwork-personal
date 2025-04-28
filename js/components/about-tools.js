export function aboutTools() {
  const dataLeft = [
    {
      tool: "After Effects",
      progress: "85%",
    },
    {
      tool: "Photoshop",
      progress: "90%",
    },
    {
      tool: "Ilustrator",
      progress: "70%",
    },
  ];

  const dataRight = [
    {
      tool: "Sublime",
      progress: "95%",
    },
    {
      tool: "Sketch",
      progress: "85%",
    },
  ];

  let html = `<section class="container">
      <div class="row">
        <h3 class="tools-name">Tools Expertness</h3>
        <div class="progress-left-column col-12 col-lg-6">`;

  for (const item of dataLeft) {
    html += ` <div class="progress-bar">
            <div class="progress-bar-up">
              <div class="label">${item.tool}&nbsp</div>
              <div class="value">${item.progress}</div>
            </div>
            <div class="progress-bar-down">
              <div class="bar" style="width: ${item.progress}"></div>
            </div>
          </div>`;
  }

  html += `</div>
  <div class="progress-right-column col-12 col-lg-6">`;

  for (const item of dataRight) {
    html += ` <div class="progress-bar">
            <div class="progress-bar-up">
              <div class="label">${item.tool}&nbsp</div>
              <div class="value">${item.progress}</div>
            </div>
            <div class="progress-bar-down">
              <div class="bar" style="width: ${item.progress}"></div>
            </div>
          </div>`;
  }

  html += ` </div>
      </div>
    </section>`;

  document.body.insertAdjacentHTML("beforeend", html);
}
