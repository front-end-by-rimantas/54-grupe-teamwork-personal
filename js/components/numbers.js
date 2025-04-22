const counter = [
    {number: '2563', text: 'projects completed'},
    {number: '6784', text: 'happy clients'},
    {number: '2239', text: 'cups of coffee'},
    {number: '434', text: 'real professionals'},
]

export function countingNumbers() {
    let html = `<section class='container main-container'>
                    <div class='row '>`;

        for (const count of counter) {
            html += `
                        <div class='number col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12'>
                            <div class='count'>0</div>
                            <p class='text'>${count.text}</p>
                        </div>`;
    }
    html += `</div>
            </section>`;

    document.body.insertAdjacentHTML('beforeend', html);

    numbersAnimation();
    }

    function numbersAnimation() {
        const numbers = document.querySelectorAll('.count');

            numbers.forEach((number, index) => {
                const finalCount = counter[index].number;
                let count = 0;
                const duration = 3000;
                const increment = Math.ceil(finalCount / (duration / 100));

                const timer = setInterval(() => {
                    count += increment;
                    number.textContent = count > finalCount ? finalCount : count;

                    if (count >= finalCount) {
                        clearInterval(timer);
                    }
                }, 30);
            })
        }
    






