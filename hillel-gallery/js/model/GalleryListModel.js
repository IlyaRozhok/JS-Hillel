import {GalleryDataBaseModel as Storage} from "./GalleryDataBaseModel.js";

export class GalleryListModel extends Storage {
    #albums = null;

    //get and set
    set albums(arr) {
        Array.isArray(arr) ? this.#albums = arr : new Error('Error in setting album in model setter.');
    };

    get albums() {
        return this.#albums;
    };

    set storageKey(key) {
        this.dbKey = key;
    };

    get storageKey() {
        return this.dbKey;
    };

};