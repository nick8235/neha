(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-customer-module"],{

/***/ "./src/app/customer/customer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.module.ts ***!
  \*********************************************/
/*! exports provided: CustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPageModule", function() { return CustomerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _customer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer.page */ "./src/app/customer/customer.page.ts");







var routes = [
    {
        path: '',
        component: _customer_page__WEBPACK_IMPORTED_MODULE_6__["CustomerPage"]
    }
];
var CustomerPageModule = /** @class */ (function () {
    function CustomerPageModule() {
    }
    CustomerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_customer_page__WEBPACK_IMPORTED_MODULE_6__["CustomerPage"]]
        })
    ], CustomerPageModule);
    return CustomerPageModule;
}());



/***/ }),

/***/ "./src/app/customer/customer.page.html":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"primary\">\n          <ion-button (click)=\"proseslogout()\"><ion-icon slot=\"end\" name=\"log-out\"></ion-icon></ion-button>\n      </ion-buttons>\n   \n    <ion-buttons slot=\"primary\" (click)=\"addCustomer()\">\n      <ion-button color=\"tertiary\" fill=\"outline\">\n        New\n        <ion-icon slot=\"end\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    Welcome {{username}}\n    <br>\n    <br>\n\n   <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"arrow-dropdown\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let customer of customers\">\n      <ion-item-options side=\"start\">\n        <ion-item-option color=\"danger\" (click)=\"delCustomer(customer.customer_id)\">Delete</ion-item-option>\n      </ion-item-options>\n  \n      <ion-item>\n        <ion-label>{{customer.name_customer}}</ion-label>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n\n        <ion-item-option color=\"secondary\" (click)=\"showCustomer(customer.customer_id,customer.name_customer,customer.desc_customer)\">Show</ion-item-option>\n     \n        <ion-item-option (click)=\"updateCustomer(customer.customer_id,customer.name_customer,customer.desc_customer)\">Update</ion-item-option>\n\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-infinite-scroll  (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/customer/customer.page.scss":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/customer/customer.page.ts":
/*!*******************************************!*\
  !*** ./src/app/customer/customer.page.ts ***!
  \*******************************************/
/*! exports provided: CustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPage", function() { return CustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






var CustomerPage = /** @class */ (function () {
    function CustomerPage(router, postPvdr, toastController, storage) {
        this.router = router;
        this.postPvdr = postPvdr;
        this.toastController = toastController;
        this.storage = storage;
        this.customers = [];
        this.limit = 10;
        this.start = 0;
    }
    CustomerPage.prototype.ngOnInit = function () {
    };
    CustomerPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.customers = [];
        this.start = 0;
        this.loadCustomer();
        this.storage.get('session_storage').then(function (res) {
            _this.anggota = res;
            _this.username = _this.anggota.username;
        });
    };
    CustomerPage.prototype.proseslogout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.storage.clear();
                        this.router.navigate(['/login']);
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Logout successful',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerPage.prototype.addCustomer = function () {
        this.router.navigate(['/addcustomer']);
    };
    CustomerPage.prototype.updateCustomer = function (id, name, desc) {
        this.router.navigate(['/updatecustomer/' + id + '/' + name + '/' + desc]);
    };
    CustomerPage.prototype.showCustomer = function (id, name, desc) {
        this.router.navigate(['/showcustomer/' + id + '/' + name + '/' + desc]);
    };
    CustomerPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.ionViewWillEnter();
            event.target.complete();
        }, 500);
    };
    CustomerPage.prototype.loadData = function (event) {
        var _this = this;
        this.start += this.limit;
        setTimeout(function () {
            _this.loadCustomer().then(function () {
                event.target.complete();
            });
        }, 500);
    };
    CustomerPage.prototype.delCustomer = function (id) {
        var body = {
            aksi: 'delete',
            customer_id: id
        };
        // this.postPvdr.postData(body, 'file_aksi.php').subscribe(data => {
        //     this.ionViewWillEnter();
        //   });
    };
    CustomerPage.prototype.loadCustomer = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'getdata',
                limit: _this.limit,
                start: _this.start,
            };
            // this.postPvdr.postData(body, 'file_aksi.php').subscribe(data => {
            //   for (let customer of data.result) {
            //     this.customers.push(customer);
            //   }
            //   resolve(true);
            // });
        });
    };
    CustomerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.page.html */ "./src/app/customer/customer.page.html"),
            styles: [__webpack_require__(/*! ./customer.page.scss */ "./src/app/customer/customer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_4__["PostProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], CustomerPage);
    return CustomerPage;
}());



/***/ })

}]);
//# sourceMappingURL=customer-customer-module.js.map