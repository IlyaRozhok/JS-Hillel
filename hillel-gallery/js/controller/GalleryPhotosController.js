export class GalleryPhotosController {
    #PhotosModel = null;
    #PhotosView = null;
    #PHOTOS_PATH = null;
    #dbKey = null;

    constructor(config, PhotosModel, PhotosView) {
        this.#setView(PhotosView);
        this.#setModel(PhotosModel);
        this.#PHOTOS_PATH = config.photosPath;
        this.#dbKey = config.dbKey;

        this.#setOnload();
    };

    #setView(PhotosView) {
        this.#PhotosView = new PhotosView(this);
    };

    #setModel(PhotosModel) {
        this.#PhotosModel = new PhotosModel(this);
    };

    #setOnload() {
        document.addEventListener('DOMContentLoaded', this.#loadedHandler);
    };

    #loadedHandler = () => {
        const id = this.#PhotosModel.getDataFromDb('id');
        const updatedPath = `${this.#PHOTOS_PATH}?albumId=${id}`;
        this.#getPhotos(+id, updatedPath);
    };

    async #getPhotos(id, url) {
        const response = await fetch(url);
        const data = await response.json();
        this.#renderPhotos(data);
    };

    #renderPhotos(data) {
        this.#PhotosView.createTemplate();
        data.forEach(item => {
            this.#PhotosView.renderItem(item.url)
        })
    };

    //get and set
    get dbKey() {
        return this.#dbKey;
    }

}