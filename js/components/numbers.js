const counter = [
    {number: '2563', text: 'projects completed'},
    {number: '6784', text: 'happy clients'},
    {number: '2239', text: 'cups of coffee'},
    {number: '434', text: 'real professionals'},
]

export function countingNumbers() {
    let html = `<section class="container main-container">`;

    counter.forEach(item => {
        html += `<div class="row col-3">
                        <div class="number">
                            <span class="count" data-target=${item.number}">0</span>
                            <span class="text">${item.text}</span>
                        </div>
                        <p class="text">projects completed</p>
                    </div>
                </section>`;
    });
    html += `</section>`;

    document.body.insertAdjacentHTML("beforeend", html);
    countAnimation();
                    
}





