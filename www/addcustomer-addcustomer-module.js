(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addcustomer-addcustomer-module"],{

/***/ "./src/app/addcustomer/addcustomer.module.ts":
/*!***************************************************!*\
  !*** ./src/app/addcustomer/addcustomer.module.ts ***!
  \***************************************************/
/*! exports provided: AddcustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcustomerPageModule", function() { return AddcustomerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addcustomer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addcustomer.page */ "./src/app/addcustomer/addcustomer.page.ts");







var routes = [
    {
        path: '',
        component: _addcustomer_page__WEBPACK_IMPORTED_MODULE_6__["AddcustomerPage"]
    }
];
var AddcustomerPageModule = /** @class */ (function () {
    function AddcustomerPageModule() {
    }
    AddcustomerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_addcustomer_page__WEBPACK_IMPORTED_MODULE_6__["AddcustomerPage"]]
        })
    ], AddcustomerPageModule);
    return AddcustomerPageModule;
}());



/***/ }),

/***/ "./src/app/addcustomer/addcustomer.page.html":
/*!***************************************************!*\
  !*** ./src/app/addcustomer/addcustomer.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title>Add Customer</ion-title>\n      <ion-buttons slot=\"primary\">\n        <ion-back-button text=\"Back\" icon=\"\" color=\"tertiary\" fill=\"outline\"></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-item>\n      <ion-label position=\"floating\"> Name </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"name_customer\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\"> Description </ion-label>\n      <ion-textarea [(ngModel)]=\"desc_customer\"></ion-textarea>\n    </ion-item>\n  \n    <ion-button expand=\"block\" padding color=\"tertiary\" *ngIf=\"!id\" (click)=\"createdProses()\" fill=\"outline\">Submit</ion-button>\n    <ion-button expand=\"block\" padding color=\"tertiary\" *ngIf=\"id>=1\" (click)=\"updateProses()\" fill=\"outline\">Update</ion-button>\n  \n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/addcustomer/addcustomer.page.scss":
/*!***************************************************!*\
  !*** ./src/app/addcustomer/addcustomer.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZGN1c3RvbWVyL2FkZGN1c3RvbWVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/addcustomer/addcustomer.page.ts":
/*!*************************************************!*\
  !*** ./src/app/addcustomer/addcustomer.page.ts ***!
  \*************************************************/
/*! exports provided: AddcustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcustomerPage", function() { return AddcustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var AddcustomerPage = /** @class */ (function () {
    function AddcustomerPage(postPvdr, router, toastController, actRoute) {
        this.postPvdr = postPvdr;
        this.router = router;
        this.toastController = toastController;
        this.actRoute = actRoute;
        this.name_customer = '';
        this.desc_customer = '';
    }
    AddcustomerPage.prototype.ngOnInit = function () {
    };
    AddcustomerPage.prototype.createdProses = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast, body;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.name_customer == '')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Customer name is required',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(this.desc_customer == '')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Decsription is required',
                                duration: 2000
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 5];
                    case 4:
                        body = {
                            aksi: 'add',
                            name_customer: this.name_customer,
                            desc_customer: this.desc_customer
                        };
                        //   this.postPvdr.postData(body, 'file_aksi.php').subscribe( async data => {
                        //     var alertpesan = data.msg;
                        //     if (data.success) {
                        this.router.navigate(['/customer']);
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AddcustomerPage.prototype.updateProses = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast, body;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.name_customer == '')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Customer is required',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(this.desc_customer == '')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Description is required',
                                duration: 2000
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 5];
                    case 4:
                        body = {
                            aksi: 'update',
                            customer_id: this.id,
                            name_customer: this.name_customer,
                            desc_customer: this.desc_customer,
                        };
                        // this.postPvdr.postData(body, 'file_aksi.php').subscribe( async data => {
                        //   var alertpesan = data.msg;
                        //   if (data.success) {
                        this.router.navigate(['/customer']);
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AddcustomerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addcustomer',
            template: __webpack_require__(/*! ./addcustomer.page.html */ "./src/app/addcustomer/addcustomer.page.html"),
            styles: [__webpack_require__(/*! ./addcustomer.page.scss */ "./src/app/addcustomer/addcustomer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_post_provider__WEBPACK_IMPORTED_MODULE_2__["PostProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AddcustomerPage);
    return AddcustomerPage;
}());



/***/ })

}]);
//# sourceMappingURL=addcustomer-addcustomer-module.js.map