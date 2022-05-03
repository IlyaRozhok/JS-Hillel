export class GalleryListView {
    #OlContainer = null;

    createTemplate(title, id) {
        const ol = this.OlContainer;
        const li = document.createElement('li');
        const link = document.createElement('a');
        li.classList.add('list-item', 'animate__animated', 'animate__rollIn');
        li.id = id;
        link.href = './pages/photos.html';
        link.setAttribute('target', '_blank');
        link.classList.add('list-link');
        link.innerHTML = title;
        li.append(link);
        ol.append(li);
        return ol;
    };

    set OlContainer(HTMLElement) {
        !!HTMLElement ? this.#OlContainer = HTMLElement : new Error('Invalid data in list container argument.')
    };

    get OlContainer() {
        return this.#OlContainer;
    };
}