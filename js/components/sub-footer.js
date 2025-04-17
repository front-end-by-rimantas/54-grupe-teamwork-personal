// export function subFooter () {
// const HTML = `
// <section class="container sub-footer">
//     <div class="row purple-row">
//         <div class="col-12 purple-content">
//             <a href="#">
//                 <img class="img-slide" src="../img/l2.png.webp" alt="creative">
//                 <img class="img-slide" src="../img/l3.png.webp" alt="premium labels anchor">
//                 <img class="img-slide" src="../img/l4.webp" alt="premium labels">
//                 <img class="img-slide" src="../img/l5.png" alt="premium mountains">
//                 <img class="img-slide" src="../img/l1.png" alt="premium labels crown">
//             </a>
//         </div>
//     </div>
// </section>`;
// document.body.insertAdjacentHTML("beforeend", HTML)
// }

    const subFooterImg = [
        {
            imgSrc: '../img/l2.png.webp',
            alt: 'creative',
        },

        {
            imgSrc: '../img/l3.png.webp',
            alt: 'premium labels anchor',
        },
        {
            imgSrc: '../img/l4.webp',
            alt: 'premium labels',
        },
        {
            imgSrc: '../img/l5.png',
            alt: 'premium labels mountains',
        },
        {
            imgSrc: '../img/l1.png',
            alt: 'premium labels crown',
        },
    ];
    export function subFooter () {
    let HTML = `
    <section class="container sub-footer">
        <div class="row purple-row">
            <div class="col-12 purple-content">
                <a href="#">`;
    
        for (let i = 0; i < subFooterImg.length; i++) {
            const { imgSrc, alt } = subFooterImg[i];
            HTML +=`<img src="${imgSrc}" alt="${alt}">`;
            }        
            HTML += `
                </a>
            </div>
        </div>
    </section>`;

    document.body.insertAdjacentHTML("beforeend", HTML)  
}
    



