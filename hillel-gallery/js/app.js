'use strict';
import {GalleryListController as ListController} from './controller/GalleryListController.js';
import {GalleryListModel as ListModel} from './model/GalleryListModel.js';
import {GalleryListView as ListView} from './view/GalleryListView.js';
import {GalleryPhotosController as PhotosController} from "./controller/GalleryPhotosController.js";
import {GalleryPhotosModel as PhotosModel} from "./model/GalleryPhotosModel.js";
import {GalleryPhotosView as PhotosView} from "./view/GalleryPhotosView.js";


const app = (() => {

    if (window.location.pathname === '/hillel-gallery/index.html') {
        const appList = (() => {
            const config = {
                albumsPath: 'https://jsonplaceholder.typicode.com/albums',
                albumsListClass: '.list-container',
                dbKey: 'albumStorage'
            };
            const controller = new ListController(config, ListModel, ListView);
            return controller;
        })()
    }

    if (window.location.pathname === '/hillel-gallery/pages/photos.html') {
        const appPhotos = (() => {
            const config = {
                photosPath: 'https://jsonplaceholder.typicode.com/photos',
                phContainerClass: '.photos-container',
                dbKey: 'albumStorage'
            };
            const PhController = new PhotosController(config, PhotosModel, PhotosView);
            return PhController;
        })()
    }

})();