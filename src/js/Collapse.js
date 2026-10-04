export default class Collapse {
    constructor(element) {
        this.element = element;
        this.triggerBtn = this.element.querySelector('#collapse-trigger-btn');
        this.contentWrapper = this.element.querySelector('#collapse-content-wrapper');
        this.isCollapsed = true;
    }

    init() {
        this.triggerBtn.addEventListener('click', () => this.toggle());
    }

    toggle() {
        if (this.isCollapsed) {
            // Dynamic height calculation to enable hardware-accelerated CSS transitions.
            const currentHeight = this.contentWrapper.scrollHeight;
            this.contentWrapper.style.height = `${currentHeight}px`;
        } else {
            this.contentWrapper.style.height = '0px';
        }
        this.isCollapsed = !this.isCollapsed;
    }
}
