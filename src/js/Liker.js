import heartImg from '../pic/heart.png';

export default class Liker {
    constructor(element) {
        this.element = element;
        this.triggerBtn = this.element.querySelector('#liker-trigger-btn');
        this.sandbox = this.element.querySelector('.liker-sandbox-area');
    }

    init() {
        this.triggerBtn.addEventListener('click', () => this.spawnHeart());
    }

    spawnHeart() {
        const heart = document.createElement('img');
        heart.src = heartImg;
        heart.className = 'floating-heart-element';

        // Random assignment of one of the 4 trajectories
        const randomPathIdx = Math.floor(Math.random() * 4) + 1;
        heart.style.animation = `heart-path-${randomPathIdx} 500ms ease-out forwards`;

        this.sandbox.appendChild(heart);

        // Mandatory physical removal of the element from the DOM using native events
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}
