document.addEventListener('DOMContentLoaded', () => {
    generateDots(document.querySelector('.dots-container'), window.innerWidth > 800 ? 15 : 7);
})

function generateDots(targetElement, numberOfDots = 15) {
    var url = 'https://independentspaceindex.at/spaces.json/v:2';

    fetch(url).then(res => res.json()).then(res => {
        const spaces = res;
        for (let i = 0; i < numberOfDots; i++) {
            let a = document.createElement('a');
            a.href = spaces[i].website;

            const dotsize = 15;
            const color = 'white';

            let dot = document.createElement('div');

            dot.className = 'spaceDot';
            dot.style.position = 'absolute';
            dot.style.backgroundColor = color;
            dot.style.width = dotsize + 'px';
            dot.style.height = dotsize + 'px';
            dot.style.borderRadius = '50%';
            dot.style.zIndex = 100000;
            // dot.style.opacity = 0;
            // dot.style.animationDelay = numbers.length + 's';
            // dot.style.animationName = 'fadeIn';
            // dot.style.animationDuration = '1s';
            // dot.style.animationIterationCount = '1';

            let posx = (Math.random() * 100);
            let posy = (Math.random() * 100);

            a.style.position = 'absolute';
            a.style.left = posx + '%';
            a.style.top = posy + '%';

            a.appendChild(dot);
            targetElement.appendChild(a);
        }
    })
}