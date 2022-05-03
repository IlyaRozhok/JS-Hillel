export class GalleryPhotosView {

    createTemplate() {
        const container = document.body.querySelectorAll('.container');
        const wrapper = document.createElement('div');
        wrapper.classList.add('gallery-wrapper', 'd-flex', 'flex-wrap', 'justify-content-around', 'align-items-center');
        container[0].append(wrapper);
    };

    renderItem(path) {
        const wrapper = document.body.querySelectorAll('.gallery-wrapper');
        const image = document.createElement('img');
        image.src = path;
        image.classList.add('gallery-photo', 'animate__animated', 'animate__rotateIn');
        wrapper[0].append(image);
    };
}