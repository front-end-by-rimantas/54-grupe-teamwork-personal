export function sectionTitle(title, description) {
  const HTML = `
        <section class="container section-container">
        <div class="row">
                <div class="col-12">
                <div class="section-title">
                    <h1>${title}</h1>
                    <p class="col-12">${description}</p>
                </div>
            </div>
        </section>`;
  document.body.insertAdjacentHTML("beforeend", HTML);
}


// sectionTitle("My Qualifications", "Who are in extremely love with eco friendly system.");
// sectionTitle("Frequently Asked Questions", "When someone does something that they know that they shouldn't do, did they really have a choice. Maybe what I mean to say is did they really have a chance. You can take two people.");





