(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["uploads-uploads-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./uploads/uploads.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./uploads/uploads.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>On Cloud</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let f of cloudFiles\">\n       <ion-label class=\"ion-text-wrap\"> <a [href]=f.url target=\"_blank\" rel=\"noopener\">Download</a></ion-label>\n      <ion-thumbnail slot=\"start\">\n        <img [src]=f.url />\n      </ion-thumbnail>\n      <ion-button slot=\"end\" (click)=\"deleteFile(f.ref)\" color=\"danger\">\n        <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n");

/***/ }),

/***/ "./uploads/uploads-routing.module.ts":
/*!*******************************************!*\
  !*** ./uploads/uploads-routing.module.ts ***!
  \*******************************************/
/*! exports provided: UploadsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadsPageRoutingModule", function() { return UploadsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _uploads_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uploads.page */ "./uploads/uploads.page.ts");




const routes = [
    {
        path: '',
        component: _uploads_page__WEBPACK_IMPORTED_MODULE_3__["UploadsPage"]
    }
];
let UploadsPageRoutingModule = class UploadsPageRoutingModule {
};
UploadsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UploadsPageRoutingModule);



/***/ }),

/***/ "./uploads/uploads.module.ts":
/*!***********************************!*\
  !*** ./uploads/uploads.module.ts ***!
  \***********************************/
/*! exports provided: UploadsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadsPageModule", function() { return UploadsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _uploads_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uploads-routing.module */ "./uploads/uploads-routing.module.ts");
/* harmony import */ var _uploads_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uploads.page */ "./uploads/uploads.page.ts");







let UploadsPageModule = class UploadsPageModule {
};
UploadsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _uploads_routing_module__WEBPACK_IMPORTED_MODULE_5__["UploadsPageRoutingModule"]
        ],
        declarations: [_uploads_page__WEBPACK_IMPORTED_MODULE_6__["UploadsPage"]]
    })
], UploadsPageModule);



/***/ }),

/***/ "./uploads/uploads.page.scss":
/*!***********************************!*\
  !*** ./uploads/uploads.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWRzL3VwbG9hZHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./uploads/uploads.page.ts":
/*!*********************************!*\
  !*** ./uploads/uploads.page.ts ***!
  \*********************************/
/*! exports provided: UploadsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadsPage", function() { return UploadsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);



let UploadsPage = class UploadsPage {
    constructor() {
        this.cloudFiles = [];
        this.showFullPath = false;
    }
    ngOnInit() {
        this.loadFiles();
    }
    loadFiles() {
        this.cloudFiles = [];
        const storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref('files');
        storageRef.listAll().then(result => {
            result.items.forEach((ref) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.cloudFiles.push({
                    name: ref.name,
                    full: ref.fullPath,
                    url: yield ref.getDownloadURL(),
                    ref: ref
                });
            }));
        });
    }
    // openExternal(url) {
    //   this.iab.create(url);
    // }
    deleteFile(ref) {
        ref.delete().then(() => {
            this.loadFiles();
        });
    }
};
UploadsPage.ctorParameters = () => [];
UploadsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-uploads',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./uploads.page.html */ "./node_modules/raw-loader/dist/cjs.js!./uploads/uploads.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./uploads.page.scss */ "./uploads/uploads.page.scss")).default]
    })
], UploadsPage);



/***/ })

}]);
//# sourceMappingURL=uploads-uploads-module-es2015.js.map