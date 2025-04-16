export function subFooter () {
const HTML = `
<section class="container sub-footer">
    <div class="row purple-row">
        <div class="col-12 purple-content">
            <a href="#">
                <img class="img-slide" src="../img/l2.png.webp" alt="creative">
                <img class="img-slide" src="../img/l3.png.webp" alt="premium labels anchor">
                <img class="img-slide" src="../img/l4.webp" alt="premium labels">
                <img class="img-slide" src="../img/l5.png" alt="premium mountains">
                <img class="img-slide" src="../img/l1.png" alt="premium labels crown">
            </a>
        </div>
    </div>
</section>`;
document.body.insertAdjacentHTML("beforeend", HTML)
}



