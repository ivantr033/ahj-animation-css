export default class CallbackChat {
    constructor(element) {
        this.element = element;
        this.fabBtn = this.element.querySelector('#callback-toggle-fab-btn');
        this.formCard = this.element.querySelector('#callback-form-card');
        this.closeBtn = this.element.querySelector('#callback-close-form-btn');
    }

    init() {
        // When the round button is pressed, it hides itself and the form appears.
        this.fabBtn.addEventListener('click', () => {
            this.fabBtn.classList.add('hidden');
            this.formCard.classList.remove('callback-card-hidden');
        });

        // When the close button is pressed, it hides the form and shows the round button
        this.closeBtn.addEventListener('click', () => {
            this.formCard.classList.add('callback-card-hidden');
            this.fabBtn.classList.remove('hidden');
        });
    }
}
