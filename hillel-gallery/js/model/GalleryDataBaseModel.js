export class GalleryDataBaseModel {
    #dbKey = null;

    static #stringifyData(data) {
        return JSON.stringify(data)
    };

    getData(dbKey) {
        return localStorage.getItem(dbKey)
    };

    setData(dbKey, data) {
        if (this.hasData(dbKey)) return;
        localStorage.setItem(dbKey, GalleryDataBaseModel.#stringifyData(data))
    };

    setIdData(dbKey, data) {
        if (!data.trim().length) return;
        localStorage.setItem(dbKey, GalleryDataBaseModel.#stringifyData(data))
    };

    deleteItem(dbKey) {
        if (this.hasData(dbKey)) {
            localStorage.removeItem(dbKey);
        }
    };

    static #hasData(key) {
        return (!!localStorage.getItem(key))
    };

    hasData(key) {
        return GalleryDataBaseModel.#hasData(key)
    };

    //get and set
    set dbKey(key) {
        (key) ? this.#dbKey = key : new Error('Error in setting db-key in storage setter.');
    };

    get dbKey() {
        return this.#dbKey;
    };

}