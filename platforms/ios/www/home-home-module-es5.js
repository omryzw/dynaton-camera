(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-title>\n      On My Device\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/uploads\">\n        <ion-icon slot=\"icon-only\" name=\"cloud\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-progress-bar [value]=\"uploadProgress\" color=\"danger\" *ngIf=\"uploadBegan\"></ion-progress-bar>\n\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let f of files\">\n      <ion-item (click)=\"openFile(f)\">\n        <ion-icon name=\"images\" slot=\"start\"></ion-icon>\n        <ion-label class=\"ion-text-wrap\">\n          {{ f.name }}\n        </ion-label>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"uploadFile(f)\" color=\"primary\">\n          <ion-icon name=\"cloud-upload\" slot=\"icon-only\"></ion-icon>\n        </ion-item-option>\n        <ion-item-option (click)=\"deleteFile(f)\" color=\"danger\">\n          <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n      \n\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"tertiary\">\n    <ion-button fill=\"clear\" expand=\"full\" color=\"light\" (click)=\"selectMedia()\">\n      <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\n      Upload\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/home/home-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/home.module.ts":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/home/home-routing.module.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/home/home.page.scss":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7QUFGRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/home/home.page.ts":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/media-capture/ngx */
      "./node_modules/@ionic-native/media-capture/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/File/ngx */
      "./node_modules/@ionic-native/File/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/photo-viewer/ngx */
      "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/storage */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");

      var MEDIA_FOLDER_NAME = 'my_media';

      var HomePage = /*#__PURE__*/function () {
        function HomePage(imagePicker, mediaCapture, file, photoViewer, actionSheetController, plt, toastCtrl, storage) {
          _classCallCheck(this, HomePage);

          this.imagePicker = imagePicker;
          this.mediaCapture = mediaCapture;
          this.file = file;
          this.photoViewer = photoViewer;
          this.actionSheetController = actionSheetController;
          this.plt = plt;
          this.toastCtrl = toastCtrl;
          this.storage = storage;
          this.files = [];
          this.uploadProgress = 0;
          this.uploadBegan = false;
        }

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.plt.ready().then(function () {
              var path = _this.file.dataDirectory;

              _this.file.checkDir(path, MEDIA_FOLDER_NAME).then(function () {
                _this.loadFiles();
              }, function (err) {
                _this.file.createDir(path, MEDIA_FOLDER_NAME, false);
              });
            });
          }
        }, {
          key: "loadFiles",
          value: function loadFiles() {
            var _this2 = this;

            this.file.listDir(this.file.dataDirectory, MEDIA_FOLDER_NAME).then(function (res) {
              _this2.files = res;
            }, function (err) {
              return console.log('error loading files: ', err);
            });
          }
        }, {
          key: "selectMedia",
          value: function selectMedia() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.actionSheetController.create({
                        buttons: [{
                          text: 'Use Camera',
                          handler: function handler() {
                            _this3.captureImage();
                          }
                        }, {
                          text: 'Choose Existing',
                          handler: function handler() {
                            _this3.pickImages();
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      actionSheet = _context.sent;
                      _context.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "pickImages",
          value: function pickImages() {
            var _this4 = this;

            this.imagePicker.getPictures({}).then(function (results) {
              for (var i = 0; i < results.length; i++) {
                _this4.copyFileToLocalDir(results[i]);
              }
            });
          }
        }, {
          key: "captureImage",
          value: function captureImage() {
            var _this5 = this;

            this.mediaCapture.captureImage().then(function (data) {
              if (data.length > 0) {
                _this5.copyFileToLocalDir(data[0].fullPath);
              }
            }, function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "copyFileToLocalDir",
          value: function copyFileToLocalDir(fullPath) {
            var _this6 = this;

            var myPath = fullPath; // Make sure we copy from the right location

            if (fullPath.indexOf('file://') < 0) {
              myPath = 'file://' + fullPath;
            }

            var ext = myPath.split('.').pop();
            var d = Date.now();
            var newName = "".concat(d, ".").concat(ext);
            var name = myPath.substr(myPath.lastIndexOf('/') + 1);
            var copyFrom = myPath.substr(0, myPath.lastIndexOf('/') + 1);
            var copyTo = this.file.dataDirectory + MEDIA_FOLDER_NAME;
            this.file.copyFile(copyFrom, name, copyTo, newName).then(function (success) {
              _this6.loadFiles();
            }, function (error) {
              console.log('error: ', error);
            });
          }
        }, {
          key: "openFile",
          value: function openFile(f) {
            if (f.name.indexOf('.jpg') > -1) {
              this.photoViewer.show(f.nativeURL, f.name);
            }
          }
        }, {
          key: "deleteFile",
          value: function deleteFile(f) {
            var _this7 = this;

            var path = f.nativeURL.substr(0, f.nativeURL.lastIndexOf('/') + 1);
            this.file.removeFile(path, f.name).then(function () {
              _this7.loadFiles();
            }, function (err) {
              return console.log('error remove: ', err);
            });
          }
        }, {
          key: "uploadFile",
          value: function uploadFile(f) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this8 = this;

              var path, type, buffer, fileBlob, randomId, uploadTask;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.uploadBegan = true;
                      path = f.nativeURL.substr(0, f.nativeURL.lastIndexOf('/') + 1);
                      type = this.getMimeType(f.name.split('.').pop());
                      _context3.next = 5;
                      return this.file.readAsArrayBuffer(path, f.name);

                    case 5:
                      buffer = _context3.sent;
                      fileBlob = new Blob([buffer], type);
                      randomId = Math.random().toString(36).substring(2, 8);
                      uploadTask = this.storage.upload("files/".concat(new Date().getTime(), "_").concat(randomId), fileBlob);
                      uploadTask.percentageChanges().subscribe(function (change) {
                        _this8.uploadProgress = change;
                      });
                      uploadTask.then(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          var toast;
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  _context2.next = 2;
                                  return this.toastCtrl.create({
                                    duration: 3600,
                                    message: 'Success : View Images In The Uploads Area'
                                  });

                                case 2:
                                  toast = _context2.sent;
                                  toast.present();
                                  this.deleteFile(f);
                                  this.uploadBegan = false;

                                case 6:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));
                      });

                    case 11:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getMimeType",
          value: function getMimeType(fileExt) {
            if (fileExt == 'jpg') return {
              type: 'image/jpg'
            };
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__["ImagePicker"]
        }, {
          type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_4__["MediaCapture"]
        }, {
          type: _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_5__["File"]
        }, {
          type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_6__["PhotoViewer"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map