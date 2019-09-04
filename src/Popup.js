export class Popup {
    constructor(elem) {
        this.elem = elem;
        this.window = elem.getElementsByClassName('window')[0];
    }

    async close() {
        this.elem.style.top = '-100%';
        this.window.style.top = '-100%';
    }

    async open() {
        this.elem.style.top = '0';
        this.window.style.top = '0'
    }
}
