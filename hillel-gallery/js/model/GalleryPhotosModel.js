export class GalleryPhotosModel {
    #dbKey = null;

    getDataFromDb(dbKey) {
        if (this.checkData()) throw new Error('Invalid db key');
        return this.parsedData(localStorage.getItem(dbKey))
    }

    checkData(dbKey) {
        return !!localStorage.getItem(dbKey);
    }

    parsedData(data) {
        return JSON.parse(data)
    };

}