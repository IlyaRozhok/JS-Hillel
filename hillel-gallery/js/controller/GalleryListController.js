export class GalleryListController {
    #ListModel = null;
    #ListView = null;
    #ALBUMS_PATH = null;
    #albumsListClass = null;
    #dbKey = null;

    constructor(config, Model, View) {
        //set controller properties
        this.#ALBUMS_PATH = config.albumsPath;
        this.#albumsListClass = config.albumsListClass;
        this.#dbKey = config.dbKey;

        this.#setView(View)
        this.#setModel(Model);
        this.#setOnloadEvent();
    };

    #setView(ListView) {
        this.#ListView = new ListView(this);
        this.viewOlContainer = GalleryListController.#getDOMElement(this.albumsListClass);
    };

    #setModel(ListModel) {
        this.#ListModel = new ListModel(this);
        this.#ListModel.storageKey = this.#dbKey;
    };

    static #getDOMElement(selector) {
        const element = document.querySelectorAll(selector);
        if (!element.length) throw new Error('Did not find HTML element');
        return element[0];
    };

    static async #request(url) {
        const response = await fetch(url);
        return response.json();
    };

    #onloadHandler = () => {
        this.#setAlbums();
        this.#ListModel.deleteItem('id');
    };

    #setOnloadEvent() {
        document.addEventListener('DOMContentLoaded', this.#onloadHandler());
    };

    #clickHandler = (e) => {
        const id = e.target.parentElement.id;
        this.#ListModel.setIdData('id', id);
    };

    #setOnClick() {
        const ol = GalleryListController.#getDOMElement(this.albumsListClass)
        ol.addEventListener('click', this.#clickHandler)
    };

    async #setAlbums() {
        const albumsList = await GalleryListController.#request(this.ALBUMS_PATH);
        if (!albumsList.length) throw new Error('Album list is empty');
        this.modelAlbums = albumsList;
        this.#renderItems();
        this.#saveAlbumsData();
    };

    #renderItems() {
        this.#ListModel.albums
            .forEach((item) => {
                this.#ListView.createTemplate(item.title, item.id)
            })
        this.#setOnClick();
    };

    #saveAlbumsData() {
        this.#ListModel.setData(this.#dbKey, this.#ListModel.albums);
    };

    //get and set
    set modelAlbums(data) {
        if (!data.length) throw new Error('Data in albums setter is empty.');
        this.#ListModel.albums = data;
    };

    set viewOlContainer(data) {
        if (data.tagName !== 'OL') throw new Error('Value in setter is not an OL element.');
        this.#ListView.OlContainer = data;
    };

    set storageKey(key) {
        if (typeof key !== 'string' || key.trim().length === 0) throw new Error('Invalid db-key in setter.');
        this.#ListModel.storageKey = key;
    };

    get ALBUMS_PATH() {
        return this.#ALBUMS_PATH;
    };

    get albumsListClass() {
        return this.#albumsListClass;
    };

}